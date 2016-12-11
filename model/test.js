const Sequelize = require('sequelize');
const sequelize = require('./db.js');

var User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
        field: 'first_name'
    },
    lastName: {
        type: Sequelize.STRING
    }
}, {
//   timestamps: false,
    freezeTableName: true // Model 对应的表名将与model名相同
});

//添加
User.sync({force: true}).then(function () {
  // 已创建数据表
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

// //添加
// User.create({
//     firstName: '不而',
//     lastName: '布尔'
//   });


//原声sql
// sequelize.query('show tables');

// sequelize.query('show tables').then(function (results) {
//     console.log(results);
// })


//删除表
// sequelize.drop('user');

//将表内userId等于23的元组删除
// User.destroy({'where':{'id':{eq:23}}});