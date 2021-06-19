# Note Taker

## Background

This was a homework assignment for the UofT Bootcamp.  Below is the user story and the acceptance criteria for reference.

## Table of Contents
[User Story](#user-story)\
[Acceptance Criteria](#acceptance-criteria)\
[Technologies](#technologies)\
[Process](#process)\
[Screen Shot](#screen-shot)\
[Walkthrough Video](#walkthrough-video)\
[Link](#link)


## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Technologies

* HTML
* CSS
* Bootstrap
* JavaScript
* Node.js
* Express.js

## Process

* For this project we were given starter code and mainly needed to get the routes working properly and the page to render correctly using middleware.
* I created a server.js file to start, added modules and dependancies, and started the basic server.  Once I had the basic server running I started with the get html routes, however noticed I was missing a line of middleware to help the notes page render correctly.  Once the missing middleware was added and the notes page was rendering correctly I finished the rest of the api routes including the bonus deletion route.
* Biggest challenges for this project was realizing there was missing middleware to get the notes page to render correctly.  The biggest succeses were getting the server up and running and getting the delete api to work.
* Credit to my TA's, tutor, and classmates.

## Screen Shot

![Screen Shot](./Assets/screen-shot.png)

## Link
https://harviator.github.io/oop-team-profile-generator/