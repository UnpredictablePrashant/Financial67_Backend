# Financial67_Backend

## Checklist
### Income Statement
 - [x] Model - Anjani
 - Controllers
   - [x] GET - Anjani
   - [ ] GET by ID
   - [x] POST - Anjani
   - [ ] PUT
   - [ ] DELETE
### Balance Sheet 
- [x] Model - Yash
 - Controllers
   - [x] GET - Mohit
   - [ ] GET by ID
   - [x] POST - Mohit
   - [ ] PUT
   - [ ] DELETE
### Cash Flow
- [x] Model - Chandrasekhar
- Controllers
   - [ ] GET
   - [ ] GET by ID
   - [ ] POST
   - [ ] PUT
   - [ ] DELETE
### Confidential
- [x] Model - Mohit
- Controllers
   - [ ] GET
   - [ ] GET by ID
   - [ ] POST
   - [ ] PUT
   - [ ] DELETE
### User
- [x] Model - Mohit
- Controllers
   - [x] GET - Mohit
   - [x] GET by ID - Mohit
   - [x] Login - Mohit
   - [x] POST - Mohit
   - [ ] PUT
   - [ ] DELETE
### Company
- [x] Model - HV
- Controllers
   - [ ] GET
   - [ ] GET by ID
   - [ ] POST
   - [ ] PUT
   - [ ] DELETE

## User Route

List of User routes are :
<br>
POST `http://localhost:3001/register` <br>
POST `http://localhost:3001/login` <br>
GET `http://localhost:3001/users` <br>
GET `http://localhost:3001/user/:id` <br>

Payload is : 
``` JSON 
{
    "name":"mohit",
    "email":"123@abc.com",
    "password":"!@#1",
    "usertype":"student"
}
```

