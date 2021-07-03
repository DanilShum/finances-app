<template>
  <auth-wrapper>
    <template #default="error">
      <div class="login">
        <ValidationObserver ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="submit">
            <ValidationProvider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
                v-model="email"
                :error-messages="error.email || errors"
                label="E-mail"
                required
              />
            </ValidationProvider>
            <ValidationProvider
              rules="required|minmax:6,24"
              v-slot="{ errors }"
              name="password"
            >
              <v-text-field
                v-model="password"
                :error-messages="error.password || errors"
                label="Password"
                :counter="24"
                type="password"
                required
              />
            </ValidationProvider>

            <v-btn class="mr-4" type="submit" :disabled="invalid">
              submit
            </v-btn>
            <v-btn class="mr-4" @click="clear"> clear </v-btn>
            <v-btn to="/registration"> registration </v-btn>
          </form>
        </ValidationObserver>
      </div>
    </template>
  </auth-wrapper>
</template>

<script>
import { required, email } from "vee-validate/dist/rules";
import {
  extend,
  setInteractionMode,
  ValidationProvider,
  ValidationObserver,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} обязательно для заполнения",
});

extend("minmax", {
  params: ["min", "max"],

  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  message: "Пароль должен быть больше {min} но меньше {max}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

import AuthWrapper from "@/routs/auth/AuthWrapper";
import { mapActions } from "vuex";
export default {
  name: "Login",
  components: { AuthWrapper, ValidationProvider, ValidationObserver },
  props: {},
  data: () => ({
    email: "",
    password: "",
    checkbox: null,
  }),
  computed: {},
  methods: {
    ...mapActions("auth", ["logIn"]),
    async submit() {
      this.$refs.observer.validate();

      const payload = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.logIn(payload);
        this.$router.push({ path: "main" });
      } catch (e) {
        console.log(e);
      }
    },
    clear() {
      this.email = "";
      this.password = "";
      this.checkbox = null;

      this.$refs.observer.reset();
    },
  },
};
</script>

<style lang="scss">
.login {
  width: 450px;
  padding: 40px;
  border-radius: 8px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 5px 20px rgba(black, 0.5);
}
</style>
