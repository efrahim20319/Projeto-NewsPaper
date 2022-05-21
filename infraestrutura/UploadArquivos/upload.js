const multer = require("multer");
const moment = require("moment");
const path = require("path");
const News = require("../../Model/news");

function Carregar() {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./View/telas/uploads");
    },
    filename: async function (req, file, cb) {
      const corpo = req.body;
      const imagem = file.originalname;
      const extensao = path.extname(imagem);
      const dados = Object.assign({}, corpo, { imagem: imagem });
      let ultimoId = await News.UltimoID()
      ultimoId = ultimoId[0].Ultimo + 1
      dados.imagem = `${ultimoId} - ${corpo.categoria} - ${moment().format("YYYY-MM-DD HH_mm_ss" )}${extensao}`;
      News.inserir(dados)
        .then(() => {
          cb(null, dados.imagem);
      })
      .catch(erro => {
        throw new Error(erro)
      });
    },
  });
  const upload = multer({ storage: storage });

  return upload;
}

module.exports = Carregar();