<template>
<div style="margin-top: 40px">
    <SideMenu id="side-menu"/>
    <div class="footPrint">
        <Map/>
    </div>
</div>

</template>

<script>
  import Map from "components/common/Map"
  import SideMenu from "./SideMenu"
    export default {
        name: "Footprint",
      components:{
        Map,
          SideMenu
      }
    }
</script>

<style scoped>
    .footPrint {
        width: 100%;
        margin-left:30%;;
        margin-right: auto;
        margin-top: -20px;
        margin-bottom: 50px;
    }
    #side-menu {
        position: fixed;
        left: 10%;
        top: 100px;
    }
</style>
