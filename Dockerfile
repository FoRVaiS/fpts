# Thank you BretFisher
# https://github.com/BretFisher/nodejs-rocks-in-docker

FROM node:18.17.0-slim as node
FROM ubuntu:jammy-20230624 as base

ARG USER=node
ARG WORKSPACE=/app

# Copy node binaries and libraries
COPY --from=node /usr/local/include/ /usr/local/include/
COPY --from=node /usr/local/lib/ /usr/local/lib/
COPY --from=node /usr/local/bin/ /usr/local/bin/

# Create a non-privileged user and workspace
RUN groupadd --gid 1000 ${USER} \
    && useradd --uid 1000 --gid ${USER} --shell /bin/bash --create-home ${USER} \
    && mkdir ${WORKSPACE} \
    && chown -R ${USER}:${USER} ${WORKSPACE}

WORKDIR ${WORKSPACE}

# Install production level dependencies
COPY --chown=${USER}:${USER} package*.json yarn*.lock ./
USER ${USER}
RUN npm install --omit=dev && npm cache clean --force


# Run development container
FROM base as dev-container
USER root
RUN apt-get update \
    && apt-get -qq upgrade -y --no-install-recommends \
    # Enables git integration in vscode
    # No git support for non-vscode users due to lack of SSH and GPG support in this particular project
    git \
    # Enables passwordless sudo in the dev container
    sudo \
    && usermod -aG sudo ${USER} \
    && echo "${USER} ALL=(ALL:ALL) NOPASSWD: ALL" | sudo EDITOR='tee -a' visudo \
    && npm install -g npm-check-updates \
    && npm cache clean --force
ENV NODE_ENV=development
USER ${USER}
RUN npm install && npm cache clean --force
CMD ["bash"]
