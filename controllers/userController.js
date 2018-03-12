const sequelize = require('sequelize');
var {Users} = require('../models/userModel');

module.exports.addUser = (req,res) => {

    Users.create(req.body).then( (user) => {
      res.status(200).send(user);
    } , (err) => {
      res.status(404).send(err);
    });

};

module.exports.getUsers = (req,res) => {

    Users.findAll().then((users) => {
      res.status(200).send(users);
    } , (err) => {
      res.status(404).send(err);
    });

};

module.exports.getUser = (req,res) => {

  Users.findById(req.params.userId).then((user) => {
    res.status(200).send(user);
  } , (err) => {
    res.status(404).send(err);
  });

};

module.exports.updateUser = (req,res) => {

  Users.findById(req.params.userId).then((user) => {

    if( user ){
      user.update( req.body ).then( (user) => {
        res.status(200).send(user);
      } , (err) => {
        res.status(404).send(err);
      });
    }else {
      res.status(200).send({message : "User dosen't exist"});
    }

  } , (err) => {
    res.status(404).send(err);
  });

};

module.exports.deleteUser = (req,res) => {


  Users.findById(req.params.userId).then((user) => {

    if( user ){
      user.destroy().then( (user) => {
        res.status(200).send({message : "User deleted successfully"});
      } , (err) => {
        res.status(404).send(err);
      });
    }else {
      res.status(200).send({message : "User dosen't exist"});
    }

  } , (err) => {
    res.status(404).send(err);
  });

};
