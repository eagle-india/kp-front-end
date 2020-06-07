<template>
  <div class="home">
    <VideoSection />
    <ModelSection />
    <TeamSection />
    <AboutSection />
    <TestDriveFormModal />
    <QueryModal />
    <SideBar />
  </div>
</template>

<script>
// @ is an alias to /src
import VideoSection from "@/components/VideoSection.vue";
import ModelSection from "@/components/ModelSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import TeamSection from "@/components/TeamSection";
import TestDriveFormModal from "@/components/TestDriveFormModal";
import QueryModal from "@/components/QueryFormModal";
import SideBar from "@/components/SideBar";

export default {
  name: "Home",
  components: {
    VideoSection,
    ModelSection,
    AboutSection,
    TeamSection,
    TestDriveFormModal,
    QueryModal,
    SideBar,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  // overflow: hidden;
}
</style>
