<template>
  <v-tabs
    class="tabs-menu"
    :background-color="backgroundColor"
    :value="tabId"
    v-bind="$attrs"
    :height="height"
  >
    <v-tab v-for="tab in tabs" :key="tab.id" @click="onTab(tab)">
      {{ tab.name }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "TabsMenu",
  components: {},
  props: {
    tabId: {
      type: Number,
      default: 0,
    },
    tabs: {
      type: Array,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: "",
    },
    height: {
      type: [Number, String],
      default: 64,
    },
  },
  data: () => ({}),
  computed: {},
  methods: {
    onTab(tab) {
      if (tab.id === this.tabId) return;
      this.$emit("click:tab", tab);
    },
  },
};
</script>

<style lang="scss">
.tabs-menu {
}
</style>
