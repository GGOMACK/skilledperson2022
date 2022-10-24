const school = require("school.hana.js")
const fs = require("fs")

function getCurrentWeek() {
    const day = new Date();
    const sunday = day.getTime() - 86400000 * day.getDay();
  
    day.setTime(sunday);
  
    const result = [day.toISOString().slice(0, 10)];
  
    for (let i = 1; i < 7; i++) {
      day.setTime(day.getTime() + 86400000);
      result.push(day.toISOString().slice(0, 10));
    }
    return result;
  }

    let monday = getCurrentWeek()[1].replace(/-/g, '');
    let friday = getCurrentWeek()[5].replace(/-/g, '');

school
  .timetable({
    ATPT_OFCDC_SC_CODE: "P10",
    SD_SCHUL_CODE: "8320297",
    SCHUL_KND_SC_NM: "고등학교",
    GRADE: "2",
    CLASS_NM: "1",
    TI_FROM_YMD: monday,
    TI_TO_YMD: friday,
  })
  .then((res) => {
    fs.writeFileSync("./json/schedule.json", JSON.stringify(res))
  })