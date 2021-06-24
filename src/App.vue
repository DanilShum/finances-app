<template>
  <v-app class="app">
    <top-menu />
    <router-view />
  </v-app>
</template>

<script>
import TopMenu from "@/components/TopMenu";
export default {
  name: "App",
  components: { TopMenu },
};
</script>
<style lang="scss">
.app {
  overflow: hidden;
  height: 100vh;
}
.main_container {
  height: calc(100% - 64px);
}
</style>
