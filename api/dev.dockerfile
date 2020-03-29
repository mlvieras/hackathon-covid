FROM ruby:2.6.5

RUN gem install bundler -v 2.1.4

# Change user to avoid running commands with root user.
RUN groupadd --gid 1000 ruby \
  && useradd --uid 1000 --gid ruby --shell /bin/bash --create-home ruby
USER ruby

WORKDIR /code

EXPOSE 3000

# NOTE: Why aren't we running `bundle install` in the image itself?
#   The image will be built only once for every time we change this dockerfile. Installing new packages
#   would require us to remove the image and rebuild it, which is prone to error and time-consuming.
#   Running `bundle install` everytime we start the container will help us always stay up to date with the packages.
#   You could also run it manually by ssh-ing into the container.
CMD rm -f tmp/pids/server.pid && bundle install --path .bundle && bundle exec rails s -b 0.0.0.0
