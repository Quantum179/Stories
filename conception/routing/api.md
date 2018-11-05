
# Routing API specifications

##### - GET /
Get home informations of Stories website (top trendings, latest posts, news about Saturn's Chronicles and UniMag)

## Auth Route

##### - POST /login
Simple login with jwt strategy

##### - POST /login-twitter
Login with twitter credentials

##### - POST /login-facebook
Login with facebook credentials

##### - POST /login-instagram
Login with Instagram credentials

##### - POST /signup
Create a new account (an a new User)

##### - POST /recover
Recover user credentials and send it to user's email

## Stories Route

##### - GET /stories/
Get a list of stories

##### - POST /stories/
Add a new story

##### - GET /stories/:idStory
Get a story

##### - PATCH /stories/:idStory
Update a story

##### - DELETE /stories/:idStory
Delete a story

## Chronicle Route

##### - GET /chronicles/
Get all chronicles and the introduction about Saturn's Chronicles

##### - POST /chronicles/
Add a new Chronicle

##### - GET /chronicles/:idChronicle
Get a Chronicle

##### - PATCH /chronicles/:idChronicle
Update a Chronicle

##### - DELETE /chronicles/:idChronicle
Delete a Chronicle

## Blog Route

##### - GET /blog
Get blog's home

##### - GET /blog/topics/
Get all topics of the blog

##### - POST /blog/topics/
Add a new topic

##### - GET /blog/:idTopic
Get a topic and the list of articles related to it

##### - PATCH /blog/:idTopic
Update a topic

##### DELETE /blog/:idTopic
Delete a topic

##### - GET /blog/posts/
Get all articles sorted by publication date

##### - POST /blog/posts/
Add a new article

##### - GET /blog/posts/:idArticle
Get an article

## Magazine Route

##### - GET /magazine/
Get Magazine's home

##### - POST /magazine/
Add a new mag number

##### - GET /magazine/:idMagNumber
Get a mag number

##### - PATCH /magazine/:idMagNumber
Update a mag number

##### - DELETE /magazine/:idMagNumber
Delete a mag number

## User Route

##### - GET /users/
Get all users

##### - POST /users/
Add a new user

##### - GET /users/:idUser
Get an user

##### - PATCH /users/:idUser
Update an user's informations

##### - DELETE /users/:idUser
Delete an existing user

## Author Route

##### - GET /authors/
Get all authors

##### - POST /authors/
Add author role to an existing user

##### - GET /authors/:idAuthor
Get an author and all the posts he published

##### - PATCH /authors/:idAuthor
Update an author's informations (may be the same route than PATCH /users/:idUser)

##### - DELETE /authors/:idAuthor
Delete the author role of an existing user (or delete the whole user). May also delete all posts published by this user.

## Reporter Route

##### - GET /reporters/
Get all reporters

##### - POST /reporters/
Add reporter role to an existing user

## Admin Route

TODO

## Comment Route

##### - GET /comments/:idPost
Get comments of a specific post

##### - POST /comments/:idPost
Add a comment on a post

##### - GET /comments/:idComment
Get a comment

##### - PATCH /comments/:idComment
Update a comment

##### - DELETE /comments/:idComment
Delete a comment

## Reply Route

##### - GET /replies/:idComment
Get all replies of a comment

##### - POST /replies/:idComment
Add a reply on a comment

## Review Route

##### - GET /reviews/:idStory
Get all reviews of a story

##### - POST /reviews/:idStory
Add a review to a story

#####
