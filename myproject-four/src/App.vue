<template>
    <navbar></navbar>
    <router-view></router-view>
</template>

<script>
import Navbar from './components/Nav'

//import Vue from 'vue'

//import VueRouter from 'vue-router'
//Vue.use(VueRouter)

export default {
   components: {
   Navbar
  },
   data () {
    return {
    }
  }
}
</script>

<style>
</style>
