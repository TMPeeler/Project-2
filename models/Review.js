const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        text:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        score:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                min: 1,
                max: 5,
            },
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:'user',
                key:'id'
            },
        },
        brew_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:'brew',
                key:'id'
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
      }
);

module.exports = Review;