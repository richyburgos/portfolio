<template>
  <div class="container">
    <NuxtLoadingIndicator color="red"
                          :height="500"
                          :duration="5000"
    />
    <UiIntroductionHeader />
    <UiDetailsSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Home` : 'Home';
  }
})
</script>

<style scoped>

</style>
