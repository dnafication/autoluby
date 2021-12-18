const Veicle = require('../models/Veicle')
const { Op } = require('sequelize')

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
    },
    async getAllVeicles(req, res) {
        const veicles = await Veicle.findAll()

        return res.status(200).json(veicles)
    },
    async getOneVeicle(req, res) {
        const { veicleID } =  req.params
        
        const veicle = await Veicle.findAll({
            where: { id: veicleID }
        })

        return res.status(200).json(veicle)
    },
    async getAvailableVeicles(req, res) {
        const veicles = await Veicle.findAll({
            where: {
                status: 'available'
            }
        })
        return res.status(200).json(veicles)
    },
    async getNotAvailableVeicles(req, res) {
        const veicles = await Veicle.findAll({
            where: {
                status: {
                    [Op.not]: 'available'
                }
            }
        })
        return res.status(200).json(veicles)
    },
    async destroyVeicle(req, res) {
        const { veicleID } = req.params

        await Veicle.destroy({
            where: { id: veicleID }
        })

        return res.status(200).json({ 
            message: "Veicle deleted sucessfully"  
        })
    }
}