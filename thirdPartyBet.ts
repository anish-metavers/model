import { Model, Sequelize, DataTypes } from 'sequelize';

class ThirdPartyBet extends Model {
  static associate(models: any) {}
}

const model = (sequelize: Sequelize) => {
  ThirdPartyBet.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      client_bet_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      client_game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      client_game_round_id: {
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
      indexes: [
        {
          name: 'unique_client_ids',
          unique: true,
          fields: ['client_bet_id', 'client_game_id', 'client_game_round_id'],
        },
      ],
      timestamps: true,
      sequelize,
      modelName: 'ThirdPartyBet',
      tableName: 'third_party_bets',
    },
  );
  return ThirdPartyBet;
};

export default model;
