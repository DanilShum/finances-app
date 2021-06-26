<template>
  <div
    class="popup popup_overlay"
    :class="{ 'popup_bg-overlay': overlayTransparent }"
    v-show="value"
    @click="$emit('input', !value)"
  >
    <v-card
      @click.native.stop
      elevation="2"
      class="popup__content"
      :class="{ popup_opened: value }"
    >
      <slot />
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Popup",
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    overlayTransparent: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({}),
  staticData: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.popup_overlay {
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.popup_bg-overlay {
  background-color: rgba(black, 0.4);
}
.popup__content {
  margin: 100px auto;
  max-width: 1000px !important;
}
</style>
