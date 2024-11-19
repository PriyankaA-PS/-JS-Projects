// Problem : Write a JavaScript function called fetchData that simulates an asynchronous API call and takes a callback function as an argument. The callback function should be invoked with the retrieved data as its parameter.

function fetchData(callback){
    // simulate the async API call
    setTimeout(() =>{
          const data = {
            name : 'John',
            age : 28,
            city : 'New York'
          };
          callback(data)
    },2000);
}

function handle(pink){
    console.log("Recieved data: ", pink);
}

fetchData(handle);

// explaination: 
// fetchData function simulates the asyc API call using setTimeOut 
// handle function defines as callback function
// when fetchData calls, handle function waits for 2 sec and then involes the handle function, passing the     retrived data as parameter
