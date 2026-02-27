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

        userService.getUserByIdFromDb(id, (err, user) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json(user[0]);
        })
    },
    createUser: (req, res) => {

        const userData = {
            nome: req.body.nome,
            email: req.body.email
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

        userService.deleteUserByIdFromDb(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.status(200).json({ message: 'User deactivated sucessfully' });
        })
    },
}