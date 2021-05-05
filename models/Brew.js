const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Brew extends Model {}

Brew.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        breweryName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        alcContent:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        style:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        // score:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate:{
        //         min: 1,
        //         max: 5,
        //     },
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'brew',
      }
);

module.exports = Brew;