<template>
  <div >
    <side-menu id="side-menu"></side-menu>
    <div class="home">
      <div id="header-div">
        <div style="height: 150px"></div>
        <carousel></carousel>
        <quick-nav style="float: left;margin-top: -450px;margin-right: 480px"></quick-nav>
      </div>
      <update-card id="update-card" :updateRecords="updateRecords"></update-card>
      <slogan id="slogan"></slogan>

    </div>
  </div>
</template>

<script>
    import Slogan from './childCnps/Slogan'

  import UpdateCard from './childCnps/UpdateCard';
  import Carousel from './childCnps/Carousel'
  import SideMenu from './childCnps/SideMenu';
  import QuickNav from './childCnps/QuickNav';

  import {getUpdateRecords} from "network/home"
  export default {
    name: "Home",
    components:{
        SideMenu,
        Carousel,
        QuickNav,
        UpdateCard,
        Slogan
    },
    data(){
      return{
        updateRecords:[]
      }
    },
    created(){
          this.getUpdateRecords();
    },
    methods:{
        getUpdateRecords(){
            getUpdateRecords().then(res=>{
              this.updateRecords=res;

            })

        }
    }

  }
</script>

<style scoped>
  .home {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -20px;
    margin-bottom: 50px;
  }
  #header-div {
    padding-bottom: 20px;
    padding-left: 5px;
    background-color: white;
  }
  #side-menu {
    position: fixed;
    margin-left: 50%;
    left: -680px;
    top: 100px;
  }
</style>