const Veicle = require('../models/Veicle')

module.exports = {
    async createVeicle(req, res) {
        const { brand, model, yearFabrication, rotateKm, color, chassi, price, status } = req.body

        const user = await Veicle.create({
            brand,
            model,
            yearFabrication,
            rotateKm,
            color,
            chassi,
            price,
            status
        })

        return res.status(201).json(user)
    }
}