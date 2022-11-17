import { Sequelize } from 'sequelize';
import User from './users';
import Role from './roles';
import UserRole from './userRoles';
import Permission from './permission';
import RolePermission from './rolePermission';
import SportBet from './sportsBets';
import TempUser from './tempUser';
import Wallet from './wallets';
import Bets from './bets';
import UserLog from './userLog';
import ThirdPartyBet from './thirdPartyBet';
import Config from './config';
import Transaction from './transaction';
import Currency from './currency';

const DATABASE = async () => {
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_ROOT,
    process.env.DB_PASSWORD,
    {
      host: process.env.HOST,
      dialect: 'mysql',
      logging: false,
      dialectOptions: {
        dateStrings: true,
        typeCast: true,
      },
      timezone: '+05:30',
    },
  );

  try {
    await sequelize.authenticate();
    console.log('---- !!MySQL DB Connected Successfully!! ----');
    const db = {
      sequelize: sequelize,
      User: User(sequelize),
      Role: Role(sequelize),
      UserRole: UserRole(sequelize),
      Permission: Permission(sequelize),
      RolePermission: RolePermission(sequelize),
      TempUser: TempUser(sequelize),
      SportBet: SportBet(sequelize),
      Wallet: Wallet(sequelize),
      Bets: Bets(sequelize),
      UserLog: UserLog(sequelize),
      Config: Config(sequelize),
      ThirdPartyBet: ThirdPartyBet(sequelize),
      Transaction: Transaction(sequelize),
      Currency: Currency(sequelize),
    };

    // Setting the association of model
    Object.keys(db).forEach((modelName) => {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });

    // await sequelize.sync({ alter: true });

    global.DB = db;
  } catch (error) {
    console.error('## Unable to connect to database ##', error);
  }
};

export default DATABASE;
