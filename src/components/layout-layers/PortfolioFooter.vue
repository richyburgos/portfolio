<template>
  <footer class="footer text-center py-2 theme-bg-dark">
    <small class="copyright">
      Created using Vue 3, Nuxt 3 and Bootstrap 5 by Richard Burgos
      <i>
        <a href="https://github.com/richyburgos/portfolio">
          <font-awesome-icon
              :icon="['fab', 'github']"
              size="xl"
              fixed-width
          />
          See the project on Github
        </a>
      </i>
    </small>
  </footer>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  components: {FontAwesomeIcon}
}
</script>

<style scoped>

</style>
