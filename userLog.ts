import { Model, Sequelize, DataTypes } from 'sequelize';

class UserLog extends Model {
  static associate(models: any) {
    this.belongsTo(models.User, {
      as: 'user_data',
      foreignKey: 'user_id',
      targetKey: 'id',
    });
  }
}
const model = (sequelize: Sequelize) => {
  UserLog.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
      activity: {
        type: DataTypes.ENUM('login', 'change_password'),
        allowNull: false,
      },
      ip_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('0', '1'),
        allowNull: false,
        defaultValue: '1',
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
      modelName: 'UserLog',
      tableName: 'user_logs',
    },
  );
  return UserLog;
};

export default model;
