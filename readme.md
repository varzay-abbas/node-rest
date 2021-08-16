Node, Express with docker and unit test

## Get Started


### 1. Installation

On the command prompt run the following commands:

``` 
 $ git clone https://github.com/varzay-abbas/node-rest.git
 $ cd node-rest
 $ cp .env.example .env (edit it with your secret key and database information)
 $ npm install
 $ npm start
 ```



### 2. Usage

URL : http://localhost:3001/



### 3. Features
- Web framework for Node.js - [Express](http://expressjs.com/)
- Code linting tool - [ESLint](http://eslint.org/)
- Code formatter - [Prettier](https://www.npmjs.com/package/prettier)

### 4. Docker

Build and run Docker container
$ docker build . -t nodejs-rest
Docker container is run with exposing port 3001 from the container to port 9000 on the host with the following command:

docker run -e VERSION=1.1 -p 9000:3001 nodejs-rest