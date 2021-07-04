<template>
  <div class="main-desktop">
    <top-menu />
    <keep-alive>
      <router-view />
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
}
</style>
