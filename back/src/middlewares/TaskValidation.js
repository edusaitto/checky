const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {

    const {
        macaddress,
        type,
        title,
        description,
        when} = req.body;

    if(!macaddress)
    return res.status(400).json({ error: 'macaddress é obrigatório'});
    else if(!type)
    return res.status(400).json({error: 'tipo é obrigatório'});
    else if(!title)
    return res.status(400).json({error: 'título é obrigatório'});
    else if(!description)
    return res.status(400).json({error: 'descrição é obrigatória'});
    else if(!when)
    return res.status(400).json({error: 'data é obrigatória'});
    else if(isPast(new Date(when)))
    return res.status(400).json({error: 'data inválida'});
    else
    next();



}

module.exports = TaskValidation;