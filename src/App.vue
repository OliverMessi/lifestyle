<template>
  <div id="app">
      <router-view/>
      <About/>
  </div>
</template>

<script>
    import About from 'components/common/About'
export default {
     name: 'App',
        components: {
            About
        }
}
</script>

<style>
    @import "./assets/css/base.css";
</style>
