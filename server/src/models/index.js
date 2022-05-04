const Usuario = require("../models/Usuario");
const Comentario = require("./Comentario");
const Like = require("./Like");
const Postagem = require("./Postagem");

async function inicializeModels() {
    await Usuario.sync();
    await Comentario.sync();
    await Like.sync();
    await Postagem.sync();
    console.log("Models are connected");
}

module.exports = inicializeModels;