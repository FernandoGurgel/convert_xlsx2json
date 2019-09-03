var xlsxj = require("xlsx-to-json");
require('dotenv/config');

var tags = process.env.TAG_XLSX.split(",")



tags.forEach( (data) =>{
    // console.log(data);
    xlsxj({
        input: "Modelo AGING excel.xlsx", 
        output: "output.json",
        sheet: data
      }, (err, result) => {
        if(err) {
          console.error(err);
        }else {
          console.log(result);
        }
      });
})
