<template>
  <div
    class="popup popup_overlay"
    :class="{ 'popup_bg-overlay': overlayTransparent }"
    @click="$emit('close')"
  >
    <v-card
      @click.native.stop
      elevation="2"
      class="popup__wrapper"
      :class="{ popup_opened: value }"
    >
      <div class="popup__actions">
        <v-btn icon @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <slot name="action" />
      </div>
      <div v-if="$slots.header || title" class="popup__header">
        <h3 class="popup__title">{{ title }}</h3>
        <slot name="header" />
      </div>
      <div class="popup__content">
        <slot name="content" />
      </div>
      <div v-if="$slots.footer" class="popup__footer">
        <slot name="footer" />
      </div>
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
    title: {
      type: String,
      default: "",
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
.popup__wrapper {
  margin: 100px auto;
  max-width: 1000px !important;
  padding: 20px;
}
.popup__footer {
  display: flex;
  justify-content: flex-end;
}
.popup__actions {
  display: flex;
  justify-content: flex-end;
}
</style>
