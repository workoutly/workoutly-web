FROM node:16.14-alpine as workoutly-web

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

# ===============================

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
