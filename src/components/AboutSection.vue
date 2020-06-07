<template>
  <section class="section-container" id="footer-section">
    <b-card no-body class="overflow-hidden" style="max-width: 740px;">
      <b-row no-gutters>
        <b-col md="6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3760194502!2d77.61039961413441!3d12.88352582029226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ad4539b7409%3A0x3a1ba61c6e0a0c44!2sKPI%20Consulting%20Sevices%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1584366838738!5m2!1sen!2sin"
            frameborder="0"
            style="border:0;width:100%;height:100%"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            class="img-fuid"
          ></iframe>
        </b-col>
        <b-col md="6">
          <b-card-body title="Contact Details">
            <b-card-text>
              <div class="text-center text-capitalize" style="font-size: 20px;">
                <p style="font-weight: 700" class="text-left">abcsddd</p>
                <p class="text-left">
                  6th cross , royal residency layout,<br />
                  nyanappana halli, bengaluru,<br />
                  karnataka 560076
                </p>
                <p class="text-left">phone no - 11122455</p>
              </div>
              <p class="text-center mt-5">
                Have more questions?<br />
                Please contact us at
                <a href="mailto:info@consultkpi.com"> info@consultkpi.com</a>
              </p>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class AboutSection extends Vue {}
</script>

<style lang="scss" scoped>
#footer-section {
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
