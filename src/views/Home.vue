<template>
  <div class="home">
    <VideoSection />
    <ModelSection />
  </div>
</template>

<script>
// @ is an alias to /src
import  VideoSection from '@/components/VideoSection.vue'
import ModelSection from '@/components//ModelSection.vue'

export default {
  name: 'Home',
  components: {
    VideoSection,
    ModelSection
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  // overflow: hidden;
}
</style>
