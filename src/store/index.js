import { createStore } from "vuex";

export default createStore({
  state: {
    entities: {
      Сделка: "leads",
      Контакт: "contacts",
      Компания: "companies",
    },
    loading: false,
    createdEntities: [],
    entity_id: null,
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    entities(state) {
      return state.entities;
    },
    entity_id(state) {
      return state.entity_id;
    },
    createdEntities(state) {
      return state.createdEntities;
    },
  },
  mutations: {
    startLoading(state) {
      state.loading = true;
    },
    endLoading(state) {
      state.loading = false;
    },
    createEntity(state, payload) {
      state.createdEntities.push(payload);
    },
    init(state) {
      if (localStorage.getItem("entities")) {
        console.log("init");
        state.createdEntities = JSON.parse(localStorage.getItem("entities"));
      }
    },
    saveEntity(state) {
      let entities = JSON.stringify(state.createdEntities);
      localStorage.setItem("entities", entities);
    },
    clearEntities(state) {
      if (localStorage.getItem("entities")) {
        state.createdEntities = [];
        localStorage.removeItem("entities");
      }
    },
  },
  actions: {
    aCreateEntity(store, currentEntity) {
      store.commit("startLoading");
      let entity = store.getters.entities[currentEntity];
      let url = `/api/v4/${entity}`;
      let token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYxZjA3NzZlNzAxZmZlMjY3ZDNmMTA2NzFhMjlmODUzZmU5ZTM5MjYzN2IwNDIzNTc5OTEwMjNkZTIyYWEzMzRjY2M3YTI0NGExZjhmOTFhIn0.eyJhdWQiOiIxYjkzYzk5NC1kNDM0LTQwNTctODI0OS03ZTVjNzNkZTFhYWEiLCJqdGkiOiI2MWYwNzc2ZTcwMWZmZTI2N2QzZjEwNjcxYTI5Zjg1M2ZlOWUzOTI2MzdiMDQyMzU3OTkxMDIzZGUyMmFhMzM0Y2NjN2EyNDRhMWY4ZjkxYSIsImlhdCI6MTY3NzA0NzM4NywibmJmIjoxNjc3MDQ3Mzg3LCJleHAiOjE2NzcxMzM3ODcsInN1YiI6IjczODA4ODMiLCJhY2NvdW50X2lkIjozMDg3ODU2NiwiYmFzZV9kb21haW4iOiJhbW9jcm0ucnUiLCJzY29wZXMiOlsiY3JtIl19.d6adjWw2eYRhv2V71Ru6UaSCT6dSc29v4uaNTuf1IMpR0aqJPalyJiSOVBhD-ccZldOMCLzBDhwLx3lTLC60tEw3pN2_WjcvmJ0xfccNvy_tX_sMJbIj0rbuj7099UxniYiOq95km0cM1ibHYre67GOy_ngXyUZJuOElhWClDT5hXzbAVrU3OHNXGGxwOFQD5wwrndUaO0FdOKDjVZvyMV7EUXUac5-WVDD97sDO7k7rdFRiIjDQVvz6K7-jKI3FnirJFn8PcWt8mzGu-YhvC-Wq8RCukcXwM6zsGl0Q_dY1xUmVc43Ucvj0gRlNhRDz5H0yJ3jGZMmyJS4pHdLnhA";
      fetch(url, {
        method: "POST",
        body: JSON.stringify([{ name: currentEntity }]),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          let id = data._embedded[entity][0].id;
          store.commit("createEntity", { name: currentEntity, id: id });
          store.commit("saveEntity");
          store.commit("endLoading");
        })
        .catch((err) => console.log(err));
    },
    aInit(store) {
      store.commit("init");
    },
    aClearEntities(store) {
      store.commit("clearEntities");
    },
  },
});
