<template>
  <div class="briefcases main_container">
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
            <v-list-item
              key="create-briefcase"
              v-text="'Создать'"
              @click="
                createBriefcase({
                  name: 'кошелек4',
                  sum: 0,
                  currency: 'RUB',
                  assets: [],
                  deals: [],
                })
              "
            />
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script>
import Briefcase from "@/routes/briefcase/Briefcase";
import { mapActions, mapState } from "vuex";
export default {
  name: "Briefcases",
  components: { Briefcase },
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
    ],
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
  computed: {
    ...mapState({
      loading: (state) => state.assets.loading,
    }),
  },
  methods: {
    ...mapActions({
      createBriefcase: "briefcases/create",
      fetch: "briefcases/fetch",
    }),
  },
};
</script>

<style lang="scss">
.briefcases {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &.main_container {
    height: calc(100% - 64px);
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
