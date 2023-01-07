const express = require("express");
const app = express();

// req -> tudo que enviar para a URL
// res -> todo resultado vinido da URL
app.get('/', ( req, res ) => {
	res.send("Hello World!!!");
});

app.listen(3001, () => {
	console.log("Rodando servidor...");
})
