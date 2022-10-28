import { Model, Sequelize } from 'sequelize';

export class Wallet extends Model {}

const mode = (sequelize: Sequelize, DataType: any) => {
    Wallet.init(
        {
            // Model attributes are defined here
            id: {
                type: DataType.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
                type: DataType.INTEGER,
                allowNull: false,
                unique: true,
            },
            currency_id: {
                type: DataType.INTEGER,
                allowNull: true,
            },
            amount: {
                type: DataType.FLOAT(10, 2),
                defaultValue: 0.0,
            },
            wagered_amount: {
                type: DataType.FLOAT(10, 2),
                defaultValue: 0.0,
            },
            total_amount_wagered: {
                type: DataType.FLOAT(10, 2),
                defaultValue: 0.0,
            },
            total_amount_earned: {
                type: DataType.FLOAT(10, 2),
                defaultValue: 0.0,
            },
            total_withdrawn_amount: {
                type: DataType.FLOAT(10, 2),
                defaultValue: 0.0,
            },
            total_deposited_amount: {
                type: DataType.FLOAT(10, 2),
                defaultValue: 0.0,
            },
            last_deposit_date: {
                type: DataType.DATE,
            },
            last_withdrawn_date: {
                type: DataType.DATE,
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
            modelName: 'Wallet',
            tableName: 'wallets',
        },
    );
    return Wallet;
};

export default mode;
