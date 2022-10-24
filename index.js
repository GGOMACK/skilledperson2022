const school = require("school.hana.js")
let ai;
function getdata() {
school
  .search({
    SCHUL_NM: "한국게임과학고등학교",
  })
  .then((res) => {
    ai = res;})
return ai;
}

console.log(getdata().ai)