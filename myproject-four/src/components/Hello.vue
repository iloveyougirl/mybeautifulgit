<template id="grid-template">
  <!--<table v-if="ifShow">-->
      <table>
        <thead>
        <tr>
          <th>公众号头像</th>
          <th>类型</th>
          <th>名称</th>
          <th>appid</th>
          <th>授权</th>
          <th>开通</th>
          <th>门店</th>
          <th>设备</th>
          <th>缓存</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in  gridData">
          <td><img :src="item.head_img" width="100"></td>
          <td class="public-types">{{item.sid}}</td>
          <td v-text="item.nick_name" class="public-name"></td>
          <td v-text="item.appid" class="public-appid"></td>
          <td v-text="item.service_type_info" class="public-rights"><a href="javascript:;"></a></td>
          <td class="public-pass"><a href="javascript:;">开通</a></td>
          <td  class="public-shop"><a href="javascript:;">门店</a></td>
          <td>
            <ul>
              <li><a href="javascript:;">查看</a></li>
              <li><a href="javascript:;" class="public-color">添加</a></li>
              <li class="import"><a href="javascript:;">导入</a></li>
            </ul>
          </td>
          <td  class="public-clear"><a href="javascript:;">清理</a></td>
        </tr>
        </tbody>
      </table>
</template>

<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'

    Vue.use(VueResource)

    export default{
        data () {
         return{

            gridData: [],
            apiUrl: 'http://device.youfen8.com/api/accountwechats'
            }
        },
        ready: function() {
            this.getCustomers()
        },
        methods: {
            getCustomers: function() {
                this.$http.get(this.apiUrl)
                        .then((response) => {
                    this.$set('gridData', response.data.data)
            })
                .catch(function(response) {
                    console.log(response)
                })
            }
        }
    }
</script>
<!--<script>-->
<!--var vm=new Vue({-->
<!--data: {-->
<!--ifShow: true-->
<!--},-->
<!--makeActive: function () {-->
<!--if(this.ifShow==true){-->
<!--this.ifShow=false;-->
<!--}-->
<!--else{-->
<!--this.willShow=true-->
<!--}-->
<!--}-->
<!--})-->
<!--</script>-->


<style>
*  {
    margin:0;
    padding:0;
}
body {
    font-family: Helvetica, sans-serif;
}
table {
    border-collapse: collapse;
    border: none;
    margin-left:300px;
    float:left;
}
tbody td ,thead th {
    border: 1px solid #E0E0E0;
}
thead th {
    text-align: left;
    text-indent: 2px;
    padding: 8px ;
    font-family:"Microsoft YaHei";
    margin: 14px 25px;
    background-color:#F3F3FA;
}
tbody td img {
    margin: 8px 100px 8px 8px;
}
.public-types {
    width: 80px;
    text-indent: 10px;
}
.public-name {
    width: 150px;
    text-indent: 10px;
    font-size: 20px;
}
.public-appid {
    width: 180px;
    text-indent: 10px;
}
.public-rights {
    width: 120px;
    text-indent: 10px;
}
.public-pass {
    width: 150px;
    text-indent: 10px;
}
.public-shop {
    width: 120px;
    text-indent: 10px;
}
td ul {
    width: 180px;
    text-indent: 10px;
}
td ul li {
    list-style: none;
    float: left;
    border-right: 1px solid #FF77FF;
}
td ul li a {
    padding-right: 7px;
}
.public-clear {
    width: 70px;
    text-indent: 10px;
}
tbody a {
    color: #FF77FF;
}
.import {
    border:none;
}
</style>
