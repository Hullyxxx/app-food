import { Sequelize } from "sequelize";
import config from "../config/config.js";

// const sequelize = new Sequelize(config.db_database, config.db_user, config.db_pass, {
//     host: config.db_host,
//     dialect: config.db_dialect
// })

const sequelize = new Sequelize('db_food', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})


// try {
//     await sequelize.authenticate()
//     console.log('Thanh cong')
// } catch (error) {
//     console.log('That bai', error.message)
// }

export default sequelize;
