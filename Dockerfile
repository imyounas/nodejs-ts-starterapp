FROM node:14.6.0-stretch

# Env
ENV SERVER_PORT=3000
ENV MONGO_USER=root
ENV MONGO_PASSWORD=ABC123ssi
ENV MONGO_PATH=@mongodb-dev:27017
ENV MONGO_DATABASE=productsdb
ENV ACCESS_TOKEN_SECRET=Accesssecret
ENV REFRESH_TOKEN_SECRET=Refreshsecret

# Create Directory for the Container
WORKDIR /usr/src/nodeStarterApp
# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN npm install
# Copy all other source code to work directory
ADD . /usr/src/nodeStarterApp
# TypeScript
RUN npm run tsc

WORKDIR /usr/src/nodeStarterApp/dist
EXPOSE 3000

CMD ["node", "/usr/src/nodeStarterApp/dist/WebServer.js"]   