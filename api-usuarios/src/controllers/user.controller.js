const { userService } = require("../services/user.service");


module.exports.userController = {
    getAllUsers: (req, res) => {
        userService.getAllUsersFromDb((err, users) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.status(200).json(users);
        })
    },
    getUserById: (req, res) => {
        const { id } = req.params;

        if (!Number.isInteger(parseInt(id)) || parseInt(id) <= 0) {
            return res.status(400).json({ message: 'Invalid id value' });
        }

        userService.getUserByIdFromDb(id, (err, user) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (user.length === 0) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json(user[0]);
        })
    },
    createUser: (req, res) => {
        const { nome, email } = req.body;

        if (!nome || !email) {
            return res.status(400).json({ message: 'Missing required fields: nome and email' });
        }

        const userData = {
            nome: nome,
            email: email
        }

        userService.createUserInDb(userData, (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({message: 'User created sucessfully'});
        })
    },
    editUserById: (req, res) => {
        const { id } = req.params;

        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).json({ message: 'Invalid id value' });
        }

        const userData = {
            nome: req.body.nome,
            status: req.body.status
        }

        userService.editUserByIdFromDb(id, userData, (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.status(200).json({ message: 'User updated correctly' });
        })
    },
    deleteUserById: (req, res) => {
        const { id } = req.params;

        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).json({ message: 'Invalid id value' });
        }

        userService.deleteUserByIdFromDb(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.status(200).json({ message: 'User deactivated sucessfully' });
        })
    },
}