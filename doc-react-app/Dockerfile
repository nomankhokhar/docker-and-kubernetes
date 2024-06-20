FROM node:current-alpine3.20

WORKDIR /app
COPY . .

RUN npm install
ENV API_URL=http://localhost:3001
EXPOSE 3000

RUN addgroup app && adduser -S -G app app
USER app
