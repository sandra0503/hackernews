import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";

const instance = axios.create({
  baseURL: "https://hacker-news.firebaseio.com",
  adapter: httpAdapter
});

export function fetchStories() {
  let stories = [];

  instance
    .get("/v0/topstories.json")
    .then(result => {
      const ids = result.data;

      ids.map(id => {
        instance
          .get(`/v0/item/${id}.json`)
          .then(result => {
            stories.push(result.data);
          })
          .catch(err => console.log(err));
      });
    })
    .catch(err => console.log(err));

  return stories;
}
