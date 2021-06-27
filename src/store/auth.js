import firebase from "firebase/app";

export default {
  namespaced: true,
  state: {
    currentUser: {
      uid: undefined,
    },
  },
  mutations: {
    setUid(state, id) {
      state.currentUser.uid = id;
    },
  },
  getters: {},
  actions: {
    async signUp({ commit }, { email, password, name }) {
      try {
        const { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        commit("setUid", user.uid);
        await firebase.database().ref(`/users/${user.uid}/info`).set({
          name,
        });
      } catch (e) {
        commit("setError", e, { root: true });
        throw e;
      }
    },

    async logIn({ commit }, { email, password }) {
      try {
        const { user } = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        commit("setUid", user.uid);
      } catch (e) {
        commit("setError", e, { root: true });
        throw e;
      }
    },
    async logOut() {
      try {
        await firebase.auth().signOut();
      } catch (e) {
        console.log(e);
      }
    },

    async getUser({ commit }) {
      const res = await firebase.auth().currentUser;
      commit("setUid", res.uid);
      return res;
    },
  },
};
