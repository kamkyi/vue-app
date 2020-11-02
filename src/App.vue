<template>
  <div id="app">
    <center>
        <Nav/>
    <router-view/>
    </center>
  </div>
</template>
<script>
import Nav from './components/Nav';

export default {
  name:'App',
  components:{
     Nav
  }
}
</script>>

<style lang="scss">
ul li{
  list-style-type: none;
}
</style>
