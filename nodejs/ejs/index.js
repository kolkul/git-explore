import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	const date = new Date();
	const today = date.getDay();

	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	res.render('index.ejs', {
		dayType: days[today],
		advice: `it's time to drink`,
		list: Array(10).fill('test'),
	})
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})
