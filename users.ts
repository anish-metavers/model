import { Model, Sequelize } from 'sequelize';

export class User extends Model {}

const model = (sequelize: Sequelize, DataType: any) => {
  User.init(
    {
      // Model attributes are defined here
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      first_name: {
        type: DataType.STRING,
      },
      last_name: {
        type: DataType.STRING,
      },
      dob: {
        type: DataType.DATE,
      },
      address: {
        type: DataType.STRING,
      },
      user_name: {
        type: DataType.STRING,
      },
      email: {
        type: DataType.STRING,
      },
      account_verified: {
        type: DataType.BOOLEAN,
        defaultValue: false,
      },
      password: {
        type: DataType.STRING,
      },
      mobile_number: {
        type: DataType.BIGINT,
      },
      avatar: {
        type: DataType.STRING,
        defaultValue: '/assets/defaultImage.png',
      },
      area_code: {
        type: DataType.STRING,
      },
      zip_code: {
        type: DataType.STRING,
      },
      city: {
        type: DataType.STRING,
      },
      country: {
        type: DataType.STRING,
      },
      state: {
        type: DataType.STRING,
      },
      suspension_reason: {
        type: DataType.STRING,
      },
      status: {
        type: DataType.ENUM('ACTIVE', 'DELETED', 'SUSPENDED'),
        defaultValue: 'ACTIVE',
      },
      show_online_status: {
        type: DataType.BOOLEAN,
        defaultValue: true,
      },
      show_user_name: {
        type: DataType.BOOLEAN,
        defaultValue: true,
      },
      login_source: {
        type: DataType.STRING,
      },
      unique_uid: {
        type: DataType.STRING,
      },
      uid: {
        type: DataType.STRING,
      },
      preferred_language: {
        type: DataType.STRING,
        defaultValue: 'en',
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
      modelName: 'User',
      tableName: 'users',
    },
  );
  return User;
};

export default model;
