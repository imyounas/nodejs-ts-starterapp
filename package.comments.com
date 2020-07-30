"dev": "ts-node ./src/app.ts"
 "start": "node ./dist/app.js"
  "prod" : "npm run build && npm start"