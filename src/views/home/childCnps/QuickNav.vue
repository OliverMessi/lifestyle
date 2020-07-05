<template>
    <div class="quick-nav">
        <img src="~assets/img/icon/renwu.png" alt="" class="monster" >
        <img src="~assets/img/icon/ride2.jpg" alt="" class="ride">

      <a href="https://github.com/OliverMessi/lifestyle" target="_blank">
        <img src="~assets/img/icon/xk.png" alt="" class="readme">
      </a>
      <img src="~assets/img/icon/icon7.png" alt="" class="spark">
      <img src="~assets/img/icon/xj.png" alt="" class="logo">
    </div>
</template>

<script>
  export default {
    name: 'QuickNav'
  }
</script>

<style scoped>
  .quick-nav {
    width: 303px;
    height: 318px;
    background-color: transparent;
  }
 .ride{
     z-index: 1;
     width: 670px;
     height: 120px;
     position: absolute;
     left:25.5%;
 }
  .monster {
    z-index: 2;
    width: 80px;
    height: 80px;
    position: absolute;
    /*left: 260px;*/
  }

  .readme {
    width: 200px;
    height: 200px;
    position: absolute;
    margin-left: 50%;
    top: 300px;
    left: 230px;
  }

  .spark {
      z-index: 2;
    position: absolute;
    margin-left: 40%;
    top: 100px;
    left: 20px;
  }

  .logo {
      z-index: 2;
    width: 280px;
    position: absolute;
    margin-left: 50%;
    top: 50px;
    left: 210px;
  }

</style>
