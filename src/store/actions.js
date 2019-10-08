import { fetchStories } from "../api.js";

export default {
  FETCH_STORIES: ({ commit }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const stories = await fetchStories();
        commit("SET_STORIES", stories);
        resolve(stories);
      } catch (error) {
        reject(error);
      }
    });
  }
};
