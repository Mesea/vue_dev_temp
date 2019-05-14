<template>
  <div id="map">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" v-wechat-title="$route.meta.title" img-set="/static/logo.png"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title" img-set="/static/logo.png"></router-view>
  </div>
</template>
<script>
export default {}
</script>
