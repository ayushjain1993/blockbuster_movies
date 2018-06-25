FROM ubuntu:latest

ENV SDK_URL="https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip" \
    ANDROID_HOME="/usr/local/android-sdk" \
    ANDROID_VERSION=26 \
    ANDROID_BUILD_TOOLS_VERSION=26.0.2

# Update all repositories before proceeding
RUN apt-get update \
    && apt-get install -y apt-utils \
    && apt-get upgrade -y

# Install kvm to enable hardware virtualization and install OpenJDK version 8
RUN apt-get install -y qemu-kvm openjdk-8-jdk

# Download Android SDK
RUN mkdir "$ANDROID_HOME" ~/.android \
    && cd "$ANDROID_HOME" \
    && apt-get install -y curl \
    && curl -o sdk.zip $SDK_URL \
    && apt-get install -y unzip \
    && unzip sdk.zip \
    && rm sdk.zip \
    && yes | $ANDROID_HOME/tools/bin/sdkmanager --licenses

# Install Android Build Tool and Libraries
RUN $ANDROID_HOME/tools/bin/sdkmanager --update
RUN yes | $ANDROID_HOME/tools/bin/sdkmanager "build-tools;${ANDROID_BUILD_TOOLS_VERSION}" \
    "platforms;android-${ANDROID_VERSION}" \
    "platform-tools" \
    "system-images;android-${ANDROID_VERSION};google_apis;x86"

# Alternative images: system-images;android-25;google_apis;armeabi-v7a

# Install Gradle
RUN apt-get install -y gradle

# Create an AVD
RUN $ANDROID_HOME/tools/bin/avdmanager create avd -n blockbuster_movies \
    -k "system-images;android-${ANDROID_VERSION};google_apis;x86" -d 19

# Install NodeJs, NPM, and Cordova
RUN apt-get install -y nodejs \
    && apt-get install -y npm \
    && npm install -g cordova \
    && cordova telemetry off

# Copy the application and switch to this directory
COPY . /application
WORKDIR /application

# Construct the APK files
RUN cordova build android
