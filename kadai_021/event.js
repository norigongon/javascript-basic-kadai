//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

//HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {

  //textというidを持つHTML要素を取得し、定数に代入する
  const text = document.getElementById('text');
  
  //2秒(2000ミリ秒)の待ち時間を設定し、非同期処理を実行する
  setTimeout(() => {
    //定数に「ボタンをクリックしました」を代入し、文字表示を変更する
    text.textContent = 'ボタンをクリックしました'

  }, 2000);

})