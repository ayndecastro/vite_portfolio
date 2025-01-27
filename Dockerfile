FROM node:20-bookworm-slim

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install tini
RUN apt-get update && \
    apt-get install -y tini && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /server

# Set environment variable
ENV NODE_ENV=production

COPY ./server /server

RUN yarn install --frozen-lockfile



USER node

# Expose the port the app runs on
EXPOSE 3000

# Use tini as the entrypoint
ENTRYPOINT ["/usr/bin/tini", "--"]

# Start the application
CMD ["yarn", "start"]
