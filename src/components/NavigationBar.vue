<template>
  <v-bottom-navigation class="navigation-bar" color="teal" height="auto">
    <v-btn v-for="item in items" :key="item.id" :to="item.path">
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "NavigationBar",
  components: {},
  data: () => ({
    items: [
      { name: "Активы", icon: "mdi-briefcase", path: "table", id: 1 },
      {
        name: "Сделки",
        icon: "mdi-clipboard-list-outline",
        path: "deals",
        id: 2,
      },
      { name: "Аналитика", icon: "mdi-finance", id: 3 },
      { name: "Импорт сделок", icon: "mdi-file-import-outline", id: 4 },
    ],
  }),

  methods: {},
};
</script>

<style lang="scss">
.navigation-bar {
  flex-direction: column;
  justify-content: flex-start !important;
  width: 60px !important;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  padding: 8px 0;

  .v-btn {
    padding: 8px 16px !important;
    min-width: auto !important;
  }
}
</style>
