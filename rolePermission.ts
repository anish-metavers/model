import { Model, Sequelize } from 'sequelize';

export class RolePermission extends Model {}

const model = (sequelize: Sequelize, DataType: any) => {
  RolePermission.init(
    {
      // Model attributes are defined here
      id: {
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      role_id: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      permission_id: {
        type: DataType.INTEGER,
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
      modelName: 'RolePermission',
      tableName: 'role_permission',
    },
  );
  return RolePermission;
};

export default model;
