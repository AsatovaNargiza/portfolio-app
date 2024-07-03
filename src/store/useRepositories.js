import { defineStore } from "pinia";
import axios from "axios";

export const useRepositories = defineStore("repositories", {
  state: () => ({ isLoading: false, value: null, error: "" }),
  actions: {
    async getRepositories() {
      try {
        this.isLoading = true;

        const result = await axios.get(
          "https://api.github.com/users/asatovanargiza/repos"
        );

        this.value = result.data;

        this.isLoading = false;
      } catch (error) {
        this.error = error.message;

        this.isLoading = false;
      }
    },
  },
});
