import firebase from "firebase/app";

export default {
  namespaced: true,
  state: {
    currentUser: {},
  },
  mutations: {},
  getters: {},
  actions: {
    async signUp(context, { email, password, name }) {
      try {
        const { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        await firebase.database().ref(`/users/${user.uid}/info`).set({
          name,
        });
      } catch (e) {
        console.log(e);
      }
    },

    async logIn(context, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        console.log(e);

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

    // async getUser({ state }) {
    //   const res = await firebase.auth().currentUser;
    //   state.currentUser = res;
    //   return res;
    // },
  },
};