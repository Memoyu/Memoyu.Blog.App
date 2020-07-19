<template>
  <v-container class="v-container">
    <div class="intro">
      <div class="avatar">
        <a href="javascript:;"><img src="@/assets/images/index/avatar.jpg"/></a>
      </div>
      <div class="nickname">Memoyu</div>
      <div class="font-weight-medium">
        <p>
          知行合一
          <br />Knowledge as action
        </p>
      </div>
      <div class="links">
        <v-btn icon color="black" large title="GitHub">
          <v-icon large>mdi-github</v-icon>
        </v-btn>
        <v-btn
          icon
          color="black"
          large
          @mouseover="onMouseOver"
          @mouseleave="onMouseLeave"
          title="WeChat"
        >
          <v-icon large>mdi-wechat</v-icon>
        </v-btn>
      </div>
      <div class="qrcode">
        <img v-show="isHiddenQr" src="@/assets/images/index/wx_qrcode.png" />
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Index',
  created() {
    this.showSnackbar('欢迎来到Memoyu的博客')
  },
  data() {
    return {
      isHiddenQr: false
    }
  },
  methods: {
    ...mapMutations(['showSnackbar']),
    onMouseOver() {
      this.isHiddenQr = true
    },
    onMouseLeave() {
      this.isHiddenQr = false
    }
  }
}
</script>

<style scoped>
.v-container {
  text-align: center;
}
.intro .avatar {
  padding: 10px;
}

.intro .avatar img {
  display: inline-block;
  margin: 0 auto;
  width: 128px;
  height: auto;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  -webkit-box-shadow: 0 0 0 0.3618em rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 0 0.3618em rgba(0, 0, 0, 0.05);
  cursor: pointer;
  -webkit-transition: all ease 0.4s;
  -moz-transition: all ease 0.4s;
  -o-transition: all ease 0.4s;
  transition: all ease 0.4s;
}

.intro .avatar img:hover {
  position: relative;
  cursor: pointer;
  -webkit-transform: translateY(-0.75em);
  -moz-transform: translateY(-0.75em);
  -o-transform: translateY(-0.75em);
  transform: translateY(-0.75em);
  -ms-transform: translateY(-0.75em);
}
.nickname {
  font-weight: normal;
  font-size: 2em;
}
.qrcode {
  z-index: 99999;
  margin: 20px auto 0;
  width: 120px;
  min-height: 130px;
  opacity: 0.8;
}
.qrcode img {
  width: 100%;
}
</style>
