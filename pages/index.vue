<template>
  <NuxtLoadingIndicator
      color="red"
      :height="500"
      :duration="5000"
  />
  <IntroductionHeader/>
  <DetailsSection/>
</template>

<script setup lang="ts">
import IntroductionHeader from "~/src/components/ui/IntroductionHeader.vue";
import DetailsSection from "~/src/components/ui/DetailsSection.vue";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Home` : 'Home';
  }
})

const components = {
  DetailsSection,
  IntroductionHeader
};
</script>


<style scoped>

</style>
