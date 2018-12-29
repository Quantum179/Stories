# API de Stories

# TODOS
- make a better auth guard in passport
- Refactor schema definitions (global options and global plugins)
- Find a way to use req.params in requestMiddleware
- Create an accurate database model for the entire application
- Find models who does not need to create ObjectID (can be use with unique key)
- Implements newsletters system
- Try to use Query.cursor() to handle requests validation before Mongoose queries (or use nodejs middleware)
- Try to avoid insecure direct object reference : https://www.owasp.org/index.php/Top_10_2007-Insecure_Direct_Object_Reference
- https://nodewebapps.com/2017/01/03/13-security-best-practices-for-your-web-application/
- Prevent DDOS attacks : https://www.npmjs.com/package/express-rate-limit

# Dev
- Dive in deep express functions and patterns
- Mongoose : use lean() after query to gain time speed. Avoid using skip() on large collections
- https://getstream.io/blog/building-a-node-js-powered-api-with-express-mongoose-mongodb/
- R&D on secure web app with mongo
- Script for database task : https://www.npmjs.com/package/shelljs
- Passport Example : https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/
https://dev.to/aurelkurtula/working-with-instagram-api-and-passportjs-in-a-node-application--5068
- Mongoose error handling : http://thecodebarbarian.com/mongoose-error-handling
MongoDB access control : https://stackoverflow.com/questions/41615574/mongodb-server-has-startup-warnings-access-control-is-not-enabled-for-the-dat
MongoDB in production: http://www.fizerkhan.com/blog/posts/Things-you-should-consider-for-MongoDB-in-production.html
- Scaling MongoDB : https://hackernoon.com/solving-invisible-scaling-issues-with-serverless-and-mongodb-1a065b5a6465

# Releases
- v0.0.1 :x:

# Mongoose Learning
- plugins are inherited with discriminator models

# Links
- http://51elliot.blogspot.ca/2014/06/rest-api-best-practices-4-collections.html