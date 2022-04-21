/////////////////////////////////////////////////////////////
// Importaciones y Requeriments


const { Roles } = require("../models/role");
const { Usuarios } = require('../models/usuario');



/////////////////////////////////////////////////////////////
// Funciones

const esRoleValido = async(rol = '') => {
    const exisRol = await Roles.findOne({ rol });

    if (!exisRol) {
        throw new Error(`The rol ${rol}, it doesnt exist on the DB`);
    }
}


const validarEmailRepetido = async(correo = '') => {


    const existEmail = await Usuarios.findOne({ correo });
    if (existEmail) {
        throw new Error("The email exist. Please try with another one");
    }
}

const existeUsuarioPorID = async (id) => {

    const existID = await Usuarios.findById(id);
    if (!existID) {
        throw new Error("The id doesn't exist. Please try with another one");
    }

}


/////////////////////////////////////////////////////////////
// Exportamos

module.exports = {
    esRoleValido,
    validarEmailRepetido,
    existeUsuarioPorID
}