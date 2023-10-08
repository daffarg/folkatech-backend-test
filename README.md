# folkatech-backend-test

## Table of Contents
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Contact](#contact)
<!-- * [License](#license) -->

## Technologies Used
- Express.js
- MongoDB
- Redis


## Features
### Register (register to use the API)
Method: POST
Path: 
```
/auth/register
```
Example Request: 
```
{
    "userName": "budi",
    "password": "passwordbudi"
}
```

### Login (login to get token for API and set token in Authorization header for further request)
Method: POST
Path: 
```
/auth/login
```
Example Request 
```
{
    "userName": "budi",
    "password": "passwordbudi"
}
```
### Create New User
Method: POST
Path: 
```
/api/users
```
Example Request 
```
{
    "userName": "badu",
    "accountNumber": "82424224",
    "emailAddress": "tes@gmail.com",
    "identityNumber": "279113311"
}
```

### Get All Users
Method: GET
Path: 
```
/api/users
```

### Get User by Identity Number
Method: GET
Path: 
```
/api/users/identityNumber/:identityNumber
```

### Get User by Account Number
Method: GET
Path: 
```
/api/users/accountNumber/:accountNumber
```


### Update User by Account Number
Method: PUT
Path: 
```
/api/users/accountNumber/:accountNumber
```
Example Request 
```
{
    "userName": "badu",
    "accountNumber": "82424224",
    "emailAddress": "tes@gmail.com",
    "identityNumber": "279113311"
}
```

### Update User by Identity Number
Method: PUT
Path: 
```
/api/users/identityNumber/:identityNumber
```
Example Request 
```
{
    "userName": "badu",
    "accountNumber": "82424224",
    "emailAddress": "tes@gmail.com",
    "identityNumber": "279113311"
}
```

### Delete All Users
Method: DELETE
Path: 
```
/api/users
```

### Delete User by Account Number
Method: DELETE
Path: 
```
/api/users/accountNumber/:accountNumber
```

### Delete User by Identity Number
Method: DELETE
Path: 
```
/api/users/identityNumber/:identityNumber
```

## Setup
1. Install Node.js
2. npm install on terminal
3. npm start to run the server

## Contact
Mohamad Daffa Argakoesoemah
