<template>
  <div class="education-item mt-3">
    <div class="d-flex justify-content-between align-items-center">
      <h6 class="text-start">{{ school }} <small class="fw-normal">- {{ course }}</small></h6>
      <span class="gray-clr text-end">{{ duration }}</span>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <span class="gray-clr"><i>{{ status }}</i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationItem",
  props: {
    school: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    course: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
/*.education-item:not(:last-child)::after {*/
.education-item + .education-item::before {
  content: "";
  display: block;
  width: 13em;
  max-width: 70%;
  border-bottom: 0.1em solid rgba(13, 13, 13, 0.16);
  margin: 0.5em auto 1em;
}

p, li {
  font-size: 14px;
}

.gray-clr {
  color: #A9A9A9;
}
</style>

