function doGet() {

  season = ssRef(0)
  
  let seasonJudge = () => {
    if (season == "spring") {
      season = "https://uetyama1173.github.io/meishiAutomatic_bot/icooon-mono/spring.png";
    } else if (season == "summer") {
      season = "https://uetyama1173.github.io/meishiAutomatic_bot/icooon-mono/summer.png";
    } else if (season == "autumn") {
      season = "https://uetyama1173.github.io/meishiAutomatic_bot/icooon-mono/autumn.png";
    } else if (season == "winter") {
      season = "https://uetyama1173.github.io/meishiAutomatic_bot/icooon-mono/winter.png";
    }
    return season
  }

  name = ssRef(7)
  email = ssRef(6)
  tel = ssRef(5)
  dantai = ssRef(4)
  phrase = ssRef(3)
  hobby = ssRef(2)
  nickname = ssRef(1)
  season = seasonJudge()

  return HtmlService.createTemplateFromFile('index').evaluate();

}


