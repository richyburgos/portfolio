<template>
  <PortfolioHeader/>
  <div class="main-wrapper">
    <slot/>
    <PortfolioFooter/>
  </div>
</template>

<script>
import PortfolioHeader from "~/src/components/layout-layers/PortfolioHeader.vue";
import PortfolioFooter from "~/src/components/layout-layers/PortfolioFooter.vue";

export default {
  components: { PortfolioFooter, PortfolioHeader}
}
</script>
