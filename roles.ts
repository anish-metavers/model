import { Model, Sequelize } from 'sequelize';

class Role extends Model {}

const model = (sequelize: Sequelize, DataType: any) => {
  Role.init(
    {
      // Model attributes are defined here
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
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
      modelName: 'Role',
      tableName: 'roles',
    },
  );
  return Role;
};

export default model;
