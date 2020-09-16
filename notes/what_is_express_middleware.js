// Learning Objective:
// - Learn to explain what middleware is and the various types

// INTRO
// Q: Why do we use Middlware for in express?
// - We use middleware to extend the functionality of express.
// - The majority of the code I will write for express will be middleware under the hood
// - This includes route handlers

// Q: What should my mental model of middleware be?
// - Middlware is just an array of functions that get executed in the order that they where introduced into the server

// Q: What is "connect middleware"?
// - Connect is a  web application framework for Node.js, that only provides the middleware layer

// Q: Why is connect so usefull?
// - Becuase connect has a lot of resources that we can use from it mature ecosystem of modules
// - If I find myself unable to find an Express Middleware package with the functionallity I want, I should try searching for it on the Connect Middlware module ecosystem instead

// OVERVIEW
// Q: What are the 3 forms of middleware?
// - Built In
// - Third Party
// - Custom

// Q: What is "Built in Middleware"?
// - Build in middlware are middleware function that come with the Express framework already, but aren't activated automatically
// - Like all the other middleware out there I will need to opt in to using them in my application

// Q: When have a I already used a built in middleware?
// - Iv'e already used built in middlware when I added support for parsing JSON content, out of the request body using server.use(express.json())

// Q: Explain how all middlware functions work?
// - We tell express about the middle ware we are about to switch on for the application, by making a calll to .use() on our server and passing .use() the piece of middleware we want to apply
// - This line must come after the express server has been created by invoking express()

// Q: What are thid party middlware and why is it important to use them?
// -  Third party middleware are npm modules, that we can import into our applications using the "require()" syntax
// - In most cases its important to know that their might already be a third party ready for us to use

// Q: What are some popular middleware modules and what do they do?
// - morgan: morgan(format, options). Is a logger middleware function when using given format, and optopns.
// - cors: CROS is a node.js package for providing a Connect/Express middleware that can be used to enavle CROS with various option
// - helmet: Helmet helps you secure Express apps by setting various HTTP heading

// Q: What is custom middleware?
// - custom middlware are functions we can write to prefoem certain task, I learn more about this in the next learning objective

// Follow Along
// Q: What is one thing that isn't obvious?
// - On thing that is not obvious is the fact that route handlers are middleware

// Q: What currently happens if a client visits a non-existing endpoint?
// - The client will get a default message when a resource is not found on the server
// - In the case of the browser, "Cannot Get /urlWeTriedToAccess" is poor user expreince
// - I am about to learn how to write a request handler that respins with a custom message for invalid URLs

// function (req, res){
//   res.status(404).send("Ain't nobody got time for that")
// }

// - Now I am using the express middleware by implemnting ".use()"
// server.use(function (req, res){
//   res.status(404).send("Ain't nobody got time for that")
// })
