FROM node:20-alpine

RUN addgroup -S app && adduser -S mohit4bug -G app

USER mohit4bug

WORKDIR /app

COPY --chown=mohit4bug:app package*.json ./

USER root

RUN chown -R mohit4bug:app /app

USER mohit4bug

RUN npm ci

COPY . .

CMD npm run start