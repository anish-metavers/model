import { Model, Sequelize } from 'sequelize';

export class Permission extends Model {}
const model = (sequelize: Sequelize, DataType: any) => {
  Permission.init(
    {
      // Model attributes are defined here
      id: {
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataType.STRING,
        allowNull: false,
      },
      path: {
        type: DataType.STRING,
        allowNull: false,
      },
      method: {
        type: DataType.STRING,
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
      modelName: 'Permission',
      tableName: 'permissions',
    },
  );
  return Permission;
};

export default model;
