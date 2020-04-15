/**
 * もくじ
 *
 * 1. 関数とは何か？
 *    タスクや値計算を実行する文の集まり（MDN）
 *
 * 2. 今までの講座とのつながりについて
 *    オブジェクトのメソッドが関数です
 *    メソッドの短縮記法についても説明
 *
 * 3. 関数の基礎について理解する
 *    return の有無で何が違うのか
 *
 * 4. 匿名（無名）関数について理解する
 *    関数は値として利用できる（関数式）
 *
 * 5. コールバック関数について理解する
 *    Windowオブジェクトのメソッド等でもよく使われます
 */

//  関数宣言の構文
function 関数名(仮引数1, 仮引数2) {
  // 色々処理を入れたり...
  return 関数の返り値;
}

// 関数宣言の例
function isTweetable(text) {
  return text.length <= 140;
}

function alertTweetable(text) {
  if (isTweetable(text)) {
    alert("you can tweet!");
  }
}

// 関数式・匿名関数
const isTweetable = function (text) {
  return text.length <= 140;
};

const alertTweetable = function (text) {
  if (isTweetable(text)) {
    alert("you can tweet!");
  }
};

// 高階関数・コールバック関数の構文
function 高階関数(コールバック関数) {
  // 色々処理を入れたり...
  コールバック関数();
}

// 高階関数・コールバック関数の例 (window.confirm を使って説明)
function unfollow() {
  console.log("フォローを外しました");
}

function cancelTweet() {
  console.log("ツイートをキャンセルしました");
}

function confirmed(fn) {
  if (window.confirm("実行しますか？")) {
    fn();
  }
}

confirmed(unfollow);
confirmed(function () {
  console.log("ツイートをキャンセルしました");
});

// 高階関数・コールバック関数の例 (window.prompt を使って説明)
function confirmed(fn) {
  const input = window.prompt("実行しますか？");
  if (input === "実行") {
    fn();
  }
}

confirmed(function () {
  console.log("リポジトリを削除しました");
});

// コールバック関数に引数を渡す例
function confirmed(fn) {
  const input = window.prompt("実行しますか？");
  fn(input);
}

confirmed(function (input) {
  if (input === "実行") {
    console.log("リポジトリを削除しました");
  }
});

// Documentオブジェクト内メソッドの高階関数 (addEventListener) を紹介
const btn = document.getElementByID("button");

btn.addEventListener("click", function () {
  console.log("ボタンを押しました");
});

// JavaScript標準メソッドの高階関数 (forEach) を紹介
const foods = ["にんじん", "じゃがいも", "玉ねぎ"];

foods.forEach(function (food) {
  console.log(food);
});
