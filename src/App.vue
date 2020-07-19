<template>
 <v-app id="inspire">
   <router-view />
    <v-snackbar v-model="globalSnackbar.show" :timeout="4000">
      {{globalSnackbar.message}}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="globalSnackbar.show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
 </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {},
  computed: {
    ...mapState(['globalSnackbar'])
  }
}
</script>

<style>
</style>
