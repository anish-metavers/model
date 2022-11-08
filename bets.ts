import { Model, Sequelize, DataTypes } from 'sequelize';

class Bet extends Model {
    static associate(models: any) {
        this.belongsTo(models.Odd, {
            as: 'odd_data',
            foreignKey: 'odd_id',
            targetKey: 'id',
        });
    }
}

const model = (sequelize: Sequelize) => {
  Bet.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      odd_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      amount: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false,
      },
      bet_info: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      bet_data: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      bet_result: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
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
      modelName: 'Bet',
      tableName: 'bets',
    },
  );
  return Bet;
};

export default model;
