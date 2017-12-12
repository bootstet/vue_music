<template>
  <div>
      推荐页
  </div>
</template>
<script>
import axios from 'axios'

export default {
  created () {
    this.getDataList()
  },
  methods: {
    getDataList () {
      axios
        .get(
          '/api'
        )
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
<style scoped lang="scss" lef="stylesheet/scss">

</style>


