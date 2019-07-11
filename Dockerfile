FROM node:8

RUN npm install -g gatsby-cli
RUN git config --global user.email "vachirawit.mark@gmail.com" \
    && git config --global user.name "markvachi"

RUN gatsby new gatsby-site

workdir app