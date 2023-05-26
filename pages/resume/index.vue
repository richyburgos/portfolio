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

<script>
import {exportToPDF} from '#imports'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import LeftPanel from "~/src/components/resume/LeftPanel.vue";
import RightPanel from "~/src/components/resume/RightPanel.vue";

export default {
  components: {RightPanel, LeftPanel, FontAwesomeIcon},
  methods: {
    saveToPDF(fileName) {
      const element = document.getElementById('resume');
      console.log('ELEMENT', element)
      // exportToPDF('FileName', 'Element', 'documentOptions', 'Options')
      exportToPDF(fileName, element, {
        orientation: 'p',
        precision: 16,
        unit: 'px',
        // format: 'letter',
        format: [816, 1056],
        // format: [1000, 1056],
        // format: [8.5, 11],
        // putOnlyUsedFonts: true,
        // floatPrecision: 'smart' // or "smart", default is 16
      })
    }
  }
}

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
