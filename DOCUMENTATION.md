### API Documentation

This document provides detailed information on how to use the person API

### Table of Contents

- Standard Request and Response Formats
- Sample API Usage
- Known Limitations and Assumptions
- Setting Up and Deploying the API

### Standard Request and Response Formats

## Create a Person

- Endpoint : `/api`
- Method : `POST`
  Request Body (JSON):

```sh
{
  "name": "Mark Essien",
  "country": "USA",
  "track": "Backend Development"
}
```

Response(JSON):

```sh
{
  "message": "Person created successfully",
  "person": {
    "name": "Mark Essien",
    "country": "USA",
    "track": "FullStack Development",
    "_id": "6501164fb9d45fa5a0a46e11",
    "__v": 0
  }
}
```

## Read a Person

- Endpoint : `/api/:user_id`
- Method : `GET`

Response(JSON):

```sh
{
  "person": {
    "_id": "6501164fb9d45fa5a0a46e11",
    "name": "Mark Essien",
    "country": "USA",
    "track": "FullStack Development",
    "__v": 0
  }
}
```

## Update a Person

- Endpoint : `/api/:user_id`
- Method : `PATCH`

Request Body(JSON):

```sh
{
  "country": "Canada",
  "track":"FullStack Development",
}
```

Response(JSON):

```sh
{
  "message": "person modified",
  "person": {
    "_id": "6501164fb9d45fa5a0a46e11",
    "name": "Mark Essien",
    "country": "Canada",
    "track": "FullStack Development",
    "__v": 0
  }
}
```

## Update a Person

- Endpoint : `/api/:user_id`
- Method : `DELETE`

Response(JSON):

```sh
{
  "message": "person deleted",
  "person": {
    "_id": "6501164fb9d45fa5a0a46e11",
    "name": "Mark Essien",
    "country": "Canada",
    "track": "FullStack Development",
    "__v": 0
  }
}
```

### Sample API Usage using CLI

## Creating a Person

- Request:

```sh
curl -X POST https://stage2-backend.onrender.com/api/ -H "Content-Type: application/json" -d '{
  "name": "Alice Smith",
  "country": "Canada",
  "track": "Frontend Development"
}'
```

- Response:

```sh
{"message":"Person created successfully","person":{"name":"Alice Smith","country":"Canada","track":"Frontend Development","_id":"6501d72a7c20e4161c6a3274","__v":0}}
```

### Reading a Person

- Request:

```sh
curl -X GET https://stage2-backend.onrender.com/api/6501d72a7c20e4161c6a3274 -H "Content-Type: application/json"
```

- Response:

```sh
{"person":{"_id":"6501d72a7c20e4161c6a3274","name":"Alice Smith","country":"Canada","track":"Frontend Development","__v":0}}
```

### Updating a person

- Request:

```sh
curl -X PATCH https://stage2-backend.onrender.com/api/6501d72a7c20e4161c6a3274 -H "Content-Type: application/json" -d '{
  "country": "NIGERIA",
  "track": "BackEnd Development"
}'
```

- Response:

```sh
{"message":"person modified","person":{"_id":"6501d72a7c20e4161c6a3274","name":"Alice Smith","country":"NIGERIA","track":"BackEnd Development","__v":0}}
```

### Deleting a Person

- Request:

```sh
curl -X DELETE https://stage2-backend.onrender.com/api/6501d72a7c20e4161c6a3274 -H "Content-Type: application/json"
```

-Response:

```sh
{"message":"person deleted","person":{"_id":"6501d72a7c20e4161c6a3274","name":"Alice Smith","country":"NIGERIA","track":"BackEnd Development","__v":0}}
```

### Known Limitations and Assumptions

- The API assumes that person's name is unique , and CRUD operaions are performed using the name
- This documentation covers basic use cases and does not include advanced scenarios such as authentication.

### Setting Up and Deploying the API

To set up deploy the API locally or on a server, follow these steps:

1. Clone the Repository:

```sh
git clone https://github.com/Shelby243/zuriBackEnd.git
cd zuriBackEnd
```

2. Install Dependencies:

```sh
npm install
```

3. Configure Environment Variables:
   Create a .env file with your configuration settings.

```sh
MONGO_URL = provide your mongo DB url here
PORT = 5200
NODE_ENV = development
```

4. Start the API Locally:

```sh
npm start
```

5. Deployment:
   To deploy the API on a server, you can use a hosting service or a cloud provider of your choice. Ensure that you configure environment variables and deploy the application following best practices.
