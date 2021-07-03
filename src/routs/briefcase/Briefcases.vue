<template>
  <div class="briefcases main_container">
    <v-toolbar
      class="briefcases__toolbar"
      height="36"
      max-height="36"
      color=" blue-grey lighten-5"
    >
      <tabs-menu
        :height="36"
        :tab-id="activeMenuId"
        :tabs="tabsMenu"
        @click:tab="$router.push({ name: $event.path })"
      />

      <v-btn icon small class="mr-2" @click="showDropparams = true">
        <v-icon>mdi-filter-menu-outline</v-icon>
      </v-btn>
      <!--      <v-btn icon small class="mr-2" @click="showDropparams = true">-->
      <!--        <v-icon>mdi-finance</v-icon>-->
      <!--      </v-btn>-->
      <v-btn icon small class="mr-0" @click="showDropparams = true">
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
    </v-toolbar>
    <div class="briefcases__content">
      <v-card class="briefcases__list">
        <v-list two-line>
          <v-list-item-group v-model="selected" active-class="teal--text">
            <template v-for="(item, index) in briefcasesItems">
              <v-list-item :key="item.title">
                <template v-slot:default="{ active }">
                  <briefcase :data="item" :active="active" />
                </template>
              </v-list-item>

              <v-divider
                v-if="index < briefcasesItems.length - 1"
                :key="index"
              />
            </template>
          </v-list-item-group>
        </v-list>
      </v-card>
      <keep-alive :include="['BriefcasesAssets', 'BriefcasesDeals']">
        <router-view />
      </keep-alive>
    </div>
    <popup
      v-if="showDropparams"
      :overlay-transparent="false"
      @close="showDropparams = false"
    >
      <template #content> </template>
    </popup>
  </div>
</template>

<script>
import Briefcase from "@/routs/briefcase/Briefcase";
import TabsMenu from "@/components/TabsMenu";
import Popup from "@/components/Popup";
import { mapState } from "vuex";
export default {
  name: "Briefcases",
  components: { Popup, TabsMenu, Briefcase },
  props: {},
  data: () => ({
    selected: 0,
    briefcasesItems: [
      {
        id: 1,
        name: "Кошелечек 1",
        currency: "RUB",
        amount: 15000,
        profitability: 24,
        countPosition: 34,
      },
      {
        id: 2,
        name: "Кошелечек 2",
        currency: "USD",
        amount: 105000,
        profitability: 12,
        countPosition: 53,
      },
      {
        id: 3,
        name: "Кошелечек 3",
        currency: "RUB",
        amount: 155000,
        profitability: 75,
        countPosition: 12,
      },
      {
        id: 4,
        name: "Кошелечек 4",
        currency: "EUR",
        amount: 175000,
        profitability: 1,
        countPosition: 54,
      },
      {
        id: 5,
        name: "Кошелечек 5",
        currency: "RUB",
        amount: 125000,
        profitability: -56,
        countPosition: 324,
      },
      {
        id: 6,
        name: "Кошелечек 5",
        currency: "RUB",
        amount: 125000,
        profitability: -56,
        countPosition: 324,
      },
      {
        id: 7,
        name: "Кошелечек 5",
        currency: "RUB",
        amount: 125000,
        profitability: -56,
        countPosition: 324,
      },
      {
        id: 8,
        name: "Кошелечек 5",
        currency: "RUB",
        amount: 125000,
        profitability: -56,
        countPosition: 324,
      },
      {
        id: 9,
        name: "Кошелечек 5",
        currency: "RUB",
        amount: 125000,
        profitability: -56,
        countPosition: 324,
      },
      {
        id: 10,
        name: "Кошелечек 5",
        currency: "RUB",
        amount: 125000,
        profitability: -56,
        countPosition: 324,
      },
    ],
    tabsMenu: [
      { name: "таблица", id: 2, path: "table", view: "assets" },
      { name: "сделки", id: 1, path: "deals", view: "deals" },
      // { name: 'графики', id: 3, path: 'analytics', view: 'analytics' },
    ],
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    showDropparams: false,
  }),
  computed: {
    ...mapState({
      tableRow: (state) => state.assets.list,
      loading: (state) => state.assets.loading,
    }),
    activeMenuId() {
      const { path } = this.$route;

      const item = this.tabsMenu.find((item) => path.includes(item.path));
      return item?.id;
    },
  },
};
</script>

<style lang="scss">
.briefcases {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &.main_container {
    height: calc(100% - 64px - 36px);
  }
}
.briefcases__title {
  width: 100%;
}
.briefcases__toolbar {
  box-shadow: none !important;
}
.briefcases__content {
  display: flex;
  width: 100%;
  height: 100%;
}

.briefcases__list {
  flex-shrink: 2;
  overflow: auto;
  max-width: 250px !important;
  min-width: 180px;
  .v-list {
    padding: 0;
  }
}
</style>
