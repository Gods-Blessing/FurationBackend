
# Bookstore Backend

A brief description of what this project does and who it's for

## Tech Stack

**Server:** Node, Express

**Database:** Mongodb


## Installation

1. Clone my-project with Cloning from github

```bash
  git clone <repo-link>
```
2. Install the Dependencies

```bash
npm install
```

## Starting
Start the server by :

```bash
  npm start
```

**Authorization has been implemented please : Signin and then Test the API's**

**Note**: Please use Mongodb Compass for better testing

## For testing of API's
Please use the  Postman for testing the API's

#### Sign Up
  /signup

#### Sign In 
  /signin



1. Fetching of Data

  - #### for getting the whole data use (GET)
    - /api/items

  - #### for getting the data for Pagination (GET)
    - /api/items/?slot=1 or 2 or 3 ....

    if you give slot=0 default data recieved will 10 in qty.

  - #### For getting a specified data using id (GET)
    - /api/items/:id 

2. Adding Book to Bookstore

  - #### Add books in the store (POST) 
    - /api/items

3. Deleting the Book from Bookstore
  - #### Deleting the book (Delete)
    - /api/items/:id

4. Updating the Book
  - #### for Updating some data for the Book (PUT)
    - /api/items/:id

