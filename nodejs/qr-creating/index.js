/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import * as fs from "fs";

inquirer
	.prompt([
		{
			type: "input",
			name: "url",
			message: "URL?",
		}
	])
	.then(({name, url}) => {
		console.log('thank you ' + name);
		console.log('your qr-code here for your url ' + url);
		const qr_svg = qr.image(url, {type: 'svg'});
		qr_svg.pipe(fs.createWriteStream('qr-code.svg'));

		fs.appendFile('URL.txt', '\n' + url, (err) => {
			if (err) throw err;
			console.log('url is noted');
		})
	})
	.catch((error) => {
		if (error.isTtyError) {
			console.log(error.message);
		} else {
			console.log(error.stack);
		}
	});


