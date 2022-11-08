import { Model, Sequelize, DataTypes } from 'sequelize';

class ConfigModel extends Model {}

const config = (sequelize: Sequelize) => {
  ConfigModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      config_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.ENUM('string', 'boolean', 'number', 'object'),
        allowNull: false,
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
      modelName: 'ConfigModel',
      tableName: 'configs',
    },
  );
  return ConfigModel;
};

export default config;
