FROM node:8.1.2-alpine

RUN apk add --no-cache \
  make \
  gcc \
  g++ \
  python

RUN mkdir app
WORKDIR app

ADD package.json .
RUN npm i -q

ADD . .

EXPOSE 8000

CMD ["npm", "start"]