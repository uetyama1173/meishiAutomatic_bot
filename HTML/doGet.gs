function doGet() {

  season = ssRef(3)
  
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

  tellNum = ssRef(0)
  nickName = ssRef(1)
  myHobby = ssRef(2)
  season = seasonJudge()

  return HtmlService.createTemplateFromFile('index').evaluate();

}


