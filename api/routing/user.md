
# GET /users

### Request
```
{
    query: req.query.query,
    fields: req.query.fields,
    options: req.query.options
}
```
### Response
```
{
    payload: {
        users: [User]
    },
    message: String
}
```

# GET /users/:idUser

### Request
```
{
    id: req.params.id,
    fields: req.query.fields,
    options: req.query.options
}
```
### Response
```
{
    payload: {
        user: User
    },
    message: String
}
```

# GET /users/:idUser/profile
## mustAuthenticate - mustBeClaimedUser

### Request
```
{
    idUser : req.params.idUser,
    menuItem: req.query.menuItem
}
```
### Response
```
{
    payload: {
        profile: {
            name: user.name,
            readings: [Reading],
            followings,
            notifications
        }
    },
    message: String
}
```

# POST /users
## mustAuthenticate - MustBeAdmin
### Request
```
{
    user: User
}
```
### Response
```
{
    payload: {
        savedUser: User
    },
    message: String
}
```

#PATCH /users/:idUser

### Request

### Response

#DELETE /users/:idUser