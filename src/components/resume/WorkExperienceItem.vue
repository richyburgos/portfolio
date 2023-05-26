<template>
  <div class="d-flex justify-content-between align-items-center">
    <h6 class="text-start">{{ position }}</h6>
    <span class="date text-end">{{ duration }}</span>
  </div>
  <div class="d-flex justify-content-between align-items-center">
    <span class="company"><i>{{ company }}</i></span>
    <span class="date text-end">{{ companyLocation }}</span>
  </div>
  <p>
    {{ content }}
  </p>
  <template v-if="responsibilities.length">
    <h6>Responsibilities:</h6>
    <ul>
      <li v-for="responsibility in responsibilities">{{ responsibility }}</li>
    </ul>
  </template>
  <template v-if="technologies.length">
    <h6>Technologies Used:</h6>
    <ul>
      <li
          v-for="technology in technologies"
          :key="technology">{{ technology }}
      </li>
    </ul>
  </template>
  <template v-if="projects.length">
    <h6>Projects:</h6>
    <ul class="list-group">
      <li
          class="list-group-item"
          v-for="project in projects"
          :key="project.title">
        {{ project.title }}
        <ul class="list-group" v-if="project.tasks" v-for="task in project.tasks">
          <li class="list-group-item">{{ task }}</li>
        </ul>
      </li>
    </ul>
  </template>
  <hr>
</template>

<script>
export default {
  name: "WorkExperienceItem",
  props: {
    position: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    companyLocation: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    responsibilities: {
      type: Array,
      required: false,
      default: () => ([])
    },
    technologies: {
      type: Array,
      required: false,
      default: () => ([])
    },
    projects: {
      type: Array,
      required: false,
      default: () => ([])
    }
  }
}
</script>

<style scoped>
p, li {
  font-size: 14px;
}

.side-info h5::after {
  content: "";
  display: block;
  width: 6em;
  max-width: 50%;
  border-bottom: 0.1em solid #FFFFFF;
  /*margin: 0.5em auto 0;*/
}

.date {
  color: #A9A9A9;
}

.company {
  color: #A9A9A9;
}
</style>

