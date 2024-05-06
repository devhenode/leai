<script>
import { ref } from 'vue'

import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import HeroPage from './components/HeroPage.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Sidebar,
    HeroPage
  }
}
</script>

<template>
 
 <router-view/>

</template>

<style>

</style>
