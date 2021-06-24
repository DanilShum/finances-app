<template>
  <v-tabs
    class="tabs-menu"
    :background-color="backgroundColor"
    v-bind="$attrs"
    :height="height"
  >
    <v-tab v-for="tab in tabs" :key="tab.id" @click="$emit('click:tab', tab)">
      {{ tab.name }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "TabsMenu",
  components: {},
  props: {
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
  methods: {},
};
</script>

<style lang="scss">
.tabs-menu {
}
</style>
