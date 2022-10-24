const school = require("school.hana.js")
const fs =require("fs")


const date = new Date();

const year = date.getFullYear();
const month = ('0' + (date.getMonth() + 1)).slice(-2);
const day = ('0' + date.getDate()).slice(-2);
const dateStr = year + month + day;

school
.meal({
  ATPT_OFCDC_SC_CODE: "P10",
  SD_SCHUL_CODE: "8320297",
  MLSV_YMD: dateStr,
})
.then((res) => {
  fs.writeFileSync("./json/meal.json", JSON.stringify(res))
})