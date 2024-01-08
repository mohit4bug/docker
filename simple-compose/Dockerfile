FROM node:20-alpine

RUN addgroup -S coders && adduser -S mohit4bug -G coders

USER mohit4bug

WORKDIR /app

COPY --chown=mohit4bug:coders package*.json ./

USER root

RUN chown -R mohit4bug:coders /app

USER mohit4bug

RUN npm install

COPY --chown=mohit4bug:coders . .

CMD npm run start