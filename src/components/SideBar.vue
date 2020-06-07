<template>
  <div>
    <b-button class="sidebar-btn" variant="warning" pill v-b-toggle.sidebar-1>
      <b-icon icon="filter-left" />
    </b-button>
    <b-sidebar id="sidebar-1" title="Menu Items" shadow>
      <div class="px-3 py-2">
        <b-list-group flush>
          <a href="#video-section" v-smooth-scroll
            ><b-list-group-item>Home</b-list-group-item></a
          >
          <a href="#model-section" v-smooth-scroll
            ><b-list-group-item>Models</b-list-group-item></a
          >
          <a href="#" @click="$bvModal.show('test-drive-modal')"
            ><b-list-group-item>Book Your Test Drive</b-list-group-item></a
          >
          <a href="#team-section" v-smooth-scroll
            ><b-list-group-item>Our Team</b-list-group-item>
          </a>
          <a href="#footer-section" v-smooth-scroll
            ><b-list-group-item>About Us</b-list-group-item>
          </a>
          <a href="#" @click="$bvModal.show('query-modal')"
            ><b-list-group-item>Ask use your query?</b-list-group-item></a
          >
        </b-list-group>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Sidebar extends Vue {}
</script>

<style lang="scss" scoped>
.sidebar-btn {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 5;
  border-radius: 50%;
  font-size: 1.2rem;
}
</style>
