const school = require("school.hana.js")

school
  .classes({
    ATPT_OFCDC_SC_CODE: "P10",
    SD_SCHUL_CODE: "8320297",
  })
  .then((res) => {
    console.log(res)
  })