<template>
  <div>
    <v-list-item-content>
      <v-list-item-title v-text="data.name" />
      <v-list-item-subtitle v-text="`Доходность ${data.profitability}%`" />
      <v-list-item-subtitle v-text="data.amount + ' ' + data.currency" />
      <v-list-item-subtitle v-text="`Активов ${data.countPosition}`" />
    </v-list-item-content>

    <div>
      <v-btn class="ma-1" color="red" x-small dark>
        <v-icon x-small dark> mdi-delete </v-icon>
      </v-btn>
      <v-btn class="ma-2" color="purple" x-small dark>
        <v-icon x-small dark> mdi-wrench </v-icon>
      </v-btn>
      <v-icon v-if="!data.mark" color="grey lighten-1">
        mdi-star-outline
      </v-icon>
      <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
    </div>
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
