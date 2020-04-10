const multer = require("multer")
const path = require("path")
const crypto = require("crypto")

module.exports = {
  dest: path.resolve(__dirname, "..", "..", "tmp", "uploads" ),//informa qual pasta receberá os arquivos
  storage: multer.diskStorage({
     destination: ( req, file, cb) => {
         cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads" ))
     },
     filename: ( req, file, cb ) => {//esta parte é responsavel por evitar que dois usuarios possam enviar uma foto com o mesmo nome
         crypto.randomBytes(16, (err, hash ) => {
             if(err) cb(err)


             const fileName = `${hash.toString("hex")}-${file.originalname}`;//esta parte junta os caracteres criados com o hash, e o nome original da img que o usuario mandou

             cb(null, fileName)//não dando erro. ele salva a img
         })
     }
  }),

  limits: {
      fileSize: 2 * 8024  * 8024,//limita o tamanho do arquivo enviado
  },

  fileFilter: ( req, file, cb ) => {//faz um filtro dos tipo de arquivos que o usuario pode enviar para a aplicação
    const allowedMimes = [
        "image/jpeg",
        "image/jpg",
        "image/pjpeg",
        "image/png",
        "image/gif"
        //esses são os tipos de imagens possiveis em nosso sistema
    ];

    if(allowedMimes.includes(file.mimetype)){
        cb(null, true)
    } else {
        console.log(cb)
        cb( new Error("Tipo de arquivo invalido"))
    }
  },
}