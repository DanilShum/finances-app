<template>
  <v-app class="app">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss">
.main_container {
  height: calc(100% - 64px);
}
</style>
