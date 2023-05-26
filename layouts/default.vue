<template>
<!--  <PortfolioHeader/>-->
  <PsuedoHeader/>
  <div class="main-wrapper">
    <slot/>
    <PortfolioFooter/>
  </div>
</template>

<script>
import PortfolioHeader from "~/src/components/layout-layers/PortfolioHeader.vue";
import PortfolioFooter from "~/src/components/layout-layers/PortfolioFooter.vue";
import PsuedoHeader from "~/src/components/layout-layers/PsuedoHeader.vue";

export default {
  components: {PsuedoHeader, PortfolioFooter, PortfolioHeader}
}
</script>
