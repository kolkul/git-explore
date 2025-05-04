import express from "express";
import bodyParser from "body-parser";

const _dirname = import.meta.dirname;

const app = express();
const port = 3000;

let bandName = '';

app.get('/', (req, res) => {
  res.sendFile(_dirname + '/public/index.html' );
})

app.use('/submit', bodyParser.urlencoded({ extended: true }));

const generateBandName = (req, res, next) => {
  const {street, pet} = req.body;
  bandName = `${street}${pet}`;
  next();
};

app.use(generateBandName);

app.post('/submit', (req, res) => {
  res.send(bandName);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
