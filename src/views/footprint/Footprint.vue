<template>
<div style="margin-top: 40px">
    <SideMenu id="side-menu"/>
    <Map/>
</div>

</template>

<script>
  import Map from "components/common/Map"
  import SideMenu from "./childCnps/SideMenu"
    export default {
        name: "Footprint",
      components:{
        Map,
          SideMenu
      }
    }
</script>

<style scoped>

    #side-menu {
        position: fixed;
        left: 10%;
        top: 100px;
    }
</style>
