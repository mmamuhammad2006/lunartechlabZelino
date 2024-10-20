const express = require('express');
const helmet = require('helmet');
const app = express();

const helmetMiddleware = (app) => {
    app.use(helmet());
    app.use(helmet.contentSecurityPolicy({ //Content Security Policy (CSP):
        directives: {
            defaultSrc: ["'self'",], // Allow resources from the same origin
            scriptSrc: ["'self'", "'unsafe-inline'","*"], // Allow all scripts from any source
            styleSrc: ["'self'", "*"], // Allow all styles from any source
            imgSrc: ["'self'", "*"], // Allow images from any source
            connectSrc: ["*"], // Allow connections to any sourc
        }
    }));

    app.use(helmet.xssFilter());//This enables the X-XSS-Protection header, which helps prevent reflected XSS attacks.

    app.use(helmet.frameguard({action: 'deny'}));// This prevents your site from being embedded in an iframe, mitigating clickjacking attacks.

    app.use(helmet.hsts({
        maxAge: 63072000, // 2years in seconds
        includeSubDomains: true, // this will apply HSTS to all subdomains
        preload: true // using preload:true browsers automatically enforce HTTPS for your site
    }))
}

module.exports = helmetMiddleware;