<template>
  <div class="overview-section p-3 px-lg-5">
    <div class="container">
      <h2 class="section-title font-weight-bold mb-3">My Experience</h2>
      <div class="section-intro mb-5">

        <p>
          I am an experienced professional with over {{ techIndustryYearsOfExperience }} of expertise in the tech industry — spanning not just software development but hands-on IT support, hardware troubleshooting, and networking from my time at Bowen & Bowen. Throughout my career, I have developed a strong foundation in both front-end web interface design and back-end coding, primarily using Laravel and Vue.js, with earlier experience in CodeIgniter.</p>

        <p>
          My exposure to different facets of technology — including networking, hardware troubleshooting and repair, and web development — has broadened my technical perspective and made me a more adaptable, well-rounded developer.</p>

        <p>
          Having worked across diverse industries such as call centers, pharmaceutical distribution, television
          stations, hardware stores, food and beverage distribution, and telecommunications, I have gained valuable
          insights into different business environments and their specific technological requirements.</p>

        <p>
          I firmly believe in the importance of modular and reusable code to ensure cleaner and more efficient resource
          utilization. With my ability to create report queries and intuitive interfaces that align with desired
          outcomes, I strive to deliver optimal solutions.</p>

        <p>
          In addition to my technical skills, I am known for my friendly demeanor and collaborative approach, excelling
          in team-based environments. I possess intermediate experience with Git and have a solid understanding of the
          Scrum Agile methodology. As a fast learner and dedicated worker, I consistently complete tasks to the best of
          my ability, always eager to acquire new skills and adapt to emerging technologies.</p>

        <p>
          Throughout my journey, I have successfully supervised small projects, ensuring deadlines were met, teams
          remained on track, and morale remained high, even during challenging circumstances. My ability to work with
          limited supervision showcases my self-motivation and accountability.</p>

        <p>
          I am excited to contribute my wealth of experience and expertise to your projects and help drive your success
          in the ever-evolving world of technology.</p>


        Check out my
        <nuxt-link to="/resume"
                   class="text-link"
        >
          Online Resume
        </nuxt-link>
      </div>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <DetailItems v-for="item in detailItems"
                     :key="item.id"
                     :title="item.title"
                     :content="item.content"
                     :icons="item.icons"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsSection",
  computed: {
    yearsOfExperience() {
      return useExperience().full;
    },
    techIndustryYearsOfExperience() {
      return useTechIndustryExperience().full;
    },
    vueYearsOfExperience() {
      return useVueExperience().full;
    },
    detailItems() {
      return [
        {
          id: 1,
          title: 'JavaScript, VueJs, Nuxt, React',
          content: `I have ${this.vueYearsOfExperience} of experience with Vue.js (Vue 2 & Vue 3, including the Composition API), including building this site with Vue 3 and Nuxt 3. I'm also comfortable with JavaScript and TypeScript for building interactive, type-safe interfaces.`,
          icons: [
            { id: 1, icon: ['fab', 'square-js'], color: '#F7DE20' },
            { id: 2, icon: ['fab', 'vuejs'], color: '#41b784' }
          ]
        },
        {
          id: 2,
          title: 'PHP, Laravel, CodeIgniter',
          content: `With ${this.yearsOfExperience} of experience in PHP, primarily using Laravel, I'm comfortable maintaining, upgrading, and extending existing applications, building REST APIs, and working with Blade templates. I also have earlier experience with CodeIgniter.`,
          icons: [
            { id: 1, icon: ['fab', 'php'], color: '#787cb4' },
            { id: 2, icon: ['fab', 'laravel'], color: '#E82734' }
          ]
        },
        {
          id: 3,
          title: 'Database',
          content: `I have a comprehensive understanding of databases, including PostgreSQL, MySQL, and Oracle. Proficient in writing queries for select, update, insert, and delete operations, I can effectively utilize data to generate insightful reports.`,
          icons: [
            { id: 1, icon: ['fas', 'database'], color: '#336997' }
          ]
        },
        {
          id: 4,
          title: 'CSS',
          content: `I'm well-versed in CSS and LESS/SCSS, and can write custom, framework-free styles as needed \u2014 or use libraries like Bootstrap 5 when a component library speeds things along. I can adapt page layouts to fit your specific requirements, creating a user experience that's both functional and engaging.`,
          icons: [
            { id: 1, icon: ['fa', 'file-code'], color: '#0091d4' },
            { id: 2, icon: ['fab', 'bootstrap'], color: '#7432f9' }
          ]
        },
        {
          id: 5,
          title: 'GIT',
          content: `I possess intermediate knowledge of Git version control, enabling smooth collaboration with other developers and teams following the Scrum Agile methodology.`,
          icons: [
            { id: 1, icon: ['fab', 'git'], color: '#e44c31' }
          ]
        },
        {
          id: 6,
          title: 'WordPress',
          content: `Whether you require a new WordPress site or assistance with managing existing projects, I can deliver. Offering expertise in maintenance, webpage modifications, security enhancements, and content management, I ensure optimal performance and user satisfaction.`,
          icons: [
            { id: 1, icon: ['fab', 'wordpress'], color: '#3290cd' }
          ]
        },
        {
          id: 7,
          title: 'HTML',
          content: `With HTML expertise, I can adapt the interface to meet your specific requirements regardless of framework (Vue, Laravel, CodeIgniter, WordPress, etc.), including vanilla JavaScript for dynamic behavior when needed.`,
          icons: [
            { id: 1, icon: ['fab', 'html5'], color: '#e56028' }
          ]
        },
        {
          id: 8,
          title: 'My Environment',
          content: `I'm comfortable working in both Mac and Windows environments, adapting to whatever setup best suits a project. I use JetBrains PhpStorm as my primary IDE, along with Claude Code for AI-assisted development. On macOS I use NVM for Node version management, and I test across Chrome, Safari, Edge, Firefox, and other popular browsers to ensure cross-browser compatibility.`,
          icons: [
            { id: 1, icon: ['fab', 'apple'], color: '#919191' },
            { id: 2, icon: ['fab', 'windows'], color: '#05a3e3' }
          ]
        }
      ];
    }
  }
}
</script>

<style scoped>
/**/
</style>
