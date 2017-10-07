// var prompt = require('prompt');
console.log("Welcome to the world of node.js");
{
  const TAX = 0.08
  console.log(TAX);
}
/*
  ==========================
  */
// age = prompt( "Please tell me your age:" );
// console.log( age );
var prompt = require('prompt');
prompt.start();

  //
  // Get two properties from the user: username and email
  //

prompt.get(['username', 'email'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
  });
  console.log("End of it");
