import { Model, Sequelize, DataTypes } from 'sequelize';

export class Transaction extends Model {
  static associate(models: any) {
    this.belongsTo(models.Currency, {
      as: 'currency_data',
      foreignKey: 'currency_id',
      targetKey: 'id',
    });
  }
}

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
      currency_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('DEPOSIT', 'WITHDRAW'),
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
        type: DataTypes.ENUM('OPEN', 'PROCESSING', 'FAILED', 'COMPLETED'),
        defaultValue: 'OPEN',
      },
      utr: {
        type: DataTypes.STRING,
      },
      verify_time_stamp: {
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
      modelName: 'Transaction',
      tableName: 'transactions',
    },
  );
  return Transaction;
};

export default tempUserModel;
