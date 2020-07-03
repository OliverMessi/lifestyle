<template>
    <el-card class="card-carousel">
        <el-carousel interval="2000" arrow="hover">
            <el-carousel-item v-for="(item,index) in items" :key="index">
                <img :src="item.img" class="carousel_img" alt="">
            </el-carousel-item>
        </el-carousel>

    </el-card>
</template>

<script>
    export default {
        name: "Carousel",
        data: function () {
            return {
                items: [{
                    id: 1,
                    img: require('assets/img/carousel/vue.png'),
                    link: 'http://how2j.cn?p=50613'},
                    {id: 2,
                     img: require('assets/img/carousel/element.png'),
                        link: 'https://cn.vuejs.org/'
                    },
                    {
                        id: 3,
                        img: require('assets/img/carousel/how2j.png'),
                        link: 'http://element-cn.eleme.io/#/zh-CN'
                    }]
            }
        }
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .card-carousel {
        /*margin: 0 auto;*/
        margin-left: 20px;
        width: 680px;
        height: 320px;
    }
    .push {
        /*margin-left: -15px;*/
    }
    /*.el-carousel__item:nth-child(2n) {*/
        /*background: black;*/
    /*}*/
    /*.el-carousel__item:nth-child(2n+1) {*/
        /*background: black;*/
    /*}*/
    .carousel_img {
        height: 100%;
        width: 100%;
        text-align: center;
    }
</style>