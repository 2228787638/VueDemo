<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
// import someComponent from './someComponent'
import Header from '../components/Header'
export default {
  name: '',
  components: {Header},
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>

</style>
