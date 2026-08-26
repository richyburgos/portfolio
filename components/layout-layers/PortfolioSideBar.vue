<template>
  <header class="header text-center">
    <h1 class="blog-name pt-lg-4 mb-0">
      <a class="no-text-decoration"
         href="/"
      >
        Richard's Resume
      </a>
    </h1>
    <nav class="navbar navbar-expand-lg">
      <button class="navbar-toggler text-white border-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-label="Toggle navigation"
              @click="toggleIcon"
      >
        <font-awesome-icon :icon="['fas', 'burger']"
                           :class="{'fa-rotate-90': rotateIcon, 'fa-default-position': !rotateIcon}"
                           size="lg"
                           fixed-width
        />
      </button>
      <div id="navigation"
          class="navbar-collapse flex-column collapse"
      >
        <div class="profile-section pt-3 pt-lg-0">
          <img class="profile-image mb-3 rounded-circle mx-auto"
               src="@/assets/images/self-portrait.jpeg"
               alt="image"
          />
          <div class="bio mb-3">
            My name is Richard Burgos, a full-stack web developer with over {{ yearsOfExperience }} of experience. I come from
            a small country named Belize in Central America. English is my native language and I work in the CST (GMT-6) timezone.
            <br />
            <a href="/about">Find out more about me</a>
          </div>
          <UiCurrentTime />
          <h5 style="color: white">My Socials</h5>
          <ul class="social-list list-inline py-3 mx-auto">
            <li class="list-inline-item"
                @mouseover="onMouseHover('linkedin')"
                @mouseleave="onMouseLeave('linkedin')"
            >
              <a href="https://www.linkedin.com/in/richard-alvaro-burgos-66a813227/"
                 target="_blank"
              >
                <font-awesome-icon :class="linkedInIconClass"
                                   icon="fa-brands fa-linkedin"
                                   size="lg"
                                   fixed-width
                />
              </a>
            </li>
            <li class="list-inline-item"
                @mouseover="onMouseHover('github')"
                @mouseleave="onMouseLeave('github')"
            >
              <a href="https://github.com/richyburgos"
                 target="_blank"
              >
                <font-awesome-icon :class="githubIconClass"
                                   icon="fa-brands fa-github"
                                   size="lg"
                                   fixed-width
                />
              </a>
            </li>
            <li class="list-inline-item"
                @mouseover="onMouseHover('whatsapp')"
                @mouseleave="onMouseLeave('whatsapp')"
            >
              <a href="https://web.whatsapp.com/send/?phone=5016370617&text&type=phone_number&app_absent=0"
                 target="_blank"
              >
                <font-awesome-icon :class="whatsappIconClass"
                                   icon="fa-brands fa-whatsapp"
                                   size="lg"
                                   fixed-width
                />
              </a>
            </li>
          </ul>
          <hr />
        </div>
        <ul class="navbar-nav flex-column text-lg-start text-md-start">
          <li class="nav-item">
            <NuxtLink class="my-nav-link"
                      to="/"
            >
              <font-awesome-icon :icon="['fas', 'home']"
                                 fixed-width
              />
              Home
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="my-nav-link"
                      to="/about"
            >
              <font-awesome-icon :icon="['fas', 'circle-info']"
                                 fixed-width
              />
              About Me
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="my-nav-link"
                      to="/resume"
            >
              <font-awesome-icon :icon="['fas', 'file-lines']"
                                 fixed-width
              />
              Resume
            </NuxtLink>
          </li>
        </ul>
        <div class="my-2 my-md-3">
          <a class="btn btn-primary"
             href="mailto:richyburgos@live.com"
          >
            <p>richyburgos@live.com</p>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: { FontAwesomeIcon },
  data() {
    return {
      linkedInIconClass: 'fa-fade',
      githubIconClass: 'fa-fade',
      whatsappIconClass: 'fa-fade',
      rotateIcon: false
    }
  },
  computed: {
    yearsOfExperience() {
      return useExperience().full;
    }
  },
  methods: {
    toggleIcon() {
      this.rotateIcon = !this.rotateIcon;
    },
    onMouseHover(icon) {
      if ('linkedin' === icon) {
        this.linkedInIconClass = 'fa-bounce'
      }
      if ('github' === icon) {
        this.githubIconClass = 'fa-bounce'
      }
      if ('whatsapp' === icon) {
        this.whatsappIconClass = 'fa-bounce'
      }
    },
    onMouseLeave(icon) {
      if ('linkedin' === icon) {
        this.linkedInIconClass = 'fa-fade'
      }
      if ('github' === icon) {
        this.githubIconClass = 'fa-fade'
      }
      if ('whatsapp' === icon) {
        this.whatsappIconClass = 'fa-fade'
      }
    }
  }
}
</script>

<style scoped>
.fa-rotate-90 {
  transition: transform 0.5s ease-in-out;
}

.fa-default-position {
  transition: transform 0.5s ease-in-out;
  transform: rotate(0deg);
}

.my-nav-link {
  padding: 8px 8px 8px 8px;
  display: block;
  font-weight: var(--bs-nav-link-font-weight);
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out
}

.my-nav-link:hover {
  color: rgba(0, 0, 0, 0.6);
}

.router-link-active {
  color: rgba(0, 0, 0, 0.5);
}
</style>
