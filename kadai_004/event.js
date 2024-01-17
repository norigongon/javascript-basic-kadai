
  //HTMLドキュメントが読み込み完了した場合
  $(window).on(
    'load', () => {
      console.log('loadイベントが発生しました');
  });

  //scrollイベントが発生した場合
  $(window).on(
    'scroll', () => {
      console.log('scrollイベントが発生しました');
    });



