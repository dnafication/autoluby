const Veicle = require('../models/Veicle')

module.exports = {
    async createUser(req, res) {
        const { brand, model, yearFabrication, rotateKm, color, chassi, price } = req.body

        const user = await Veicle.create({
            brand,
            model,
            yearFabrication,
            rotateKm,
            color,
            chassi,
            price
        })

        return res.statu(201).json(user)
    }
}