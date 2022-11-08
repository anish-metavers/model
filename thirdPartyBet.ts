import { Model, Sequelize } from 'sequelize';

class ThirdPartyBet extends Model {
    static associate(models: any) {}
}

const model = (sequelize: Sequelize, DataType: any) => {
    ThirdPartyBet.init(
        {
            // Model attributes are defined here
            id: {
                type: DataType.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            client_bet_id: {
                type: DataType.INTEGER,
                allowNull: false,
            },
            client_game_id: {
                type: DataType.INTEGER,
                allowNull: false,
            },
            client_game_round_id: {
                type: DataType.INTEGER,
                allowNull: false,
            },
            user_id: {
                type: DataType.INTEGER,
                allowNull: false,
            },
            odd_id: {
                type: DataType.INTEGER,
                allowNull: true,
            },
            amount: {
                type: DataType.FLOAT(10, 2),
                allowNull: false,
            },
            bet_info: {
                type: DataType.JSON,
                allowNull: true,
            },
            bet_data: {
                type: DataType.JSON,
                allowNull: true,
            },
            bet_result: {
                type: DataType.STRING,
                allowNull: true,
                defaultValue: null,
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
            indexes: [
                {
                    name: 'unique_client_ids',
                    unique: true,
                    fields: [
                        'client_bet_id',
                        'client_game_id',
                        'client_game_round_id',
                    ],
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
