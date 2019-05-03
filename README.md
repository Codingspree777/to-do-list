# Week-4-Assessment

## Summary
Week 4 assessment will be used to assess your understanding of the material provided
in the past week, in this case `Mongoose`.

At the end of the period,
commit your work and submit a pull request.

## How do I get started

1. Run `npm install`

1. Start your server with `npm start`

## How do I submit my work

1. When you are finished with your work, submit a **Pull Request** to your branch, the same exact way you submit hack hours.

## Style Guide
In addition to the functionality, we will be assessing the
readability and best practices of your code by testing it with a style linter. We
follow the [Airbnb](https://github.com/airbnb/javascript) style guide here at Codesmith
and thus will be testing your code against some of the rules in that style guide. This
won't be strictly enforced this time, but moving forward try following as many of the
guidelines listed here as you can:

- [ ] Indentation set to 2 **spaces** (not tabs)
- [ ] Prefer to use single quotes for strings
- [ ] Use semicolons after each expression
- [ ] Do not define any unused variables
- [ ] Remove all console.log statements from your code before submitting
- [ ] Make sure there are no syntax errors in your code
- [ ] Properly indent by 2 spaces for each nested block

## Challenges

You are given several files: `main.js`, `StudentController.js`, and `StudentModel.js`. `main.js` is your server. It has already been built, but check it out to go over how the routing works. Note that we provide an mlab url already in `main.js` so no database needs to be set up.

A controller has been set up for you in `StudentController.js`. There are four functions that need to be built.
A model file has been created for you, `StudentModel.js`. You should create your database model inside of this file.

1. Create a schema in the model file. It should have several fields
  - A "firstName" that will be a string
  - A "lastName" that will be a string
  - An "age" that will be a number
2. Create a document in the database when posting to the route `/student`
  - The route should create a document in the database
  - If the document is successfully created it should send the created document back to the client
  - If the document is not successfully created send a status code of `418`
3. Get a document from the database when a get request is sent to `/student/:name`
  - the route should get a document from the database and send the document back to the client
  - If the document is not successfully found send a status code of `418`
4. Update a document in the database when a patch request is sent to `/student/:name`
  - the route should update the document found from the `name` parameter
    - it should then update the document in the database.
  - if the update isn't successful send a status code of `418`
5. Delete a document from the database when a delete request is made to `/student/:name`
  - the route should delete the document that has a first name from the request paramemer `name`
  - if the delete isn't successful send a status of `418`
