module.exports = (app) => {

  var controller = require('../controllers/userController');

  app.route('/user')
    .get(controller.getUsers)
    .post(controller.addUser);

  app.route('/user/:userId')
    .get(controller.getUser)
    .put(controller.updateUser)
    .delete(controller.deleteUser);

}
