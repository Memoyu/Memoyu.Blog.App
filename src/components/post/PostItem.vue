<template>
  <v-card
    class="me-post"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
    max-width="700"
    light
    :elevation="elevation"
  >
    <v-card-title @click="view(url)">
      <a class="headline font-weight-bold">{{title}}</a>
    </v-card-title>
    <v-card-text class="title font-weight-regular text-md-body-1">
      {{brief}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="@/assets/images/index/avatar.jpg"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Memoyu</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">mdi-clock</v-icon>
          <span class="subheading mr-2">{{creationTime}}</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    title: String,
    brief: String,
    url: String,
    year: Number,
    creationTime: String
  },
  data () {
    return {
      elevation: 0
    }
  },
  methods: {
    view (url) {
      this.$router.push({ path: `/post${url}` })
    },
    onMouseOver () {
      this.elevation = 3
    },
    onMouseLeave () {
      this.elevation = 0
    }
  }
}
</script>

<style scoped>
.me-post {
  /*padding: 10px 18px;*/
  margin: 20px;
  min-width: 700;
}

.me-article-title {
  font-weight: 600;
}

.me-article-icon {
  padding: 3px 8px;
}

.me-article-count {
  color: #a6a6a6;
  padding-left: 14px;
  font-size: 13px;
}

.me-pull-right {
  float: right;
}

.me-artile-description {
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 10px;
}

.me-article-author {
  color: #a6a6a6;
  padding-right: 18px;
  font-size: 13px;
}

.el-tag {
  margin-left: 6px;
}
</style>
