FROM ruby:2.6

WORKDIR /usr/src/app
COPY ./rails ./

RUN gem uninstall bundler &&  bundle install
RUN rails db:migrate

CMD rails s
