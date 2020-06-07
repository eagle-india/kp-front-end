<template>
  <section class="section-container" id="model-section">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="100%"
      img-height="100%"
      background="#333"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide class="slider">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            src="../assets/images/001.gif"
            alt="image slot"
          />
          <div class="caption-text">
            <h2>Model A</h2>
            <div class="subtitle">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              praesentium!
            </div>
          </div>
        </template>
      </b-carousel-slide>

      <b-carousel-slide class="slider">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            src="../assets/images/002.gif"
            alt="image slot"
          />
          <div class="caption-text">
            <h2>Model B</h2>
            <div class="subtitle">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              praesentium!
            </div>
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide class="slider">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            src="../assets/images/003.gif"
            alt="image slot"
          />
          <div class="caption-text">
            <h2>Model C</h2>
            <div class="subtitle">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              praesentium!
            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ModelSection extends Vue {
  slide = 0;
  sliding = false;

  onSlideStart(slide: any) {
    this.sliding = true;
  }

  onSlideEnd(slide: any) {
    this.sliding = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#model-section {
  display: grid;
  place-items: center;

  #carousel-1 {
    width: 100%;
    height: 100%;
    position: relative;

    #carousel-1___BV_inner_ {
      border: 5px solid black;
      height: 100vh !important;

      .slider {
        width: 100%;
        height: 100vh;

        .caption-text {
          position: absolute;
          bottom: 40px;
          color: #dddddd;
          text-align: center;
          width: 100%;
        }

        img {
          position: relative;
          left: 50%;
          top: 45%;
          transform: translate(-50%, -50%);
          // min-width: 100%;
          // min-height: 100%;
        }
      }
    }
  }
}
</style>
