import { Model, Sequelize } from 'sequelize';

class UserLog extends Model {
  static associate(models: any) {
    this.belongsTo(models.User, {
      as: 'user_data',
      foreignKey: 'user_id',
      targetKey: 'id',
    });
  }
}
const model = (sequelize: Sequelize, DataType: any) => {
  UserLog.init(
    {
      // Model attributes are defined here
      id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: DataType.BIGINT.UNSIGNED,
        allowNull: false,
      },
      activity: {
        type: DataType.ENUM('login', 'change_password'),
        allowNull: false,
      },
      ip_address: {
        type: DataType.STRING,
        allowNull: false,
      },
      status: {
        type: DataType.ENUM('0', '1'),
        allowNull: false,
        defaultValue: '1',
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
      modelName: 'UserLog',
      tableName: 'user_logs',
    },
  );
  return UserLog;
};

export default model;
