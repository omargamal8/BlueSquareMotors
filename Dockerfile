from ubuntu:16.04

RUN apt-get update && apt-get -y upgrade && apt-get -y install \
        curl \
        net-tools \
        vim \
        git \
        ffmpeg \
        mediainfo \
        python3.5 \
        python3.5-dev \
        build-essential
RUN curl -sL  https://deb.nodesource.com/setup_10.x | bash -
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN curl -O https://bootstrap.pypa.io/get-pip.py && \
    python3 get-pip.py && \
    rm get-pip.py

RUN apt-get update && apt-get install -y \
        nodejs \
        yarn
RUN yarn add @material-ui/core

WORKDIR blue_square_motors
