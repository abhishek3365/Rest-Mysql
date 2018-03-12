var {Users} = require('../models/userModel');

var new_user = {
  firstName : 'Abhishek',
  lastName : 'Sharma'
}

Users.findById(1).then((user) => {

  user.update( new_user  ).then( (user) => {
    console.log(user);
  } , (err) => {
    console.log(err);
  });



} , (err) => {
  console.log(err);
});
