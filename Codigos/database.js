
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

//criar 
db.set('Banimg', [])

//postar
db.get('Banimg').push({
    id: "458463680787644426",
    link: "noseting"
})

//editar
db.get('servidor2').find({id: "222222"}).assign({nick: "paulo novo"})

//buscar
console.log(
db.get('banimage').find({id: "alterarimgdoban"}).value().link)

//apagar
db.get('servidor2').remove({id: "222222"})

//escrever
.write()