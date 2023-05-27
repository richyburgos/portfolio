<template>
  <div class="card px-0">
    <div class="card-header experience-card-bgd pt-3">
      <div class="d-flex justify-content-center">
        <font-awesome-icon
            v-for="(icon, index) in icons"
            :key="index"
            size="2xl"
            fixed-width
            :icon="icon.icon"
            :style="{'color': icon.color, 'font-size': '50px'}"
            class="item-icon"
        />
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title text-center">{{ title }}</h5>
      <p class="card-text">{{ content }}</p>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "MyDetailItems",
  props: {
    icons: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  components: {
    FontAwesomeIcon
  }
};
</script>

<style scoped>
.experience-card-bgd{
  background-color: #313131;
}
.item-icon {
  font-size: 1.875rem;
  margin-bottom: 0.75rem;
}

.item-icon + .item-icon {
  margin-left: 10px;
}

.item-icon {
  font-size: 1.875rem;
  color: #54b689;
}
</style>
