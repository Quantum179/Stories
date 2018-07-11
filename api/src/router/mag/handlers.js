import models from '../../db/models'
import utils from '../../utils'
let get_mag_number = 'get-mag-number'


function magMiddleware(req, res, next) {
    next()
} 

function getMag(req, res) {
    //TODO: get latest MagNumber, mag news, top trendings mag numbers and authors

    //carousel informations : news, must read
    //magNumbers list
    //side nav with top trendings and others

    let {} = formatRequest(req, '')
}
function getMagNumber(req, res) {
    let {id, fields, ...out} = req.data

    models.MagNumber.getById(id, fields)
        .then(magNumber => {
            if(!magNumber) {
                return res.status(404).json(utils.parseError(true, NOT))
            }
            return res.status(200).json(formatResponse(magNumber, 'get-mag-number'))
        })
        .catch(err => {

        })

}
function postMagNumber(req, res) {

}
function patchMagNumber(req, res) {
    
}
function deleteMagNumber(req, res) {

}

export {
    magMiddleware,
    getMag,
    getMagNumber,
    postMagNumber,
    patchMagNumber,
    deleteMagNumber
}