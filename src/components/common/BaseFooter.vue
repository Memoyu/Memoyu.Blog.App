<template>
  <v-footer color="white" app class="font-weight-medium" padless>
    <v-row justify="center" no-gutters>
      <v-col class="lighten-2 py-1 text-center black--text" cols="12">
        <span>
          Powered by
          <a target="_blank" href="http://dot.net">.NET Core 3.1</a> and
          <a target="_blank" href="https://vuetifyjs.com/zh-Hans">Vuetify</a> on Linux
        </span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'BaseFooter',
  data () {
    return {}
  },
  methods: {},
  mounted () {}
}
</script>

<style scoped>
.copyright {
  min-width: 100%;
  text-align: center;
}
</style>
