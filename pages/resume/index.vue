<template>
  <div id="resume"
       class="container"
  >
    <div class="row">
      <ResumeLeftPanel />
      <ResumeRightPanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import { exportToPDF } from '#imports';

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
