import { Model, Sequelize } from 'sequelize';

class UserRole extends Model {}

const model = (sequelize: Sequelize, DataType: any) => {
  UserRole.init(
    {
      // Model attributes are defined here
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      role_id: {
        type: DataType.INTEGER,
        defaultValue: 2,
        allowNull: false,
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
      modelName: 'UserRole',
      tableName: 'user_roles',
    },
  );
  return UserRole;
};

export default model;
