import { Sequelize, DataTypes } from 'sequelize';
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
    console.log(
      'Database connection established successfully!!........................................',
    );
    const db = {
      sequelize: sequelize,
      User: User(sequelize, DataTypes),
      Role: Role(sequelize, DataTypes),
      UserRole: UserRole(sequelize, DataTypes),
      Permission: Permission(sequelize, DataTypes),
      RolePermission: RolePermission(sequelize, DataTypes),
      TempUser: TempUser(sequelize, DataTypes),
      SportBet: SportBet(sequelize, DataTypes),
      Wallet: Wallet(sequelize, DataTypes),
      Bets: Bets(sequelize, DataTypes),
      UserLog: UserLog(sequelize, DataTypes),
    };

    await sequelize.sync({ force: true });

    global.DB = db;
  } catch (error) {
    console.error('Unable to connect to database!!!!!!!!!!!!!!!!!!!!!!', error);
  }
};

export default DATABASE;
