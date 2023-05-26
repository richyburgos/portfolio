<template>
  <section class="about-me-section p-3 p-lg-5 theme-bg-light">
    <div class="container">
      <div class="profile-teaser row">

        <div class="col">
          <h2 class="name font-weight-bold mb-1">Richard Alvaro Burgos</h2>

          <div class="tagline mb-3">
            <font-awesome-icon
                fixed-width
                size="sm"
                :icon="['fas', 'chevron-left']"
            />
            <font-awesome-icon
                fixed-width
                size="sm"
                :icon="['fas', 'chevron-right']"
            />
            Application Developer
            <font-awesome-icon
                fixed-width
                size="sm"
                :icon="['fas', 'code']"
            />
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
              Creating solutions that are uniquely tailored to your requirements is something I excel at. I pride myself on delivering scalable and customized websites
              that meet your specific needs. Whether it's designing intuitive and visually appealing GUIs or keeping up
              with the latest technologies and techniques, I strive to provide the best service possible.
            </p>

            <p>
              I'm excited to work with you and help enhance or transform your website into something truly awesome.
              Let's embark on this journey together and make your online presence shine.
            </p>
            <a
                class="text-link"
                href="/resume">View My Full Resume To See My Qualifications</a>
          </div>
          <div class="mb-4">
            <a
                class="btn btn-primary me-2 mb-3"
                href="#">
              <svg
                  class="svg-inline--fa fa-circle-right me-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="circle-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg="">
                <path
                    fill="currentColor"
                    d="M512 256c0-141.4-114.6-256-256-256S0 114.6 0 256c0 141.4 114.6 256 256 256S512 397.4 512 256zM265.9 382.8C259.9 380.3 256 374.5 256 368v-64H160c-17.67 0-32-14.33-32-32v-32c0-17.67 14.33-32 32-32h96v-64c0-6.469 3.891-12.31 9.875-14.78c5.984-2.484 12.86-1.109 17.44 3.469l112 112c6.248 6.248 6.248 16.38 0 22.62l-112 112C278.7 383.9 271.9 385.3 265.9 382.8z"></path>
              </svg>
              <!-- <i class="fas fa-arrow-alt-circle-right me-2"></i> Font Awesome fontawesome.com --><span class="d-none d-md-inline">View</span>
              Portfolio</a>
            <a
                class="btn btn-secondary mb-3"
                href="/resume">
              <svg
                  class="svg-inline--fa fa-file-lines me-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="file-lines"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg="">
                <path
                    fill="currentColor"
                    d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM272 416h-160C103.2 416 96 408.8 96 400C96 391.2 103.2 384 112 384h160c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 352h-160C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320h160c8.836 0 16 7.162 16 16C288 344.8 280.8 352 272 352zM288 272C288 280.8 280.8 288 272 288h-160C103.2 288 96 280.8 96 272C96 263.2 103.2 256 112 256h160C280.8 256 288 263.2 288 272z"></path>
              </svg>
              <!-- <i class="fas fa-file-alt me-2"></i> Font Awesome fontawesome.com --><span class="d-none d-md-inline">View</span>
              Resume</a>
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

  <DetailsSection/>

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
