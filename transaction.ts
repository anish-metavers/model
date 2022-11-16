import { Model, Sequelize, DataTypes } from 'sequelize';

export class Transaction extends Model {}

const tempUserModel = (sequelize: Sequelize) => {
  Transaction.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      wallet_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      client_upi_id: {
        type: DataTypes.STRING,
      },
      user_upi_id: {
        type: DataTypes.STRING,
      },
      note: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM('OPEN', 'VERIFIED', 'COMPLETED', 'EXPIRED'),
        defaultValue: 'OPEN',
      },
      utr: {
        type: DataTypes.STRING,
      },
      verify_time_stamp: {
        type: DataTypes.DATE,
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: 'Transaction',
      tableName: 'transactions',
    },
  );
  return Transaction;
};

export default tempUserModel;
