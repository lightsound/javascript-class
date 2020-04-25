const USERS_API = "https://jsonplaceholder.typicode.com/users";

async function callApi() {
  const res = await window.fetch(USERS_API);
  const users = await res.json();
  console.log(users);
}

callApi();

// then
function callApiWithThen() {
  const users = fetch(USERS_API)
    .then(function (res) {
      return res.json();
    })
    .then(function (users) {
      console.log(users);
    });
}

// XMLHttpRequest
function callApiWithXhr() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", USERS_API);
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = function () {
    console.log(xhr.response);
  };
}
