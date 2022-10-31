import { Model, Sequelize } from 'sequelize';

export class TempUser extends Model {}

const tempUserModel = (sequelize: Sequelize, DataType: any) => {
  TempUser.init(
    {
      // Model attributes are defined here
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      mobile_number: {
        type: DataType.BIGINT,
      },
      email: {
        type: DataType.STRING,
      },
      otp: {
        type: DataType.STRING,
        allowNull: false,
      },
      purpose: {
        type: DataType.STRING,
        allowNull: false,
      },
      is_verified: {
        type: DataType.BOOLEAN,
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
      modelName: 'TempUser',
      tableName: 'temp_users',
    },
  );
  return TempUser;
};

export default tempUserModel;
