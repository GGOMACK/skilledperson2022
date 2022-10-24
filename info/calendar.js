const school = require("school.hana.js")
const fs = require("fs")

school
.schedule({
  ATPT_OFCDC_SC_CODE: "P10",
  SD_SCHUL_CODE: "8320297",
})
.then((res) => {
  fs.writeFileSync("./json/calendar.json", JSON.stringify(res))
})