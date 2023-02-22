import { createApp } from "vue";
import App from "./App.vue";
// import router from './router'
import store from "./store";

createApp(App).use(store).mount("#app");
// createApp(App).use(store).use(router).mount('#app')

let url = "http://localhost:8080/oauth/get-token.php";
// let url = "https://test.gnzs.ru/oauth/get-token.php";

// let response = fetch(url, {
//   headers: {
//     "Content-Type": "application/json",
//     "X-Client-Id": 30878566,
//   },
// }).then((res) => res.json());
// response
//   .then((data) => data)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

let deal = "/api/v4/leads";
let dealData = [{ name: "Сделка" }];

let contact = "/api/v4/contacts";
let contactData = [{ name: "Контакт" }];

fetch(contact, {
  method: "POST",
  body: JSON.stringify(contactData),
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer " +
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYxZjA3NzZlNzAxZmZlMjY3ZDNmMTA2NzFhMjlmODUzZmU5ZTM5MjYzN2IwNDIzNTc5OTEwMjNkZTIyYWEzMzRjY2M3YTI0NGExZjhmOTFhIn0.eyJhdWQiOiIxYjkzYzk5NC1kNDM0LTQwNTctODI0OS03ZTVjNzNkZTFhYWEiLCJqdGkiOiI2MWYwNzc2ZTcwMWZmZTI2N2QzZjEwNjcxYTI5Zjg1M2ZlOWUzOTI2MzdiMDQyMzU3OTkxMDIzZGUyMmFhMzM0Y2NjN2EyNDRhMWY4ZjkxYSIsImlhdCI6MTY3NzA0NzM4NywibmJmIjoxNjc3MDQ3Mzg3LCJleHAiOjE2NzcxMzM3ODcsInN1YiI6IjczODA4ODMiLCJhY2NvdW50X2lkIjozMDg3ODU2NiwiYmFzZV9kb21haW4iOiJhbW9jcm0ucnUiLCJzY29wZXMiOlsiY3JtIl19.d6adjWw2eYRhv2V71Ru6UaSCT6dSc29v4uaNTuf1IMpR0aqJPalyJiSOVBhD-ccZldOMCLzBDhwLx3lTLC60tEw3pN2_WjcvmJ0xfccNvy_tX_sMJbIj0rbuj7099UxniYiOq95km0cM1ibHYre67GOy_ngXyUZJuOElhWClDT5hXzbAVrU3OHNXGGxwOFQD5wwrndUaO0FdOKDjVZvyMV7EUXUac5-WVDD97sDO7k7rdFRiIjDQVvz6K7-jKI3FnirJFn8PcWt8mzGu-YhvC-Wq8RCukcXwM6zsGl0Q_dY1xUmVc43Ucvj0gRlNhRDz5H0yJ3jGZMmyJS4pHdLnhA",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data._embedded.contacts[0].id + " main"))
  .catch((err) => console.log(err));

// let response3 = fetch(deal, {
//   method: "POST",
//   // body: JSON.stringify({ Authorization: response }),
//   body: JSON.stringify({ name: response }),
//   headers: {
//     "Content-Type": "application/json",
//     Authorization:
//       "Bearer " +
//       "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRhNTMxODk1NTUxNGY5MThiZmFmMmFjYjA0NTMzNjgzZDZmMWJlMzAxMzgwMTk4ZWE3NGEwYjM4OGNhNWJkOTRlN2Q4MDc3YWQ3MDM3YjI1In0.eyJhdWQiOiIxYjkzYzk5NC1kNDM0LTQwNTctODI0OS03ZTVjNzNkZTFhYWEiLCJqdGkiOiJkYTUzMTg5NTU1MTRmOTE4YmZhZjJhY2IwNDUzMzY4M2Q2ZjFiZTMwMTM4MDE5OGVhNzRhMGIzODhjYTViZDk0ZTdkODA3N2FkNzAzN2IyNSIsImlhdCI6MTY3Njk2MTAyNSwibmJmIjoxNjc2OTYxMDI1LCJleHAiOjE2NzcwNDc0MjUsInN1YiI6IjczODA4ODMiLCJhY2NvdW50X2lkIjozMDg3ODU2NiwiYmFzZV9kb21haW4iOiJhbW9jcm0ucnUiLCJzY29wZXMiOlsiY3JtIl19.U7fffKd9uftT8SHEfcUnjNqfSanApUlEsBojD0YtCCoGgmebhdY6kpLGgxruGxZc2qALgdaCUqn-gXDMzhoFNB9lewAKdVs7CEK3KxhtN-jfDZzui6xP7QkCnNAamYEM2ON60xXCh8njXWdZk2RFwZTDq5kle362o7tN6VxdBY0eBQri2SgY5ImgIbJanQj3S1d_lKiI-PHwmqrnIGMf7TbAA4RrLvqDHLQJZkHqlhe715N8ZIsIrrGzye5jpNd2I_vxUo3-k3woVRl3Y8o__vFW7K-irpz0quqg5TSL-oEq5-bPwCsykQ7NhNotoQqPt6BGx3sdIy7Ti0B-_CPf0g",
//   },
// }).then((res) => res.json());
// response3.then((data) => console.log(data)).catch((err) => console.log(err));
// ---
// var myHeaders = new Headers();
// myHeaders.append("apikey", "GlNCr78Xb1qLSfDAB42HfeuhdP795NtD");

// var requestOptions = {
//   method: "GET",
//   redirect: "follow",
//   headers: myHeaders,
// };

// fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));
// ---
// let url2 = "/d6757be6f1100.amocrm.ru/";
// let url2 = "http://localhost:8081/api/v4/leads";
