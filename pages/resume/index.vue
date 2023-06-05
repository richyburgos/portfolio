<template>
  <div
      id="resume"
      class="container">
    <div class="row">
      <LeftPanel />
      <RightPanel />
    </div>
  </div>

</template>

<script setup lang="ts">
import { exportToPDF } from '#imports';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import LeftPanel from "~/src/components/resume/LeftPanel.vue";
import RightPanel from "~/src/components/resume/RightPanel.vue";

const saveToPDF = (fileName) => {
  const element = document.getElementById('resume');
  console.log('ELEMENT', element);
  exportToPDF(fileName, element, {
    orientation: 'p',
    precision: 16,
    unit: 'px',
    format: [816, 1056],
  });
};

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - My Resumé` : 'My Resumé';
  }
})

const components = { RightPanel, LeftPanel, FontAwesomeIcon };
</script>

<style scoped>
p, li {
  font-size: 14px;
}

.container {
  width: 816px;
  /*max-width: 816px;*/
  /*max-width: 816px;*/
  /*height: 1052px;*/
  margin: 0 auto;
}
</style>
