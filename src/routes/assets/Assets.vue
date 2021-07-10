<template>
  <div class="assets">
    <div class="assets__bar">
      <v-btn to="/app/assets/table" />
      <v-btn to="/app/assets/deals" />
    </div>

    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Assets",
  components: {},
  props: {},
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.assets {
  display: flex;
  height: calc(100% - 60px);
}
.assets__bar {
  padding-right: 10px;
}
</style>
