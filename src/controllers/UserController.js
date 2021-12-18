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

        return res.statu(201).json(user)
    }
}