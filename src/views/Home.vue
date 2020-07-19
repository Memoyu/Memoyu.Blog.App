<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <base-header :activeIndex="activeIndex"></base-header>
      <router-view class="me-container" />
      <base-footer></base-footer>
    </v-container>
  </v-main>
</template>

<script>
import BaseFooter from '@/components/common/BaseFooter'
import BaseHeader from '@/components/common/BaseHeader'

export default {
  name: 'Home',
  created() {
  },
  data() {
    return {
      activeIndex: '/',
      footerShow: true
    }
  },
  components: {
    'base-header': BaseHeader,
    'base-footer': BaseFooter
  },
  methods: {
  }
}
</script>

<style></style>
