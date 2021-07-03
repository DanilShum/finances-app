import { isEqual } from "lodash-es";
import firebase from "firebase";

export const createStore = ({
  entity,
  state,
  getters,
  mutations,
  actions,
}) => ({
  namespaced: true,
  state: {
    list: [
      // {
      //   name: "Sberbank",
      //   count: 159,
      //   middlePrice: 6.0,
      //   currentPrice: 24,
      //   cost: 4.0,
      //   profit: "1%",
      //   profitability: "45%",
      //   percent: "6%",
      // },
      // {
      //   name: "Mvideo",
      //   count: 159,
      //   middlePrice: 6.0,
      //   currentPrice: 24,
      //   cost: 4.0,
      //   profit: "1%",
      //   profitability: "45%",
      //   percent: "6%",
      // },
      // {
      //   name: "Magnit",
      //   count: 159,
      //   middlePrice: 6.0,
      //   currentPrice: 24,
      //   cost: 4.0,
      //   profit: "1%",
      //   profitability: "45%",
      //   percent: "6%",
      // },
      // {
      //   name: "Alrosa",
      //   count: 159,
      //   middlePrice: 6.0,
      //   currentPrice: 24,
      //   cost: 4.0,
      //   profit: "1%",
      //   profitability: "45%",
      //   percent: "6%",
      // },
      // {
      //   name: "MTS",
      //   count: 159,
      //   middlePrice: 6.0,
      //   currentPrice: 24,
      //   cost: 4.0,
      //   profit: "1%",
      //   profitability: "45%",
      //   percent: "6%",
      // },
      // {
      //   name: "Detsky Mir",
      //   count: 159,
      //   middlePrice: 6.0,
      //   currentPrice: 24,
      //   cost: 4.0,
      //   profit: "1%",
      //   profitability: "45%",
      //   percent: "6%",
      // },
      // {
      //   name: "Aero flot",
      //   count: 159,
      //   middlePrice: 6.0,
      //   currentPrice: 24,
      //   cost: 4.0,
      //   profit: "1%",
      //   profitability: "45%",
      //   percent: "6%",
      // },
      // {
      //   name: "Nor Nikel",
      //   count: 159,
      //   middlePrice: 6.0,
      //   currentPrice: 24,
      //   cost: 4.0,
      //   profit: "1%",
      //   profitability: "45%",
      //   percent: "6%",
      // },
      // {
      //   name: "Yandex",
      //   count: 159,
      //   middlePrice: 6.0,
      //   currentPrice: 24,
      //   cost: 4.0,
      //   profit: "1%",
      //   profitability: "45%",
      //   percent: "6%",
      // },
      // {
      //   name: "Qiwi",
      //   count: 159,
      //   middlePrice: 6.0,
      //   currentPrice: 24,
      //   cost: 4.0,
      //   profit: "1%",
      //   profitability: "45%",
      //   percent: "6%",
      // },
    ],
    loading: false,
    ...state,
  },
  getters: {
    ...getters,
  },
  mutations: {
    set(state, updatedState) {
      for (const key in updatedState) {
        if (!isEqual(state[key], updatedState[key])) {
          state[key] = updatedState[key];
        }
      }
    },
    ...mutations,
  },
  actions: {
    async fetch({ commit, rootState }) {
      commit("set", { loading: true });
      const countRef = await firebase
        .database()
        .ref(`/users/${rootState.auth.currentUser.uid}/${entity}`);
      countRef.on("value", async (snapshot) => {
        const data = await snapshot.val();
        if (data) {
          commit("set", { list: data });
        }
        commit("set", { loading: false });
      });
    },
    async create({ state, dispatch, rootState }, items) {
      await firebase
        .database()
        .ref(`/users/${rootState.auth.currentUser.uid}/${entity}`)
        .update([...state.list, items]);

      dispatch("fetch");
    },
    ...actions,
  },
});
