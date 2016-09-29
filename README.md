MEAN Stack Example
Following videos from a Lynda tutorial: https://www.lynda.com/Express-js-tutorials/Welcome/440962/509016-4.html
Commits tried to follow each video, however, I haven't tagged them appropriately.

Initial project was created using a generator (gulp-angular) with Yeoman:
meanexample username$ npm install -g yo gulp bower generator-gulp-angular
meanexample username$ cd frontend
frontend username$ yo gulp-angular mymessenger

Default settings used:
- Angular version? Select: 1.5.x (stable)
- Angular modules? Select: disable all
- jQuery? Select: None (Angular will use its own jqLite)
- REST resource library? Select: None, $http is enough
- Angular router? Select: UI Router, flexible routing with nested views
- UI framework? Select: Bootstrap
- Bootstrap component? Select: Angular UI Bootstrap, Bootstrap components written in pure AngularJS by the AngularUI Team
- CSS preprocessor? Select: Sass (Node)
- JS preprocessor? Select: ES6 (Babel formerly 6to5), ECMAScript 6 compiled with Babel which requires no runtime
- HTML template engine? Select: None, I like to code in standard HTML

On the command line, you need to run the frontend, background, and database servers.
Sample commands to run the project after cloning:

##############
## FRONTEND ##
##############
# Navigate to the frontend folder
meanexample username$ cd frontend

# Build the gulp frontend project
frontend username$ gulp

# Start the gulp server, leave it running
frontend username$ gulp serve

# Afterwards, the website will open on the browser automatically
# It will also output the URLs to console. For example:

[BS] Access URLs:
 -----------------------------------
       Local: http://localhost:3000/
    External: http://10.0.0.6:3000/
 -----------------------------------
 
#############
## BACKEND ##
#############
# Backend uses node.js, you will need to install npm packages, which I've .gitignored
# Hence you want to install the needed packages

meanexample username$ cd backend
backend username$ npm init
backend username$ npm install express --save
backend username$ npm install mongoose --save
backend username$ bower install satellizer --save
backend username$ npm install jwt-simple --save
backend username$ npm install moment --save

# The save flag will save all required packages as dependencies in backend/package.json

"dependencies": {
    "body-parser": "^1.15.2",
    "express": "^4.14.0",
    "jwt-simple": "^0.5.0",
    "moment": "^2.15.1",
    "mongoose": "^4.6.1"
  }

# Don't forget to install and run the mongoDB server
# New install
username$ brew install mongodb --with-openssl

# Existing install needs an upgrade
username$ brew upgrade mongodb --with-openssl

# Create temp directory and set folder permissions
username$ sudo mkdir /data/db
username$ sudo chown $USER /data/db

# Start the mongoDB server
username$ mongod
