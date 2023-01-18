FROM node:alpine AS deps

WORKDIR /SPOT-LIST

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

FROM node:alpine AS BUILD_IMAGE

WORKDIR /SPOT-LIST

COPY --from=deps SPOT-LIST/node_modules ./node_modules

COPY . .

RUN npm run build

RUN rm -rf node_modules

RUN npm install --production --froze-lockfile --ignore-scripts --prefer-offline

FROM node:alpine

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs

RUN adduser -S reactjs -u 1001

WORKDIR /SPOT-LIST 

COPY --from=BUILD_IMAGE --chown=reactjs:node /SPOT-LIST/package.json /SPOT-LIST/package-lock.json ./

COPY --from=BUILD_IMAGE --chown=reactjs:node /SPOT-LIST/node_modules ./node_modules

COPY --from=BUILD_IMAGE --chown=reactjs:node /SPOT-LIST/public ./public

COPY --from=BUILD_IMAGE --chown=reactjs:node /SPOT-LIST/src ./src

USER reactjs

EXPOSE 3000

CMD ["npm", "start"] 