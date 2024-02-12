import { Sequelize } from "sequelize";

const db = new Sequelize('h_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;