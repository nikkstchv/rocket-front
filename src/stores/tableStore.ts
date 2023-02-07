import { defineStore } from "pinia";
import { TableState } from "../types/table.types";


export const useTableStore = defineStore("table", {
  state: (): TableState => ({
    data: [
      {
        key: 1,
        name: "John Brown",
        status: 32,
        createdAt: "New York No. 1 Lake Park",
        budget:
          "My name is John Brown",
      },
      {
        key: 2,
        name: "Jim Green",
        status: 42,
        createdAt: "London No. 1 Lake Park",
        budget:
          "My name is Jim Green",
      },
      {
        key: 3,
        name: "Joe Black",
        status: 32,
        createdAt: "Sidney No. 1 Lake Park",
        budget:
          "My name is Joe Black",
      },
    ],
    inputValue: '',
    isLoading: false
  }),

  getters: {

  },

  actions: {

  },

});