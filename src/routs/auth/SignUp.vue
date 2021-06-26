<template>
  <auth-wrapper>
    <template #default="error">
      <div class="sign-up">
        <ValidationObserver ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="submit">
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required"
            >
              <v-text-field
                v-model="name"
                :error-messages="errors"
                label="Name"
                required
              />
            </validation-provider>
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
            <ValidationObserver>
              <ValidationProvider
                rules="required|password:@confirm|minmax:6,24"
                v-slot="{ errors }"
                name="password"
              >
                <v-text-field
                  v-model="passwordFirst"
                  :error-messages="errors"
                  label="Password"
                  :counter="24"
                  type="password"
                  required
                />
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors }"
                name="confirm"
                roles="minmax:6,24"
              >
                <v-text-field
                  v-model="passwordSecond"
                  :error-messages="errors"
                  label="Password"
                  :counter="24"
                  type="password"
                  required
                />
              </ValidationProvider>
            </ValidationObserver>

            <v-btn class="mr-4" type="submit" :disabled="invalid">
              submit
            </v-btn>
            <v-btn class="mr-4" @click="clear"> clear </v-btn>
            <v-btn to="/login"> login </v-btn>
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
  message: "{_field_} can not be empty",
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

extend("password", {
  params: ["target"],
  validate(value, { target }) {
    return value === target;
  },
  message: "Password confirmation does not match",
});

import AuthWrapper from "@/routs/auth/AuthWrapper";
import { mapActions } from "vuex";
export default {
  name: "SignUp",
  components: { AuthWrapper, ValidationProvider, ValidationObserver },
  props: {},
  data: () => ({
    name: "",
    email: "",
    passwordFirst: "",
    passwordSecond: "",
  }),
  computed: {},
  methods: {
    ...mapActions("auth", ["signUp"]),
    async submit() {
      this.$refs.observer.validate();

      const payload = {
        email: this.email,
        password: this.passwordFirst,
        name: this.name,
      };

      try {
        await this.signUp(payload);
        this.$router.push({ path: "main" });
        this.resetError();
      } catch (e) {
        console.log(e);
      }
    },
    resetError() {
      this.$store.commit("clearError");
    },
    clear() {
      this.email = "";
      this.password = "";

      this.$refs.observer.reset();
    },
  },
};
</script>

<style lang="scss">
.sign-up {
  width: 400px;
  padding: 40px;
  border-radius: 8px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 5px 20px rgba(black, 0.5);
}
</style>
