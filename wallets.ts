import { Model, Sequelize, DataTypes } from 'sequelize';

export class Wallet extends Model {}

const mode = (sequelize: Sequelize) => {
  Wallet.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      currency_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      amount: {
        type: DataTypes.FLOAT(10, 2),
        defaultValue: 0.0,
      },
      wagered_amount: {
        type: DataTypes.FLOAT(10, 2),
        defaultValue: 0.0,
      },
      total_amount_wagered: {
        type: DataTypes.FLOAT(10, 2),
        defaultValue: 0.0,
      },
      total_amount_earned: {
        type: DataTypes.FLOAT(10, 2),
        defaultValue: 0.0,
      },
      total_withdrawn_amount: {
        type: DataTypes.FLOAT(10, 2),
        defaultValue: 0.0,
      },
      total_deposited_amount: {
        type: DataTypes.FLOAT(10, 2),
        defaultValue: 0.0,
      },
      last_deposit_date: {
        type: DataTypes.DATE,
      },
      last_withdrawn_date: {
        type: DataTypes.DATE,
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
      modelName: 'Wallet',
      tableName: 'wallets',
    },
  );
  return Wallet;
};

export default mode;
