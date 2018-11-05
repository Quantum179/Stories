
# Routing Web specifications

##### /
Home component (top trendings, carousel of news, latest posts, etc)

## Auth Route

##### /login
Login component

##### /signup
Signup component

##### /recover
Recover component

## User Router

#### - GET /profile
Profile component with recents streams, top trending friends, current readings, notifications

##### /users
UsersContainer and UserList components with users activies. Get the API users data and fetch it into a list.

##### /users/:userName
User component. Displays the user profile.


## Story Route

##### - GET /stories
StoriesContainer and StoryList components with latest stories, top trending stories and authors, etc. Get the API stories data and fetch it into a list.

##### - GET /stories/:storyName
Story component, display the story content.

## Chronicle Route

##### - GET /chronicles
ChroniclesContainer and ChronicleList with all chronicles already published. Get the API chronicles data fetch it into a list.

##### - GET /chronicles/:idChronicleName

##### - POST /chronicles
Add a chronicle to list.

- Specs payload :
```
{
  title
  
}
```

## Blog Route

##### /blog
Blog component with top trending (articles)

##### /blog/topics
TopicsContainer and TopicList with all topics related to the blog

## Magazine Route

##### /magazine
Magazine component with latest numbers

##### /magazine/:numberMag
Display the content of a numberMag
