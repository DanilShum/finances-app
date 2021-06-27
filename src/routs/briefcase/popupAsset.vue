<template>
  <popup class="popup-asset" @close="close" title="Добавление нового актива">
    <template #content>
      <form @submit.prevent="submit" id="popup-form">
        <ValidationObserver ref="observer">
          <v-container fluid>
            <v-row align="center">
              <v-col v-for="asset in items" :key="asset.field" cols="4" sm="6">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required"
                  :name="asset.name"
                >
                  <v-text-field
                    :label="asset.name"
                    :type="asset.type"
                    :error-messages="errors"
                    v-model="assetValue[asset.field]"
                  />
                </ValidationProvider>
              </v-col>
            </v-row>
          </v-container>
        </ValidationObserver>
      </form>
    </template>
    <template #footer>
      <v-btn form="popup-form" class="mr-4" type="submit"> Создать </v-btn>
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
  name: "popupAsset",
  components: { Popup, ValidationProvider, ValidationObserver },
  props: {},
  data: () => ({
    items: [
      { field: "name", name: "Название", type: "text" },
      { field: "count", name: "Кол-во", type: "number" },
      { field: "middlePrice", name: "Ср.цена", type: "number" },
      { field: "currentPrice", name: "Тек.цена", type: "number" },
      { field: "cost", name: "Тек.стоимость", type: "number" },
      { field: "profit", name: "Прибыль, %", type: "number" },
      { field: "profitability", name: "Доходность", type: "number" },
      { field: "percent", name: "Доля", type: "number" },
    ],
    assetValue: {
      name: "",
      count: 0,
      middlePrice: 0,
      currentPrice: 0,
      cost: 0,
      profit: 0,
      profitability: 0,
      percent: 0,
    },
  }),
  computed: {},
  methods: {
    submit() {
      this.$emit("create", this.assetValue);
      this.close();
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
.popup-asset {
}
</style>
