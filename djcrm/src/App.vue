<template>
  <div>
    <Navbar />
    <section class="section"></section>
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/layout/Navbar";

import '../node_modules/bulma'
import axios from "axios";
export default {
  name: "App",
  components: {
    Navbar,
  },
  boforeCreate(){
    this.$store.commit('initializeStore')

    if(this.$store.state.token){
      axios.defaults.headers.common['Authorization']="Token "+ this.$store.state.token
    }else{
      axios.defaults.headers.common['Authorization']=""

    }
  }
};
</script>

<style lang="scss"></style>
