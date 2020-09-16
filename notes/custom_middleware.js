// Learning Objective
// - Learn to wirte custom middleware

// INTRO
// Q: Why would I write custom middleware?
// - To add functionality to our app when their isn't existing middleware to get the job done

// Q: What is significant about the ability to write your own custom middleware?
// - Becuase I can solve any problem that may arise, without altering Express's source code

// Q: What are the two types of custom middleware?
// - Regular Middleware
// - Error Handling Middleware

// OVERVIEW
// Q: How many steps is wtring custom middleware?
// - Writing custom middleware is done in 2 Steps

// Q: What is Step 1?
// - Write a functio that is capable of reciving 3-4 arguments and add it to the middleware queue

// Q: What is an example of Step 1 of writing custom middleware?
// - Well I can write my own custom middleware that logs info about every request that comes into the server
// - I will wirte the middleware to display info in the console window just to keep things simple the first time through
function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString}] ${req.method} to ${req.url} from ${req.get(
      "Origin"
    )} `
  );
  next();
}
// Q: How many parameters does a middleware function take? And what is it commonly named?
// - This function has 3 parameters
// - request, response, and next() the last paramter is a function that points to the next middleware queue
// - By convention this paramter is named "next()"

// Q: What is possible but not required by middleware in realtion to the "queue"?
// - Any middleware function has the ability to modify the req or res object, but it isn't required
// - In the custom middleware function above I didn't write changes to either

// Q: What can any middleware function do? And what happends when middleware does "this" (How does it affect the rest of the application)?
// - Any middleware function has the ablitity to freeze or stop the request and snd a response back to the client.
// - When this occurs the rest of the middleware including the route handlers will not work
// - I will write an example of this in the follow along to come

// Q: How would I signal to express that middleware has completed, and that I am ready to invoke the next function?
// - by invoking the next() function
// - If I don't write a next() function the response will not be sent back to the client and the request will hang, and clients will get a timeout error
// - So always rememebr to send a next(), or response methods such as .send(), .json(), .end()

// Q: How would I write middleware to be called to the queue (Q: What is the queue?)
// - When I am refering to the queue I am refering to the middleware queue, and the queue, is first come fist to leave the oposite of stack
// - By calling next() I am signaling Express that the middleware has completed and that it sould  call the next function in the queue

// Q: How would I display info about the request in the console?
// - by hitting any of the endpoints the logger middleware will be invoked

server.use(express.json());
server.use(logger);

// FOLLOW ALONG
// Q: What am I about to build?
// - I am about to build middleware that can stop the request and send a response back to the client
// - This will cause the rest of the middleware, including the rest of the route handlers to not be executed
// - This will be accomplished by writing my very own authentication middleware

server.use(atGate);
server.use(auth);

function atGate(req, res, next) {
  console.log("At the gate, and I am about to be eaten");

  next();
}

function auth(req, res, next) {
  if (req.url === "/mellon") {
    next();
  } else {
    res.send("You shall not pass");
  }
}

server.use("/mellon", auth, (req, res) => {
  console.log("Gate opening...");
  console.log("Inside and safe");
  res.send("Welcome Traveler");
});
