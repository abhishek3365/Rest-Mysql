const Sequelize = require('sequelize');

const sequelize = new Sequelize('football', 'root', 'admin', {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases: false,
  port : 9925,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});

const Team = sequelize.define( 'Team' , {
  title : {
    type : Sequelize.STRING,
    allowNull : false,
  },
  city : {
    type : Sequelize.STRING
  },
  stadium : {
    type : Sequelize.STRING,
    allowNull :false
  },
  crest : {
    type : Sequelize.STRING,
    allowNull : false
  },
  manager : {
    type : Sequelize.STRING,
    allowNull : false
  }
}  );

const Player = sequelize.define( 'players' , {
  name : {
    type : Sequelize.STRING,
    allowNull : false,
  },
  position : {
    type : Sequelize.STRING,
    allowNull : false,
    validate : {
      isIn : [[ 'forward' , 'midfield' , 'defence' , 'goalkeeper' ]]
    }
  },
  country : {
    type : Sequelize.STRING,
    allowNull : false,
  },
  kitno : {
    type : Sequelize.INTEGER,
  }, 
  // teamId : {
  //   type : Sequelize.INTEGER,
  //   allowNull : false,
  //   references : 'Team',
  //   referencesKey : 'id'
  // }
} );

Player.belongsTo(Team, {
  foreignKey: 'teamId',
  onDelete: 'CASCADE'
});


/*Team.sync( {force : true} ).then( () => {

  Team.create({
    title : "Manchester City",
    city : "Manchester, England",
    stadium : "Ethiad Stadium",
    crest : "http://kassiesa.net/uefa/clubs/images/Manchester-City.png",
    manager : "Pep Guardiola"
  });
  
  Team.create({
    title : "Manchester United",
    city : "Manchester, England",
    stadium : "Olf Trattford",
    crest : "http://kassiesa.net/uefa/clubs/images/Manchester-United.png",
    manager : "Jose Mourinho"
  });
  
  Team.create({
    title : "FC Barcelona",
    city : "Barcelona, Spain",
    stadium : "Camp Nou",
    crest : "http://kassiesa.net/uefa/clubs/images/FC-Barcelona.png",
    manager : "Ernesto Valverde"
  });
  
  Team.create({
    title : "Real Madrid",
    city : "Madrid, Spain",
    stadium : "Santiago Bernabeu",
    crest : "http://kassiesa.net/uefa/clubs/images/Real-Madrid.png",
    manager : "Zinedine Zidane"
  });
  

} );

Player.sync( {force:true} ); */

// var player = Player.build({
//   name : 'Andres Iniesta',
//   position : 'for',
//   kitno : 8,
//   country : 'Spain',
//   teamId : 3
// });

// player.save().then( (player) => {
//   console.log(player);
// } , (err) => {
//   console.log(err);
// });

Player.findAll().then( (players) => {
  console.log(players);
} );