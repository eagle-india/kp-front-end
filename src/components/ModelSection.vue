<template>
  <section class="section-container" id='model-section'>
    <h1>Model Secction</h1>
    <a href="#video-section" v-smooth-scroll>See Video</a>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ModelSection extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#model-section {
  display: grid;
  place-items: center
}
</style>
