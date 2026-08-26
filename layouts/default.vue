<template>
  <main>
    <LayoutLayersPortfolioSideBar />
    <div class="main-wrapper">
      <div class="p-3">
        <slot />
      </div>
      <LayoutLayersPortfolioFooter />
    </div>
  </main>
</template>

<script>
export default {
}
</script>
