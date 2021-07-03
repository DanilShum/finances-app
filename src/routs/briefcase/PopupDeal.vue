<template>
  <popup class="popup-deal" @close="close" title="Добавление нового актива">
    <template #content>
      <form @submit.prevent="submit" id="popup-form">
        <ValidationObserver ref="observer">
          <v-container fluid>
            <v-row align="center">
              <v-col class="d-flex" cols="12" sm="2">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required"
                  name="Название"
                >
                  <v-select
                    :items="assets"
                    label="Название"
                    :error-messages="errors"
                    v-model="dealsValue.name"
                  />
                </ValidationProvider>
              </v-col>
              <v-col class="d-flex" cols="12" sm="2">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required"
                  name="Тикер"
                >
                  <v-select
                    :items="tickers"
                    label="Тикер"
                    :error-messages="errors"
                    v-model="dealsValue.ticker"
                  />
                </ValidationProvider>
              </v-col>
              <v-col class="d-flex" cols="12" sm="2">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required"
                  name="Операция"
                >
                  <v-select
                    :items="operations"
                    label="Операция"
                    :error-messages="errors"
                    v-model="dealsValue.operation"
                  />
                </ValidationProvider>
              </v-col>
            </v-row>
          </v-container>
        </ValidationObserver>

        <ValidationObserver ref="observer">
          <v-container fluid>
            <v-row align="center">
              <v-col v-for="item in items" :key="item.field" cols="4" sm="6">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required"
                  :name="item.name"
                >
                  <v-text-field
                    :label="item.name"
                    :type="item.type"
                    :error-messages="errors"
                    v-model="dealsValue[item.field]"
                  />
                </ValidationProvider>
              </v-col>
            </v-row>
          </v-container>
        </ValidationObserver>
      </form>
    </template>
    <template #footer>
      <v-btn
        form="popup-form"
        color="primary"
        type="submit"
        :disabled="!isValid"
      >
        Создать
      </v-btn>
    </template>
  </popup>
</template>

<script>
import Popup from "@/components/Popup";
import { extend, ValidationProvider, ValidationObserver } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "{_field_} обязательно для заполнения",
});

export default {
  name: "PopupDeal",
  components: { Popup, ValidationProvider, ValidationObserver },
  props: {},
  data: () => ({
    items: [
      { field: "price", name: "Цена", type: "number" },
      { field: "count", name: "Кол-во", type: "number" },
      { field: "date", name: "Дата", type: "date" },
      { field: "sum", name: "Сумма", type: "number" },
    ],

    assets: [
      "Sberbank",
      "Mvideo",
      "Magnit",
      "Alrosa",
      "MTS",
      "Detsky Mir",
      "Aero flot",
      "Nor Nikel",
    ],
    tickers: ["SBER", "MVID", "MGNT", "ALRS", "DTMR", "NNIK"],
    operations: ["Покупка", "Продажа", "Дивиденды", "Налоги"],

    dealsValue: {
      name: "",
      price: 0,
      count: 0,
      ticker: "",
      operation: "",
      date: new Date().toISOString().substring(0, 10),
      sum: 0,
    },
    isValid: false,
  }),
  computed: {
    sum() {
      return this.dealsValue.price * this.dealsValue.count;
    },
  },
  watch: {
    dealsValue: {
      immediate: true,
      deep: true,
      handler() {
        this.$refs.observer?.validate().then((res) => (this.isValid = res));
      },
    },
  },
  methods: {
    submit() {
      if (this.isValid) {
        this.$emit("create", this.dealsValue);
        this.close();
      }
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
.popup-deal {
}
</style>
