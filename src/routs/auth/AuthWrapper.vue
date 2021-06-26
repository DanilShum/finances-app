<template>
  <div class="auth-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AuthWrapper",
  components: {},
  props: {},
  data: () => ({}),
  staticData: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.auth-wrapper {
  background-color: rgba(black, 0.3);
  height: 100%;
  padding: 40px;
}
</style>
