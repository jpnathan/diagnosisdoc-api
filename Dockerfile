FROM node:12.13-alpine As builder

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build
RUN rm -Rf node_modules

FROM node:12.13-alpine

COPY --from=builder /app/. .

RUN npm install --production

CMD node dist/main.js
