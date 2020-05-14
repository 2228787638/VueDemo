<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '../../components/Header'
export default {
  name: 'User',
  components: {Header}
}
</script>

<style scoped>

</style>
