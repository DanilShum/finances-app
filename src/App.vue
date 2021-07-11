<template>
  <v-app class="app">
    <router-view v-if="user.uid" />
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState({
      user: (state) => state.auth.currentUser,
    }),
  },
};
</script>
<style lang="scss">
.main_container {
  height: calc(100% - 64px);
}
</style>
