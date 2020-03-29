FROM node:12.6.0

# Install the NPM version we use.
# Must be run as root
RUN npm i -g npm@6.10.0

# Change user to avoid running commands with root user.
USER node

WORKDIR /code

EXPOSE 3000

# NOTE: Why aren't we running `npm i` in the image itself?
#   The image will be built only once for every time we change this dockerfile. Installing new packages
#   would require us to remove the image and rebuild it, which is prone to error and time-consuming.
#   Running `npm i` everytime we start the container will help us always stay up to date with the packages.
#   You could also run it manually by ssh-ing into the container.
CMD npm i && npm start
