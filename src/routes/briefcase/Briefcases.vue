<template>
  <div class="briefcases main_container">
    <v-item-group class="briefcases__content" mandatory>
      <v-container>
        <v-row>
          <v-col
            v-for="(item, index) in briefcasesItems"
            :key="index"
            cols="12"
            md="4"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : 'secondary'"
                class="d-flex align-center"
                dark
                height="200"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <briefcase :data="item" />
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
          <v-col
            key="create-briefcase"
            v-text="'Создать'"
            @click="
              createBriefcase({
                name: 'кошелек4',
                sum: 0,
                currency: 'RUB',
              })
            "
          />
        </v-row>
      </v-container>
    </v-item-group>
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
      {
        id: 2,
        name: "Кошелечек 1",
        currency: "RUB",
        amount: 15000,
        profitability: 24,
        countPosition: 34,
      },
      {
        id: 3,
        name: "Кошелечек 1",
        currency: "RUB",
        amount: 15000,
        profitability: 24,
        countPosition: 34,
      },
      {
        id: 4,
        name: "Кошелечек 1",
        currency: "RUB",
        amount: 15000,
        profitability: 24,
        countPosition: 34,
      },
    ],
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
