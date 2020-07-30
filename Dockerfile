FROM node

# Env
ENV SERVER_PORT=3000
ENV MONGO_USER=root
ENV MONGO_PASSWORD=ABC123ssi
ENV MONGO_PATH=@localhost:27017
ENV MONGO_DATABASE=ProductsDB
ENV ACCESS_TOKEN_SECRET=Accesssecret
ENV REFRESH_TOKEN_SECRET=Refreshsecret

RUN mkdir -p /home/nodeStarterApp

COPY ./dist /home/nodeStarterApp
COPY ./node_modules /home/nodeStarterApp/node_modules

EXPOSE 3000

CMD ["node", "/home/nodeStarterApp/WebServer.js"]   