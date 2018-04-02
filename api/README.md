# API de Stories

# TODOS

- Versioning API with url prefix : handle deprecated versions of API. Must implements a update system in all clients with all news Functionalities provided by the latest version.
- Follow RESTful API best practices
 - https://docs.microsoft.com/fr-fr/azure/architecture/best-practices/api-design
 - http://51elliot.blogspot.ca/2014/06/rest-api-best-practices-4-collections.html
- Create an accurate database model for the entire application
 - Find models who does not need to create ObjectID
 - Find the best practices to simulated relations between collections (refs using ObjectID by example)
- Think about the necessity for id in urls construction
- Implements newsletters system
- Add Share Model for analytics purposes
 https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1
- Use Object.assign() and spread operator for immutables data
- Try to use Query.cursor() to handle requests validation before Mongoose queries (or use nodejs middleware)
- Try to avoid insecure direct object reference : https://www.owasp.org/index.php/Top_10_2007-Insecure_Direct_Object_Reference
- Versioning API with version middleware ?
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

# Releases

- v0.0.1 :x:
