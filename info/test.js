const school = require("school.hana.js")

school
  .search({
    SCHUL_NM: "한국게임과학고등학교",
    KEY: "11171b439aef4433901bdd5ea3d4bdce",
    pIndex: 1,
    pSize: 100,
  })
  .then((res) => {
    console.log("SEARCH:", res)
  })

  school
  .meal({
    ATPT_OFCDC_SC_CODE: "P10",
    SD_SCHUL_CODE: "8320297",
  })
  .then((res) => {
    console.log(res[0])
  })

  school
  .schedule({
    ATPT_OFCDC_SC_CODE: "P10",
    SD_SCHUL_CODE: "8320297",
  })
  .then((res) => {
    console.log(res[0])
  })