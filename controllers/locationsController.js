const publishLocations = require('../mqtt/publishLocations')

const locationsController = (req,res) =>{
    publishLocations()
    res.status(200).json({message: 'success'})
}

module.exports = locationsController