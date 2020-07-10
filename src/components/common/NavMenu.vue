<template>
    <div class="navMenu">
        <el-menu router
                 :default-active="'/home'"
                 mode="horizontal"
                 background-color=var(--color-navBar)
                 text-color=var(--color-text)
                 active-text-color=var(--color-high-text)>
            <el-menu-item v-for="(item,index) in navList" :key="index" :index="item.name">
                {{ item.navItem }}
            </el-menu-item>
            <span class="title">碧海蓝天</span>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "NavMenu",
        data() {
            return {
                navList: [
                    {name: '/home', navItem: '首页'},
                    {name: '/footprint', navItem: '足迹'},
                    {name: '/profile', navItem: '个人中心'}
                ]
            };
        },
    }
</script>

<style scoped>
    .title {
        position: absolute;
        padding-top: 20px;
        right: 43%;
        font-size: 20px;
        font-weight: bold;
    }
    .navMenu{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 99;
    }

</style>