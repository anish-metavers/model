import { Model, Sequelize, DataTypes } from 'sequelize';

export class SportBet extends Model {}

const model = (sequelize: Sequelize) => {
  SportBet.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      market_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      odd_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DOUBLE,
      },
      odd_info: {
        type: DataTypes.INTEGER,
      },
      is_available_balance: {
        type: DataTypes.FLOAT,
      },
      result: {
        type: DataTypes.BOOLEAN,
      },
      open: {
        type: DataTypes.BOOLEAN,
      },
      potential_return: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: 'SportBet',
      tableName: 'sport_bets',
    },
  );
  return SportBet;
};

export default model;
