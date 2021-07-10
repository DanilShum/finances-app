<template>
  <div class="main-desktop">
    <top-menu />
    <keep-alive>
      <router-view class="main-desktop__content" />
    </keep-alive>
  </div>
</template>

<script>
import TopMenu from "@/components/TopMenu";
export default {
  name: "MainDesktop",
  components: { TopMenu },
  props: {},
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.main-desktop {
  height: 100vh;
  max-height: 100vh;
  min-height: 500px;
  overflow: hidden;
  max-width: 100%;
  background-color: rgba(#80cbc4, 0.05);
}
.main-desktop__content {
  padding: 10px 10px 10px 0;
}
</style>
