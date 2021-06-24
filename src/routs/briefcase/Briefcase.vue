<template>
  <div>
    <v-list-item-content>
      <v-list-item-title v-text="data.name"></v-list-item-title>

      <v-list-item-subtitle
        class="text--primary"
        v-text="data.name"
      ></v-list-item-subtitle>

      <v-list-item-subtitle v-text="data.amount"></v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <v-list-item-action-text></v-list-item-action-text>

      <v-icon v-if="!active" color="grey lighten-1"> mdi-star-outline </v-icon>

      <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
    </v-list-item-action>
  </div>
</template>

<script>
export default {
  name: "Briefcase",
  components: {},
  props: {
    data: {
      type: Object,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
  staticData: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss"></style>
