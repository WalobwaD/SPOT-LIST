FROM node:alpine

WORKDIR /SPOT-LIST

COPY package.json .

RUN npm install 

COPY . .

CMD ["npm", "start"] 