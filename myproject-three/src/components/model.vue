<template>
    <div class="wrap-model">
        <ul>
            <li>
                <a href="javascript:;" alt="" v-on:click="message">
                    <img src="http://1.s.pros.weiniudiandian.com/qzzg_bg.png">
                </a>
            <li>
        </ul>
    </div>
    <div id="bombbox" v-if="ifshow">
        <div class='search-content' v-if="ifshow">
            <div class="closepage" v-on:click="closemessage">×</div>
            <input type="text" placeholder="请输入正确的手机号"  id="land-username"
                   onkeyup="this.value=this.value.replace(/[^0-9]/g,'')"
                   onafterpaste="this.value=this.value.replace(/[^0-9]/g,'')"
            />
            <a href="javascript:;" alt="" v-on:click='exam'><div class="view-instructions">查看说明书</div></a>
            <p class="btm-info">手机号仅用于查看说明书</p>
            <div id="errcontent"><div>
        </div>
    <div>
</template>

<script>

import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name=csrf-token]').getAttribute('content');

export default {
    data () {
        return {
          ifshow:false,
          isFirstLogin:true,
          apiUrl:'/api/getphone',
          Url:'/api/getstatus',
          item:{}
        }
    },
    ready: function() {
        this.getCustomers()
    },
    methods:{
    /*第一次申请接口*/
        getCustomers: function() {
          this.$http.get(this.Url).then((response) => {
            // success callback

            if(response.data.code == 200){
                this.isFirstLogin = false
            }
            else if(response.data.code==404){
                this.isFirstLogin = true
            }
          }, (response) => {
          });
        },
        /*第二次申请接口*/
        geturl: function() {
            this.$http.get('/product/1')
                .then((response) => {})
                .catch(function(response) {
                })
            },
        /*传递电话号码*/
        createCustomer: function() {
			var vm = this
			vm.$http.post(vm.apiUrl, vm.item)
				.then((res) => {
				    if(res.data.code == 200){
				        this.targetpage()
				    }else{
				        var inpEle = document.getElementById('land-username');
                        var errcontent= document.getElementById('errcontent');
                            errcontent.innerHTML='数据提交错误,请重试';
                        this.item = {}
				    }
				})
		},
         /*点击判断*/
        message:function() {
            console.log('isFirstLogin:' + this.isFirstLogin)
            if(this.isFirstLogin){
                //需要弹框
                this.ifshow=true
            }else{
                //直接跳转
                this.targetpage()
            }
        },
        /*关闭按钮*/
        closemessage:function () {
            this.ifshow=false
        },
        /*说明书跳转地址*/
        targetpage:function ()  {
            window.location.href='/product/1'
        },
        /*电话号码判断*/
        exam:function () {
            var inpEle = document.getElementById('land-username');
            var errcontent= document.getElementById('errcontent');
                // var myreg = /^1[3458]\d{9}$/;
            var myreg = /^1[3|4|5|7|8][0-9]\d{8}$/;
            var inpVal = inpEle.value;
            if (!myreg.exec(inpVal)) {
                errcontent.innerHTML='*请输入正确的手机号'
            }else{
                errcontent.innerHTML='手机号正确';
                this.item={'phone_number':inpVal}
                this.createCustomer()
            }
        }
    }
}

</script>

<style>
*{
    margin:0;
    padding:0;
}
body{
    background:black;
}
.wrap-model{
    text-align:center;
}
.wrap-model ul li{
    list-style:none;
}
.wrap-model img{
    max-width: 100%;
    margin: 0 auto;
}
#errcontent{
    position: relative;
    left: 25px;
    top: -106px;
    /* margin-left: -125px; */
    /* margin-top: 91px; */
    color: red;
    font-family: "Microsoft YaHei";
    width: 250px;
    font-size: 13px;
}


   /*弹框*/
.search-content{
    position: relative;
    /* top: 200px; */
    top: 50%;
    left: 50%;
    margin-top: -95px;
    margin-left: -150px;
    background-color: white;
    width: 300px;
    height: 190px;
    /* margin: 0 auto; */
    overflow: hidden;
    border-radius: 7px;
    -webkit-animation: zoomIn 0.2s;

}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  animation-name: zoomIn;
}


.search-content a{
    text-decoration:none;
}
#land-username{
    position: relative;
    left: 50%;
    margin: 40px 0 5px -125px;
    width: 250px;
    height: 35px;
    font-size: 20px;
    text-indent: 10px;
    border: 1px solid #DDD;
    box-sizing: border-box;
}
.view-instructions{
    width:250px;
    height:35px;
    font-size:15px;
    text-align:center;
    color:white;
    line-height:35px;
    background-color:#D2691E;
    margin:22px auto 10px;
    cursor:pointer;
    font-family:"Microsoft YaHei";
}
.btm-info{
    font-family:"Microsoft YaHei";
    text-indent: 24px;
    padding-bottom: 20px;
    font-size: 13px;
    color: darkgray;
}
 /*弹框 背景层*/
#bombbox{
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.7);
    height: 100%;
    width: 100%;
    z-index: 10;
}
/*关闭页面*/
.closepage{
    position: absolute;
    right: 6px;
    top: 2px;
    font-size: 25px;
    cursor: pointer;
    overflow: hidden;
    color:darkgray;
}
</style>
