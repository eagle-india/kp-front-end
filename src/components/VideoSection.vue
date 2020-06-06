<template>
  <section class="section-container" id="video-section">
    <a href="#model-section" v-smooth-scroll>See Models</a>
    <div class="overlay">
      <video src="../assets/video/cars.mp4" loop="true" autoplay></video>
    </div>
    <div class="color-overlay"></div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class VideoSection extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#video-section {
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;

    video {
      min-width: 100vw;
      min-height: 100vh;
    }
  }
  .color-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(13, 71, 161, 0.7);
    z-index: -1;
  }
}
</style>
