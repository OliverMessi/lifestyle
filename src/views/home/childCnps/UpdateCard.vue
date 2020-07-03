<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="font-weight: bold;font-size: 20px">最近更新</span>
      <!--<el-button style="float: right; padding: 3px 0" type="text">修改</el-button>-->
    </div>
    <div class="block">
      <el-timeline>
        <el-timeline-item v-for="(item,index) in updateRecords" :key="index" :timestamp=item.timeStamp placement="top">
          <el-card>
            <h4>{{item.content}}</h4>
            <p>{{item.commitPersion}}提交于:{{item.createTime}}</p>
          </el-card>
        </el-timeline-item>

      </el-timeline>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: 'UpdateCard',
    props:{
        updateRecords:{
              type:Array,
              default(){
                  return []
              }
          }
      },
  }
</script>

<style scoped>
  .box-card {
    margin-top: 5px;
    width: 988px;
    height: 1050px;
    text-align: left;
  }
</style>
