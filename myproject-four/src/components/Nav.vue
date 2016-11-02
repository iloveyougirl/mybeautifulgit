<template>
    <div id="main">
        <nav v-bind:class="active" v-on:click.prevent>
            <a href="#" class="home" v-link="{path: '/index'}">Hello</a>
            <a href="#" class="home" v-link="{path: '/comp'}">Hello2</a>
        </nav>
    </div>
</template>

<script>
import Vue from 'vue'


export default {
    data () {
      return {}
     }
}
</script>

<style>
#main{
    width:10%;
    background:rgba(0,0,0,.8);
    height:974px;
    float:left;
    position:fixed;
}
#main nav a{
    display:block;
    text-decoration: none;
    color: #fff;
    padding:20px 0px;
    text-align:center;
    font-size:20px;
 }
#main nav a:hover{
    color: rgba(200,200,200,.6);
    font-weight: bold;
}
</style>