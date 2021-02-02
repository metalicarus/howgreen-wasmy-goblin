<template>
  <v-app align="center">
    <v-main>
      <auth-notification />
      <v-container>
        <v-card outlined max-width="800px"  >
          <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="7">
                    <v-row>
                      <v-card
                        dark
                      >
                        <template slot="progress">
                          <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                          ></v-progress-linear>
                        </template>
                        <v-img src="@/assets/img_1.png"/>
                        <v-card-text>
                          <div class="text-center title white--text">
                            Verde Meu Duende
                          </div>
                          <v-divider class="mx-4"></v-divider>
                          <div class="text-center">Cadastro e gestão de colecionaveis.</div>
                          <div class="text-sm-caption">V1.0</div>
                        </v-card-text>
                      </v-card>
                    </v-row>
                  </v-col>
                  <v-col cols="12" sm="12" md="5" class="pa-9">
                    <v-form>
                      <v-row>
                        <v-col cols="12">
                          <p class="title text-left">Acesse sua conta</p>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col
                          cols="12"
                          md="12"
                        >
                          <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            outlined
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          md="12"
                        >
                          <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            type="password"
                            label="Senha"
                            required
                            outlined
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-btn dark block @click="login">LOGIN</v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-col>
                </v-row>
              </v-container>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import { STORE_CORE_AUTH_MODULE } from '@/store/StoreNamesEnum';
import { AUTH_LOGIN } from '@/store/modules/ActionNamesEnum';
import AuthNotification from '@/components/basicTemplate/Notifications/AuthNotification.vue';

export default {
  name: 'Login',
  components: { AuthNotification },
  data() {
    return {
      namespace: STORE_CORE_AUTH_MODULE,
      division: 'auth',
      actionName: AUTH_LOGIN,
      valid: false,
      password: '',
      passwordRules: [
        (v) => !!v || 'O campo senha é necessário',
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'O campo E-mail é necessário',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  methods: {
    login() {
      this.$store.dispatch(`${this.namespace}/${this.division}/${this.actionName}`, { username: this.email, password: this.password });
    },
  },

};
</script>

<style scoped>

</style>
