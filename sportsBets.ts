import { Model, Sequelize } from 'sequelize';

export class SportBet extends Model {}

const model = (sequelize: Sequelize, DataType: any) => {
  SportBet.init(
    {
      // Model attributes are defined here
      id: {
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      market_id: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      odd_id: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataType.DOUBLE,
      },
      odd_info: {
        type: DataType.INTEGER,
      },
      is_available_balance: {
        type: DataType.FLOAT,
      },
      result: {
        type: DataType.BOOLEAN,
      },
      open: {
        type: DataType.BOOLEAN,
      },
      potential_return: {
        type: DataType.INTEGER,
      },
      createdAt: {
        type: DataType.DATE,
        field: 'created_at',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: DataType.DATE,
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
