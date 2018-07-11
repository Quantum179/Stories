
# POST /login

### Request 
```
{
    email: req.body.email,
    password: req.body.password,
    stayConnected: req.body.stayConnected
}
```
### Response 
```
{
    payload: {
        user,
        token
    },
    message
}
```

# POST /register

### Request
```
{
    user: req.body.user,
    wantNews: req.body.wantNews
}
```
### Response
```
{
    payload: {
        user,
        token
    }
    message
}
```
