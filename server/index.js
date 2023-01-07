const express = require("express");
const mysql = require("mysql");

// iniciando o express
const app = express();
// configurando banco de dados
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "", 
	database: "crudgames"
});
db.connect();


// req -> tudo que enviar para a URL
// res -> todo resultado vinido da URL
app.get('/games', ( req, res ) => {
	
	// let SQL = `
  // INSERT INTO games
  // 	( name, cost, category ) 
  // VALUES 
  // 	( 'Far Cry 5', '120', 'Ação' )
	// `;

	let SQL = `
  SELECT 
  	*
  FROM 
  	games
	`;

	db.query(SQL, async ( err, res ) => {
		console.log("ERROR ====> ", err);
		console.log("RES   ====> ", JSON.stringify(res));
		console.log("Foi");
	});

});

app.listen(3001, () => {
	console.log("Rodando servidor...");
})
