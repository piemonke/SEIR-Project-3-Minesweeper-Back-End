# Totally not Minsweeper

That should speak for itself in regards to what this is.
In more detail, this is a back end Node/Express application that stores data for Minesweeper boards, returns that information to a front end, and allows you to play the game based off communication between the two. This application is not meant to be accessed for purposes other than performing calculations for the front end. It cannot be accessed without the front end. The front end for this web-app can be accessed [here](https://flubbsweeper-front-end.herokuapp.com). [Trello Board for project](https://trello.com/b/tAFdrB7j/seir-project-3-minesweeper)

## Technologies used
1. Javascript
1. Mongoose & MongoDB
1. Node
1. Express
1. Cors

#### Dependencies
1. cors
1. dotenv
1. express
1. mongoose
1. morgan
1. node

## Getting Started

Clone this repo down, along with the correspond [front-end](https://github.com/piemonke/SEIR-Project-3-Front-End-Minesweeper). You will need to modify a few variables in order to get functionality in a testing environment. For this, the back end, you will need to remove the cors options object so that it reads "app.use(cors())". To enter the testing environment, run the command "npm start" in the CLI for both this repo and the front end repo.

## Known Issues && Future Enhancements

See the [front-end](https://github.com/piemonke/SEIR-Project-3-Front-End-Minesweeper) README for these.

