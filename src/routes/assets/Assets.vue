<template>
  <div class="assets">
    <navigation-bar />

    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
export default {
  name: "Assets",
  components: { NavigationBar },
  props: {},
  methods: {},
};
</script>

<style lang="scss">
.assets {
  display: flex;
  height: calc(100% - 60px);
}
.navigation-bar {
  margin-right: 10px;
}
</style>
