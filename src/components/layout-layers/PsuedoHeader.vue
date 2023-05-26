<template>
  <header class="header text-center">
    <h1 class="blog-name pt-lg-4 mb-0">
      <a class="no-text-decoration" href="/">Richard's Resume</a>
    </h1>

    <nav class="navbar navbar-expand-lg">
      <button @click.prevent="toggleHeader" class="navbar-toggler" :class="{collapsed: showHeader}" type="button" data-bs-toggle="collapse" data-bs-target="#navigation"
              aria-controls="navigation" :aria-expanded="showHeader" aria-label="Toggle navigation">
        <font-awesome-icon :icon="['fas', 'burger']" />
      </button>

      <div id="navigation" class="collapse navbar-collapse flex-column" :class="{show: showHeader}">
        <div class="profile-section pt-3 pt-lg-0">
          <img class="profile-image mb-3 rounded-circle mx-auto" src="@/assets/images/self-portrait.jpeg" alt="image">

          <div class="bio mb-3">
            My name is Richard Burgos, a web developer with over {{ yearsOfExperience }} of experience. I come from a small
            country named Belize in Central America whose native language is English and timezone is CST (GMT-6).
            <br>
            <a href="/about">Find out more about me</a>
          </div>
          <CurrentTime />
          <h5 style="color: white">My Socials</h5>
          <ul class="social-list list-inline py-3 mx-auto">
            <li class="list-inline-item" @mouseover="onMouseHover('linkedin')" @mouseleave="onMouseLeave('linkedin')">
              <a href="https://www.linkedin.com/in/richard-alvaro-burgos-66a813227/" target="_blank">
                <font-awesome-icon icon="fa-brands fa-linkedin" :class="linkedInIconClass" size="lg" fixed-width/>
              </a>
            </li>
            <li class="list-inline-item" @mouseover="onMouseHover('github')" @mouseleave="onMouseLeave('github')">
              <a href="https://github.com/richyburgos" target="_blank">
                <font-awesome-icon icon="fa-brands fa-github" :class="githubIconClass" size="lg" fixed-width/>
              </a>
            </li>
            <li class="list-inline-item" @mouseover="onMouseHover('whatsapp')" @mouseleave="onMouseLeave('whatsapp')">
              <a href="https://web.whatsapp.com/send/?phone=5016370617&text&type=phone_number&app_absent=0"
                 target="_blank">
                <font-awesome-icon icon="fa-brands fa-whatsapp" :class="whatsappIconClass" size="lg" fixed-width/>
              </a>
            </li>
          </ul>
          <hr>
        </div>

        <ul class="navbar-nav flex-column text-start">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">
              <font-awesome-icon :icon="['fas', 'home']" fixed-width/>
              Home
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/about">
              <font-awesome-icon :icon="['fas', 'circle-info']" fixed-width/>
              About Me
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/resume">
              <font-awesome-icon :icon="['fas', 'file-lines']" fixed-width/>
              Resume
            </nuxt-link>
          </li>
        </ul>

        <div class="my-2 my-md-3">
          <a class="btn btn-primary" href="mailto:richyburgos@live.com">
            <p>richyburgos@live.com</p>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import CurrentTime from "~/src/components/ui/CurrentTime.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: { FontAwesomeIcon, CurrentTime },
  data() {
    return {
      startDate: '2016-06-01',
      currentDate: new Date(),
      linkedInIconClass: 'fa-fade',
      githubIconClass: 'fa-fade',
      whatsappIconClass: 'fa-fade',
      showHeader: false,
    };
  },
  methods: {
    toggleHeader(){
      this.showHeader = !this.showHeader;
    },

    onMouseHover(icon) {
      if (icon === 'linkedin') {
        this.linkedInIconClass = 'fa-bounce';
      }
      if (icon === 'github') {
        this.githubIconClass = 'fa-bounce';
      }
      if (icon === 'whatsapp') {
        this.whatsappIconClass = 'fa-bounce';
      }
    },
    onMouseLeave(icon) {
      if (icon === 'linkedin') {
        this.linkedInIconClass = 'fa-fade';
      }
      if (icon === 'github') {
        this.githubIconClass = 'fa-fade';
      }
      if (icon === 'whatsapp') {
        this.whatsappIconClass = 'fa-fade';
      }
    }
  },
  computed: {
    yearsOfExperience() {
      const start = new Date(this.startDate);

      const yearsDiff = this.currentDate.getFullYear() - start.getFullYear();
      const monthsDiff = this.currentDate.getMonth() - start.getMonth();

      let duration = '';

      if (yearsDiff > 0) {
        duration += yearsDiff + (yearsDiff === 1 ? ' Year ' : ' Years ');
      }

      if (monthsDiff > 0) {
        duration += monthsDiff + (monthsDiff === 1 ? ' Month' : ' Months');
      }

      return duration.trim();
    }
  }
};
</script>

<style scoped>
.blog-name {
  font-weight: bold;
  font-size: 1.5rem;
  color: #fff;
}

.blog-name a {
  color: #fff;
}

.blog-name a:hover {
  text-decoration: none;
}

.btn-primary {
  background: rgba(0, 0, 0, 0.3);
  border-color: transparent;
  font-size: 1rem;
}

.btn-primary:hover {
  background: rgba(0, 0, 0, 0.4);
  border-color: transparent;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.navbar-dark .navbar-toggler {
  border-radius: 2px;
  opacity: 0.8;
  border: 1px solid rgba(255, 255, 255, 0.8);
  padding: 0.25rem 0.6rem;
}

.navbar-dark .navbar-toggler:hover {
  opacity: 1;
}

.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(256,256,256, 1)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.profile-section .profile-image {
  max-width: 160px;
}

.profile-section .bio {
  font-size: 0.875rem;
}
</style>
