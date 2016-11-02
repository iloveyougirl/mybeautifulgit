<template>
  <div class='search-content'>
    <input type="text"  placeholder="请输入正确的手机号"  id="land-username" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')" onafterpaste="this.value=this.value.replace(/[^0-9]/g,'')"

    >
    <a href="javascript:;" alt=""><div class="view-instructions">查看说明书</div></a>
    <p class="btm-info">手机号仅用于查看说明书</p>
  </div>
      <div id="errcontent">111<div>
</template>

<script>
  export default {
   data () {
    return {

    }
  }
}

 // $(document).ready(function(){
    //$("#land-username").on("keyup",function(){
    //  var myreg = /^1([23578])\d{9}$/;
    //  var inpVal=$("#land-username").val();
    //  if(!myreg.exec(inpVal)){
    //  $("#errcontent").text("请输入正确的手机号")
    //  return false
   //   }
    //  else{
     //  $("#errcontent").text("ok")
    //   return false
    //  }
   // })
 // })
window.onload = function(){
  var inpEle = document.getElementById('land-username');
  var errcontent= document.getElementById('errcontent');
 // var myreg = /^1[3458]\d{9}$/;
  var myreg = /^1[3|4|5|7|8][0-9]\d{8}$/;
  inpEle.onblur = function(){
    var inpVal = this.value;
    if (!myreg.exec(inpVal)){
      errcontent.innerHTML='*请输入正确的手机号'
    }
    else{
      errcontent.innerHTML='手机号正确'
    }
  }
}
</script>

<style>
  #errcontent{
    position:relative;
    left: 50%;
    margin-left: -150px;
    margin-top:-90px;
    color:red;
    font-family:"Microsoft YaHei";
    width:300px;
  }
  .search-content{
    width:300px;
    margin:0 auto;
    overflow:hidden;
  }
  .search-content a{
    text-decoration:none;
  }
  #land-username{
    position: relative;
    left: 50%;
    margin-left: -150px;
    width: 300px;
    height: 35px;
    font-size: 20px;
    text-indent: 10px;
    border: 1px solid #999;
    box-sizing: border-box;
  }
  .view-instructions{
        width:300px;
        height:35px;
        font-size:15px;
        text-align:center;
        color:white;
        line-height:35px;
        background-color:#D2691E;
        margin:25px auto 10px;
        cursor:pointer;
        font-family:"Microsoft YaHei";
  }
  .btm-info{
    font-family:"Microsoft YaHei";
  }
</style>
