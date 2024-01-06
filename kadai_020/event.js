//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

//HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {

  //textというidを持つHTML要素を取得し、定数に代入する
  const text2 = document.getElementById('text');

  //定数に「ボタンをクリックしました」を代入し文字表示を変更する
  text2.textContent = 'ボタンをクリックしました';
});
