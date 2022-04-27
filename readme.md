### Webpack Template

 - To install run npm install --> it will build node_packages
 - then npm run build:dev  --> it will build dist folder
 - and npm run start:dev --> it run server on localhost
```json
{
  "name": "projectwsbjs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode=none",
    "build:dev": "webpack --mode=development",
    "start:dev": "webpack-dev-server --mode=development"
  },
  "keywords": [],
  "license": "ISC",
  "dependencies": {
    "@babel/preset-env": "^7.16.8",
    "autoprefixer": "^10.4.2",
    "babel-loader": "^8.2.3",
    "copy-webpack-plugin": "^10.2.0",
    "css-loader": "^6.5.1",
    "html-webpack-plugin": "^5.5.0",
    "mini-css-extract-plugin": "^2.4.5",
    "node-sass": "^7.0.1",
    "postcss": "^8.4.5",
    "postcss-loader": "^6.2.1",
    "sass-loader": "^12.4.0",
    "style-loader": "^3.3.1",
    "webpack": "5.66",
    "webpack-dev-server": "^4.7.3"
  },
  "devDependencies": {
    "webpack-cli": "^4.9.1"
  }
}
```