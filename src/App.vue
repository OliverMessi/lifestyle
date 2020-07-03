<template>
  <div id="app">
      <nav-menu/>
      <router-view/>
  </div>
</template>

<script>
import NavMenu from "components/common/NavMenu"
export default {
  name: 'App',
  components: {
      NavMenu
  }
}
</script>

<style>
    @import "./assets/css/base.css";
</style>
