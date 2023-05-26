<template>
  <div class="overview-section p-3 p-lg-5">
    <div class="container">
      <h2 class="section-title font-weight-bold mb-3">My Experience</h2>
      <div class="section-intro mb-5">

        <p>
          I am an experienced professional with over 10 years of expertise in the tech industry. Throughout my career,
          I have developed a strong foundation in both front-end web interface design and back-end coding, utilizing
          frameworks such as Laravel, CodeIgniter, Vue.js, and WordPress. My comprehensive understanding of various tech
          facets, including networking, hardware troubleshooting and repair, and web development, enables me to approach
          projects from a holistic perspective.</p>

        <p>
          Having worked across diverse industries such as call centers, pharmaceutical distribution, television
          stations,
          hardware stores, food and beverage distribution, and telecommunications, I have gained valuable insights into
          different business environments and their specific technological requirements.</p>

        <p>
          I firmly believe in the importance of modular and reusable code to ensure cleaner and more efficient resource
          utilization. With my ability to create report queries and intuitive interfaces that align with desired
          outcomes, I
          strive to deliver optimal solutions.</p>

        <p>
          In addition to my technical skills, I am known for my friendly demeanor and collaborative approach, excelling
          in
          team-based environments. I possess intermediate experience with Git and have a solid understanding of the
          Scrum
          Agile methodology. As a fast learner and dedicated worker, I consistently complete tasks to the best of my
          ability,
          always eager to acquire new skills and adapt to emerging technologies.</p>

        <p>
          Throughout my journey, I have successfully supervised small projects, ensuring deadlines were met, teams
          remained on
          track, and morale remained high, even during challenging circumstances. My ability to work with limited
          supervision
          showcases my self-motivation and accountability.</p>

        <p>
          I am excited to contribute my wealth of experience and expertise to your projects and help drive your success
          in the
          ever-evolving world of technology.</p>


        Check out my
        <nuxt-link
            to="/resume"
            class="text-link">
          Online Resume
        </nuxt-link>
      </div>
      <div class="row row-cols-1 row-cols-md-4 g-4">
      <DetailItems
            v-for="item in detailItems"
            :title="item.title"
            :content="item.content"
            :icons="item.icons"
        />
      </div>

    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import DetailItems from "~/src/components/detail-items/DetailItems.vue";

export default {
  name: "DetailsSection",
  data() {
    return {
      detailItems: [
        {
          id: 1,
          title: 'JavaScript, VueJs, Nuxt, React',
          content: `I have 5 years of experience with Vue.js, including working on this project using Vue and Nuxt. I am proficient in using Vuex for state management and have a strong understanding of modular design principles.`,
          icons: [
            {
              id: 1,
              icon: ['fab', 'square-js'],
              color: '#F7DE20'
            },
            {
              id: 2,
              icon: ['fab', 'vuejs'],
              color: '#41b784'
            },
            {
              id: 3,
              icon: ['fab', 'react'],
              color: '#61dbfc'
            },
          ]
        },
        {
          id: 2,
          title: 'PHP, Laravel, CodeIgniter',
          content: `With 7 years of experience in PHP, including 6 years with Laravel and 2 years with CodeIgniter, I possess extensive knowledge of these frameworks. I am skilled in upgrading existing projects and developing REST APIs using Laravel's powerful features. Additionally, I have expertise in utilizing Blade templates for efficient development.`,
          icons: [
            {
              id: 1,
              icon: ['fab', 'php'],
              color: '#787cb4'
            },
            {
              id: 2,
              icon: ['fab', 'laravel'],
              color: '#E82734'
            }
          ]
        },
        {
          id: 3,
          title: 'Database',
          content: `I have a comprehensive understanding of databases, including PostgreSQL, MySQL, and Oracle. Proficient in writing queries for select, update, insert, and delete operations, I can effectively utilize data to generate insightful reports.`,
          icons: [
            {
              id: 1,
              icon: ['fas', 'database'],
              color: '#336997'
            }
          ]
        },
        {
          id: 4,
          title: 'CSS',
          content: `Alongside expertise in CSS, I am familiar with Less and utilize libraries like Bootstrap 5 to enhance the visual appeal of web pages. With the ability to manipulate the page layout to suit your requirements, I can create a captivating user experience.`,
          icons: [
            {
              id: 1,
              icon: ['fa', 'file-code'],
              color: '#0091d4'
            },
            {
              id: 2,
              icon: ['fab', 'bootstrap'],
              color: '#7432f9'
            }
          ]
        },
        {
          id: 5,
          title: 'GIT',
          content: `I possess intermediate knowledge of Git version control, enabling smooth collaboration with other developers and teams following the Scrum Agile methodology. Utilizing Git, I ensure seamless teamwork and effective project management.`,
          icons: [
            {
              id: 1,
              icon: ['fab', 'git'],
              color: '#e44c31'
            }
          ]
        },
        {
          id: 6,
          title: 'WordPress',
          content: `Whether you require a new WordPress site or assistance with managing existing projects, I can deliver. Offering expertise in maintenance, webpage modifications, security enhancements, and content management, I ensure optimal performance and user satisfaction.`,
          icons: [
            {
              id: 1,
              icon: ['fab', 'wordpress'],
              color: '#3290cd'
            }
          ]
        },
        {
          id: 7,
          title: 'HTML',
          content: `With HTML expertise, I can adapt the graphical user interface (GUI) to meet your specific requirements, regardless of the framework being used (Vue, CodeIgniter, Laravel, React, WordPress, etc.). I am also proficient in leveraging vanilla JavaScript to dynamically manipulate the GUI as needed.`,
          icons: [
            {
              id: 1,
              icon: ['fab', 'html5'],
              color: '#e56028'
            }
          ]
        },
        {
          id: 8,
          title: 'My Environment',
          content: `I am adaptable to both Mac and Windows environments, catering to your specific needs as a client. Utilizing JetBrains PhpStorm and IntelliJ IDEA as my preferred IDEs, I ensure efficient and reliable coding. Moreover, I utilize NVM for npm version management on macOS and am well-versed in cross-browser compatibility, testing your web application on Google Chrome, Safari, Edge, Firefox, and other popular browsers to ensure seamless functionality.`,
          icons: [
            {
              id: 1,
              icon: ['fab', 'apple'],
              color: '#919191'
            },
            {
              id: 2,
              icon: ['fab', 'windows'],
              color: '#05a3e3'
            }
          ]
        }
      ]
    }
  },
  components: {DetailItems, FontAwesomeIcon}
}
</script>

<style scoped>
/**/
</style>
