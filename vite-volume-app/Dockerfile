FROM node:20-alpine

RUN addgroup -S devs && adduser -S mohit4bug -G devs

USER mohit4bug

WORKDIR /app

COPY --chown=mohit4bug:devs package*.json ./

USER root

RUN chown -R mohit4bug:devs /app

USER mohit4bug

RUN npm install

COPY --chown=mohit4bug:devs . .

CMD npm run dev