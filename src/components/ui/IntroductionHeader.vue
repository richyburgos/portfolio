<template>
  <section class="about-me-section p-3 px-lg-5 theme-bg-light">
    <div class="container">
      <div class="profile-teaser row">

        <div class="col">
          <h3 class="name font-weight-bold mb-1">Richard Burgos</h3>

          <div class="tagline mb-3">
            <font-awesome-icon
                size="xs"
                :icon="['fas', 'terminal']"
            />
            Application Developer
          </div>
          <div class="bio mb-4">
            <p>
              Hello there! I'm an experienced web developer with a passion for creating innovative and user-friendly
              websites. With 7 years of experience under my belt, I specialize in both frontend and backend development
              using PHP, CSS, HTML, and JavaScript. I also have some expertise in managing WordPress sites.
            </p>

            <p>
              Collaboration is key to me, and I thrive in team environments. I love learning from others and sharing my
              knowledge to foster personal and team growth. When it comes to your projects, I go the extra mile to
              ensure timely delivery and find effective solutions for any challenges that arise.
            </p>

            <p>
              Creating solutions that are uniquely tailored to your requirements is something I excel at. I pride myself
              on delivering scalable and customized websites
              that meet your specific needs. Whether it's designing intuitive and visually appealing GUIs or keeping up
              with the latest technologies and techniques, I strive to provide the best service possible.
            </p>

            <p>
              I'm excited to work with you and help enhance or transform your website into something truly awesome.
              Let's embark on this journey together and make your online presence shine.
            </p>
          </div>
          <div class="mb-4">
            <a
                class="btn btn-primary mb-3"
                href="/resume">
              <font-awesome-icon
                  :icon="['fas', 'file-alt']"
              />&nbsp;
              <span class="d-none d-md-inline">View Resume</span>

            </a>
          </div>
        </div>

        <div class="col-md-5 col-lg-5">
          <img
              class="profile-image img-fluid mb-3 mb-lg-0 me-md-0"
              src="@/assets/images/self-portrait.jpeg"
              alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import DetailsSection from "~/src/components/ui/DetailsSection.vue";

export default {
  name: "IntroductionHeader",
  components: {DetailsSection, FontAwesomeIcon}
}
</script>

<style>
.profile-image {
  max-width: 200px;
}

.profile-teaser .name {
  font-size: 3rem
}

.profile-teaser .profile-image {
  max-width: 300px
}

.profile-teaser .tagline {
  font-size: 1.5rem;
  font-weight: 300
}

@media (min-width: 992px) {
  .profile-teaser .profile-image {
    max-width: 250px
  }
}

@media (min-width: 1200px) {
  .profile-teaser .profile-image {
    max-width: 400px
  }
}

@media (max-width: 767.98px) {
  .profile-teaser .profile-image {
    max-width: 250px
  }
}
</style>
