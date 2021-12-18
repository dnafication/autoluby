const User = require('../models/User')

module.exports = {
    async createUser(req, res) {
        const { cpf, name, email, password, avatar, biography } = req.body

        const user = await User.create({
            cpf,
            name,
            email,
            password,
            avatar,
            biography
        })

        return res.status(201).json(user)
    },
    async findAllUsers(req, res) {
        const users = await User.findAll()

        return res.status(200).json(users)
    },
    async findOneUser(req, res) {
        const { userID } = req.params
        const user = await User.findAll({
            where: { id: userID }
        })

        return res.status(200).json(user)
    },
    async updateUser(req, res) {
        const { userID } = req.params

        await User.update(req.body, {
            where: { id: userID }
        })

        return res.status(200).json( {
            message: 'User updated successfully'
        } )
    },
    async destroyUser(req, res) {
        const { userID } = req.params

        await User.destroy({
            where: { id: userID }
        })

        return res.status(200).json({
            message: 'User deleted successfully'
        })
    }
}