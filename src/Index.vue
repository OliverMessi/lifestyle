<template>
<div>
    <nav-menu/>
    <router-view/>
</div>
</template>

<script>
    import NavMenu from "components/common/NavMenu"
    export default {
        name: "Index",
        data(){
            return {
            }
        },
        components: {
            NavMenu
        },
        mounted () {
            window.addEventListener('scroll', this.scrollTop);
        },
        methods:{
        scrollTop(){
            // let scrollTop = document.documentElement.scrollTop; //滚动条的高
            // let documentTop = document.body.scrollHeight;       //全部内容的高
            // let screenHeight = window.screen.availHeight;       //当前屏幕的高
            // var nav = document.getElementById("navMenu");
            // if (scrollTop + screenHeight >= documentTop) {
            //     this.isNavMenu=false;
            //     this.isNavMenuActive=true
            // }else {
            //         // 小于的时候让他恢复原状
            //     this.isNavMenu=true;
            //     this.isNavMenuActive=false;
            //     }
        }
    }
    }


</script>

<style scoped>



</style>