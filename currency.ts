import { Model, Sequelize, DataTypes } from 'sequelize';

class Currency extends Model {}

const model = (sequelize: Sequelize) => {
  Currency.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      alias: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      unit_amount: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false,
      },
      min_transaction_amount: {
        type: DataTypes.FLOAT(10, 2),
        defaultValue: 0.0,
      },
      max_transaction_amount: {
        type: DataTypes.FLOAT(10, 2),
        defaultValue: 0.0,
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
      modelName: 'Currency',
      tableName: 'currencies',
    },
  );
  return Currency;
};

export default model;
