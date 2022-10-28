import { Model, Sequelize } from 'sequelize';

class Bet extends Model {
    static associate(models: any) {
        this.belongsTo(models.Odd, {
            as: 'odd_data',
            foreignKey: 'odd_id',
            targetKey: 'id',
        });
    }
}

const model = (sequelize: Sequelize, DataType: any) => {
    Bet.init(
        {
            // Model attributes are defined here
            id: {
                type: DataType.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            game_id: {
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
            timestamps: true,
            sequelize,
            modelName: 'Bet',
            tableName: 'bets',
        },
    );
    return Bet;
};

export default model;
