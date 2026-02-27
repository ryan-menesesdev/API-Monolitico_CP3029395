const db = require("../database/db");


module.exports.userService = {
    getAllUsersFromDb: (callback) => {
        const sql = 'SELECT * FROM users';

        db.all(sql, [], callback);
    },
    getUserByIdFromDb: (id, callback) => {
        const sql = 'SELECT * FROM users WHERE id = ?';

        params = [id];

        db.all(sql, params, callback);
    },
    createUserInDb: (userData, callback) => {
        const sql = 'INSERT INTO users (nome, email) VALUES (?, ?)';
        const params = [userData.nome, userData.email];
        db.run(sql, params, callback)
    },
    editUserByIdFromDb: (id, userData, callback) => {
        const sql = 'UPDATE users SET nome = ?, status = ? WHERE id = ?';
        const params = [userData.nome, userData.status, id];
        db.run(sql, params, callback);
    },
    deleteUserByIdFromDb: (id, callback) => {
        const sql = 'UPDATE users SET status = "inativo" WHERE id = ?';
        db.run(sql, id, callback);
    }
}