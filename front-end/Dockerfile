FROM node:16

WORKDIR /app

COPY . .

COPY package.json .

RUN npm install

RUN npm install react-router-dom

RUN npm install antd --save

EXPOSE 3000

CMD ["npm", "run", "dev"]
