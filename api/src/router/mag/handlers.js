import models from '../../db/models'
import utils from '../../utils'
let get_mag_number = 'get-mag-number'


function magMiddleware(req, res, next) {
    next()
} 

function getMag(req, res) {
    //TODO: get latest MagNumber, mag news, top trendings mag numbers and authors
    res.status(201).json({msg: "mag"})
}
function getMagNumber(req, res) {
    let {id, fields, ...out} = formatRequest(_req, get_mag_number) 

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