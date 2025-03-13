/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter any url: ",
      name: "link",
    },
  ])
  .then((answers) => {
    var qr_svg = qr.image(answers.link, { type: "svg" });
    qr_svg.pipe(fs.createWriteStream(`${answers.link}.svg`));

    fs.writeFile("URL.txt", answers.link, (err) => {
      if (err) throw err;
      console.log(answers.link + " has been saved as qr code");
    });
  });
