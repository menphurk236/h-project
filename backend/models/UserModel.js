import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define('users', {
    username: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    },
    bio: {
        type: DataTypes.STRING
    },
    profile_image_url: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();

export default Users;