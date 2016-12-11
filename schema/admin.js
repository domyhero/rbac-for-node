const Sequelize = require('sequelize');
const db = require('../model/db.js');

//定义表结构
const Admin = db.define(
    'admin',
    {
        username: {
            field: 'username',
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            field: 'password',
            type: Sequelize.STRING,
            allowNull: true
        },
        role_id: {
            field: 'role_id',
            type: Sequelize.INTEGER,
            allowNull: true
        },
        mail: {
            field: 'mail',
            type: Sequelize.STRING,
            allowNull: true
        },
        phone: {
            field: 'phone',
            type: Sequelize.STRING,
            allowNull: true
        },
        desc: {
            field: 'desc',
            type: Sequelize.STRING,
            allowNull: true
        },
        add_time: {
            field: 'add_time',
            type: Sequelize.STRING,
            allowNull: true
        }
    },
    {
        tableName: 'admin',
        timestamps: false,
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);

module.exports=Admin;