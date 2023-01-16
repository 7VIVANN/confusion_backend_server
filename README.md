# Confusion Backend Server
### project part of [Full-Stack Web Development with React Specialization](https://www.coursera.org/specializations/full-stack-react) 

## Install Requirements
```
yarn install
```
## Build for deployment
```
yarn build
```

## Run the backend server
```
yarn start
```

## Features

<ol>
<li>User authentication using PassportJS which supports OAuth, OAuth2</li>
<li>Session Cookies using JWT to verify identity</li>
<li>HTTPS endpoints for secure communication</li>
</ol>


# NOTE:

## Pre-requisites for mongodb and OAuth
Create and configure your config.js which includes your DB's mongourl and sercrets for [JWT](https://jwt.io/introduction)

Example:
```
module.exports = {
  'secretKey': 'my-secret-key',
  'mongoUrl': 'mongodb://localhost:27017/conFusion',
  'facebook': {
    clientId: '123456678',
    clientSecret: 'abcdefg',
  }
};
```

## Pre-requisites for https endpoints
### You can either 
<ol>
<li>expose https endpoints to the web</li>
<li>expose a nginx web server which acts as proxy for incoming requests</li> 
</ol>

[Read more about encrypted enpoints](https://nickcraver.com/blog/2013/04/23/stackoverflow-com-the-road-to-ssl/)

### SSL Certs
Https endpoints need a SSL certificate which authenticates a website's identity and enables an encrypted connection

[Read to learn why SSL certs are necessary](https://www.kaspersky.com/resource-center/definitions/what-is-a-ssl-certificate)

### Install SSL certificate for the project inside PROJECT_ROOT/bin

#### <b>Linux</b>
```
cd bin
openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem
```
#### <b>Windows</b>
If you are using a Windows machine, you may need to install openssl. You can find some openssl binary distributions [here](https://wiki.openssl.org/index.php/Binaries). Also, [this article](https://blog.didierstevens.com/2015/03/30/howto-make-your-own-cert-with-openssl-on-windows/) gives the steps for generating the certificates in Windows. Another article provides similar instructions. [Here's an online service](http://www.selfsignedcertificate.com/) to generate self-signed certificates

