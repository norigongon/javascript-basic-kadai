$(function(){
  //クラス属性がbtnの要素がクリックされたら
  $('.btn').on('click',function(){
    $('[value=""]').val('クリックしました！');
  });
});