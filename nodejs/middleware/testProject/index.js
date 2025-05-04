//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const _dirname = import.meta.dirname;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
	res.sendFile(_dirname + '/public/index.html');
})

app.use('/check', (req, res, next) => {
	const {password} = req.body;

	if (password == 'ILoveProgramming') {
		res.redirect('/secret');
	} else {
		next()
	}
})

app.post('/check', (req, res) => {
	res.redirect('/');
})

app.get('/secret', (req, res) => {
	res.sendFile(_dirname + '/public/secret.html');
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})
