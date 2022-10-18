function ssRef(num){
  //前列が春夏秋冬な関数を作成

  //最終行を取得
  let lastdata = sheet_data.getLastRow()　- `${num}`;
 
  //前列春夏秋冬判定
  let refSeason = sheet_data.getRange(lastdata,3).getValue()


  return refSeason

}

function test(){

  console.log(ssRef(0))


}