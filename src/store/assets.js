import firebase from "firebase";
import { isEqual } from "lodash-es";

export default {
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
  },
  mutations: {
    set(state, updatedState) {
      for (const key in updatedState) {
        if (!isEqual(state[key], updatedState[key])) {
          state[key] = updatedState[key];
        }
      }
    },
  },
  actions: {
    async fetchAssets({ commit, rootState }) {
      commit("set", { loading: true });
      const countRef = await firebase
        .database()
        .ref(`/users/${rootState.auth.currentUser.uid}/assets`);
      countRef.on("value", async (snapshot) => {
        const data = await snapshot.val();
        if (data) {
          commit("set", { list: data });
        }
        commit("set", { loading: false });
      });
    },
    async createAsset({ state, dispatch, rootState }, asset) {
      await firebase
        .database()
        .ref(`/users/${rootState.auth.currentUser.uid}/assets`)
        .update([...state.list, asset]);

      dispatch("fetchAssets");
    },
  },
};
