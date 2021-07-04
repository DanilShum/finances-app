<template>
  <div class="auth-wrapper">
    <slot v-bind="error" />
  </div>
</template>

<script>
import messages from "@/helpers/messages";

export default {
  name: "AuthWrapper",
  components: {},
  props: {},
  data: () => ({}),
  computed: {
    error() {
      const error = this.$store.getters.error;
      const password = error?.code.includes("password") && messages[error.code];
      const email =
        (error?.code.includes("email") || error?.code.includes("user")) &&
        messages[error.code];
      return { ...error, password, email };
    },
  },
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
