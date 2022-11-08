import { Model, Sequelize, DataTypes } from 'sequelize';

export class TempUser extends Model {}

const tempUserModel = (sequelize: Sequelize) => {
  TempUser.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      mobile_number: {
        type: DataTypes.BIGINT,
      },
      email: {
        type: DataTypes.STRING,
      },
      otp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      purpose: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_verified: {
        type: DataTypes.BOOLEAN,
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
      modelName: 'TempUser',
      tableName: 'temp_users',
    },
  );
  return TempUser;
};

export default tempUserModel;
