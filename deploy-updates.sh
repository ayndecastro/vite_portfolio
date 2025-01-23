#!/bin/bash

if ! source .env; then
    echo "Failed to source creds. Check your .env file!"
    exit 1
fi
user=$USERNAME
pass=$PASSWORD
org=$ORG

# Check if variables are set
if [[ -z "$user" || -z "$pass" || -z "$org" ]]; then
  echo "Error: USERNAME, PASSWORD, or ORG is not set"
  exit 1
fi

current_directory=$(pwd | awk -F'/' '{print $NF}')
echo "Current directory: ${current_directory}"

case "$current_directory" in
  "NYACOL")
    echo "Alpha environment"
    env="alpha"
    ;;
  "NYBCOL")
    echo "Beta environment"
    env="beta"
    ;;
  "NYTCOL")
    echo "Test environment"
    env="test"
    ;;
  "NYPCOL")
    echo "CAUTION: Production environment"
    env="prod"
    ;;
  *)
    echo "You are in an unknown environment. Aborting."
    exit 1
    ;;
esac

# Ask the user for confirmation
echo "Would you like to proceed? (yes/no)"
read answer
if [ "$answer" != "${answer#[Yy]}" ] ;then
    echo "Proceeding..."
else
    echo "Aborted."
    exit 1
fi
# Fetch the token from Docker Hub
token=$(curl -s -H "Content-Type: application/json" -X POST -d "{\"username\": \"$user\", \"password\": \"$pass\"}" https://hub.docker.com/v2/users/login/ | jq -r .token)

# Fetch the repositories from Docker Hub
repos=$(curl -s -H "Authorization: Bearer ${token}" https://hub.docker.com/v2/repositories/${org}?page_size=100 | jq -r '.results[].name' | sort)

# Print the repositories and let the user select one
PS3="Select a repo by number: "
select selected_repo in $repos; do
  break
done

# Fetch the tags for the selected repository
tags=()
url="https://hub.docker.com/v2/namespaces/${org}/repositories/${selected_repo}/tags?page_size=25"
while [ -n "$url" ]; do
  response=$(curl -s -H "Authorization: Bearer ${token}" "$url")
  tags+=($(echo "$response" | jq -r '.results[] | "\(.last_updated) \(.name)"' | sort -r | cut -d' ' -f2-))
  url=$(echo "$response" | jq -r '.next')
done

# Display the tags in pages and let the user select one
page_size=20
pages=$(((${#tags[@]} + page_size - 1) / page_size))
selected_tag=""
for ((page=1; page<=pages; page++)); do
  start=$(((page - 1) * page_size))
  end=$((start + page_size - 1))
  echo "< 'p' ---------------PAGE $page OF $pages:---------------- 'n' >"
  PS3="Select a tag by number:"
  select tag in "${tags[@]:$start:$page_size}"; do
    if [[ "$REPLY" == "n" || "$tag" == "Next Page" ]]; then
      break
    elif [[ "$REPLY" == "p" || "$tag" == "Previous Page" ]]; then
      page=$((page - 2))
      break
    elif [[ -n "$tag" ]]; then
      selected_tag="$tag"
      break 2
    fi
  done
done

current_image=$(grep 'image:' docker-compose-${env}.yml | awk -F':' '{print $2":"$3}' | tr -d ' "')
selected_image="${org}/${selected_repo}:${selected_tag}"
echo "Current image: ${current_image}"
echo "Selected image: ${selected_image}"

# Compare the current and selected images
if [ "${current_image}" == "${selected_image}" ]; then
    # If the images are the same, continue with the script
    echo "Image matches compose file. Proceeding with the deployment."
else
    # If the images are different, print a warning and abort the script
    echo "Warning: The selected image does not match the current image. Aborting deployment."
    exit 1
fi

# Pull the selected image
sudo docker pull ${org}/${selected_repo}:${selected_tag}
if [ $? -ne 0 ]; then
    echo "Failed to pull image. Aborting."
    exit 1
fi

# Run the selected image
sudo docker compose -f docker-compose-${env}.yml up -d
if [ $? -ne 0 ]; then
    echo "Failed to run image. Please check your compose file for this env."
    exit 1
fi

# Prune the system
sudo docker system prune -f
if [ $? -ne 0 ]; then
    echo "WARNING: Auto prune failed."
    exit 1
fi

sudo docker ps | grep ${selected_repo}


