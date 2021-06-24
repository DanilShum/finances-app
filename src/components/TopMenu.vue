<template>
  <div>
    <v-app-bar color="teal lighten-3" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="top-menu__title">Page title</v-toolbar-title>

      <tabs-menu
        class="top-menu__tabs"
        :tabs="tabMenu"
        @click:tab="$router.push({ path: $event.path })"
      />

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import TabsMenu from "@/components/TabsMenu";
export default {
  name: "TopMenu",
  components: { TabsMenu },
  props: {},
  data: () => ({
    tabMenu: [
      { name: "Главная", id: 1, path: "main" },
      { name: "Кошельки", id: 2, path: "briefcases" },
    ],
  }),
  staticData: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.top-menu {
}
.top-menu__title {
  flex-shrink: 0;
}
.top-menu__tabs {
  margin-left: 20px;
}
</style>
