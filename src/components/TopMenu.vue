<template>
  <div>
    <v-app-bar color="teal lighten-3" dark height="64">
      <v-app-bar-nav-icon />

      <v-toolbar-title class="top-menu__title">Page title</v-toolbar-title>

      <tabs-menu
        class="top-menu__tabs"
        :tab-id="activeMenuId"
        :tabs="tabsMenu"
        @click:tab="$router.push({ name: $event.path })"
      />

      <v-spacer />

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-avatar color="secondary" size="32">{{ userAvatar }}</v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="action in actionsMenu"
            :key="action.id"
            @click="action.action()"
          >
            <v-list-item-title> {{ action.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import TabsMenu from "@/components/TabsMenu";
import { mapActions, mapState } from "vuex";
export default {
  name: "TopMenu",
  components: { TabsMenu },
  props: {},
  data: (vm) => ({
    tabsMenu: [
      { name: "Главная", id: 0, path: "main" },
      { name: "Кошельки", id: 1, path: "briefcases" },
      { name: "активы", id: 2, path: "table", view: ["table", "deals"] },
    ],
    actionsMenu: [
      {
        id: 1,
        name: "Выход",
        icon: "",
        action: vm.logout,
      },
    ],
  }),
  computed: {
    ...mapState({
      user: (state) => state.auth.currentUser,
    }),
    userAvatar() {
      const name = this.user.name?.split(" ");
      return `${name[0].charAt(0)}${name[1] ? name[1].charAt(0) : ""}`;
    },
    activeMenuId() {
      const { name } = this.$route;

      const item = this.tabsMenu.find(
        (item) => name.includes(item.path) || item.view?.includes(name)
      );
      return item?.id;
    },
  },
  methods: {
    ...mapActions("auth", ["logOut"]),
    logout() {
      this.logOut();
      this.$router.push({ name: "login" });
    },
  },
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
