<template>
  <div class="col-8 right-panel">
    <div class="jumbotron bg-light py-5 mb-5">
      <h2 class="text-center">
        RICHARD ALVARO BURGOS
        <span class="developer-name" />
      </h2>
      <p class="text-center">APPLICATION DEVELOPER</p>
    </div>
    <div class="row">
      <div class="col">
        <h5 class="profile-header">PROFILE</h5>
        <p class="bio">I am a highly motivated programmer with over {{ yearsOfExperience }} of experience in application
          development and troubleshooting for service and distribution companies. I enjoy tackling problems and coming up with
          innovative solutions. I am a team player that partakes in sharing any experience gained with colleagues to
          further our productivity and knowledge base.</p>
        <p>I am always willing to learn and take criticism seriously to better my work ethic. I enjoy creating
          intuitive GUIs that are easy to use and are dynamic and aesthetic. My experience in wire frames for GUIs
          using Axure RP 9 is definitely a skill set I am known for.</p>
        <p>I am willing to take on different challenging roles. I consider these opportunities key to increasing my
          varied knowledge base of applications programing. I look forward to contributing to your company's
          progress.</p>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h5 class="work-experience-header">WORK EXPERIENCES (2007 - NOW)</h5>
        <ResumeWorkExperienceItem v-for="workExperience in workExperiences"
                                  :key="workExperience.id"
                                  :position="workExperience.position"
                                  :company="workExperience.company"
                                  :company-location="workExperience.companyLocation"
                                  :duration="workExperience.duration"
                                  :content="workExperience.content"
                                  :responsibilities="workExperience.responsibilities"
                                  :technologies="workExperience.technologies"
                                  :projects="workExperience.projects"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h5 class="education-header">EDUCATION</h5>
        <div class="mt-4">
          <h6>SCHOOL</h6>
          <ResumeEducationItem v-for="education in educationItems"
                               :key="education.id"
                               :school="education.school"
                               :course="education.course"
                               :duration="education.duration"
                               :status="education.status"
          />
        </div>
        <div class="mt-4">
          <h6>COURSES TAKEN</h6>
          <h6 class="text-center spaced my-4"><strong>UDEMY</strong></h6>
          <ResumeCertificationItem v-for="course in udemyCourses"
                                   :key="course.id"
                                   :author="course.author"
                                   :course-name="course.name"
          />
        </div>
        <h6 class="text-center spaced my-4"><strong>LARACAST</strong></h6>
        <ResumeCertificationItem v-for="course in laracastCourses"
                                 :key="course.id"
                                 :course-name="course.name"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h5 class="knowledge-base-header">KNOWLEDGE BASE</h5>
        <div class="row knowledge-base">

          <div class="col">
            <table class="table px-0 mx-0">
              <tr>
                <td class="ps-0">PHP, JavaScript, TypeScript, HTML, CSS/LESS/SCSS</td>
                <td>Laravel, Vue.js (2 &amp; 3), Nuxt, Bootstrap, CodeIgniter</td>
              </tr>
              <tr>
                <td class="ps-0">Linux, Windows, Mac</td>
                <td>Jest</td>
              </tr>
              <tr>
                <td class="ps-0">MySQL, PostgreSQL, Oracle, SQLite, MongoDB</td>
                <td>Git, Bitbucket, Jira, Figma, Axure RP9, Storybook, BrowserStack, NewRelic, AWS, Jenkins</td>
              </tr>
              <tr>
                <td class="ps-0">Claude, Cursor, ChatGPT, WindSurf (Cascade)</td>
                <td>Problem Solving, Leadership, Wireframing, Customer Service, Trained in Accessibility (508 Compliance)</td>
              </tr>
              <tr>
                <td class="ps-0">Can Speak, Read and Write Spanish (basic conversational)</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightPanel",
  data() {
    return {
      workExperiences: [
        {
          id: 1,
          position: 'Application Developer',
          company: 'CUROTEC',
          companyLocation: 'USA, Philadelphia, PA',
          duration: '2022 - Present',
          content: `Curotec is a software development company providing custom software solutions to businesses of all sizes, specializing in web and mobile development, enterprise software, and e-commerce. Responsibilities span frontend and backend development, bugfixes, and new feature implementation across multiple client engagements.`,
          projects: [
            {
              title: `Client: Inside Real Estate`,
              tasks: [
                `Built and optimized frontend components using VueJS, Nuxt 2, LESS, Tailwind, and Figma, focusing on new features, bugfixes, and upgrading components to the Composition API.`,
                `Developed backend systems with Laravel 6, handling API creation, maintenance, troubleshooting, and resolving data mismatches in MySQL and ElasticSearch.`,
                `Utilized Cursor to assist in frontend and backend development, troubleshooting, and documenting large codebases.`,
                `Led a full site rebranding effort, building the Navbar, key pages, and components from the ground up based on Figma designs.`,
                `Integrated new APIs to create functionalities and reporting features that previously did not exist.`
              ]
            },
            {
              title: `Client: Wolters Kluwer`,
              tasks: [
                `Developed backend systems using PHP, Laravel 5, and MySQL, creating and modifying queries, controllers, and resolving code issues.`,
                `Built and modified frontend components using VueJS, LESS, Figma, and Storybook, creating new components based on Figma designs and documenting them in Storybook for demo purposes.`,
                `Led an overhaul of the Navbar and key components, updating them to align with Figma designs and meet 508 accessibility compliance standards.`,
                `Utilized screen readers and axeDevTools to identify and implement accessibility improvements.`,
                `Assisted in leading standup meetings when the project manager or supervisor was unavailable.`
              ]
            }
          ],
          technologies: [
            `VueJS, Nuxt 2, Laravel 6, Laravel 5, PHP, LESS, Tailwind, MySQL, ElasticSearch, Figma, Lodash, Cursor, NewRelic, Storybook, axeDevTools`
          ]
        },
        {
          id: 2,
          position: 'IT Engineer',
          company: 'Speednet Communications LTD/ Smart Belize',
          companyLocation: 'Belize City, Belize',
          duration: '2016 - 2022',
          content: `Speednet Communications Limited/SMART Belize is a Belizean communications company established in 2003. It delivers cellular, internet and VOIP services under the brand name "SMART". During my employment, all applications created were for internal use. `,
          projects: [
            {
              title: `EMS App: EMS application used to manage Human Resource tasks such as onboarding, dismissals, payroll, leave management as well as other minor reports and modules for enterprise use.`,
              tasks: [
                `GUI and database concepts and designs, analysis of data and processes.`,
                `Develop new modules and edit existing ones for optimization or additional functionality.`,
                `Maintain application and provide support.`,
                `Create and update user guide for application.`
              ]
            },
            {
              title: `Inventory And Sales Application: Web application that was created for the purpose of managing inventory, warehouses and sales of devices and service. Application also contained reports and API to interconnect with other solutions.`,
              tasks: [
                `GUI and database concepts and designs, analysis of data and processes.`,
                `Develop new modules and edit existing ones for optimization or additional functionality.`,
                `Maintain application and provide support.`,
                `Create and update user guide for application.`
              ]
            },
            {
              title: `Maintenance Of Internal Application: PHP 5 web app created with custom framework used for customer record keeping, bill generation, phone activation, data purchase etc. System was created prior to my employment.`,
              tasks: [
                `Maintained web service and web application.`,
                `Designed and developed new views and backend functionality for ongoing services.`,
                `Modified existing views and backend functionality.`
              ]
            }
          ],
          technologies: [
            `HTML, CSS, PHP, JavaScript, VueJs 2, Laravel, CodeIgniter`,
            `PostgreSQL, Oracle, MySql`,
            'Git, GitLab, BitBucket',
            'Axure RP, Sparx Enterprise Architect, Microsoft Office Suite'
          ]
        },
        {
          id: 3,
          position: 'IT Analyst & Technician',
          company: 'Bowen & Bowen Ltd.',
          companyLocation: 'Belize City, Belize',
          duration: '2015-2016',
          content: ``,
          responsibilities: [
            `IT Support`,
            `Handling of internal tickets that dealt with software and hardware troubleshooting`,
            `Travel to sites to perform software updates or installation and hardware repairs or upgrades`,
            `Repair desktops and evaluating their conditions for further use or discardment.`,
            `Maintenance of internal applications`,
            `Creation of minor application tools used to format csv files.`,
            `Support of SAP ABAP connectivity to distribution center application.`,
            `Support of Microsoft applications as well as technical support dealing with network or hardware issues.`
          ],
          technologies: [
            `Visual Studio, C#, MVC.NET Framework 5, SAP ABAP, Microsoft Suite.`
          ]
        },
        {
          id: 4,
          position: 'Accounts Receivable',
          company: 'Salvador W. Habet Ltd.',
          companyLocation: 'Belize City, Belize',
          duration: '2013 - 2014',
          content: `Salvador W. Habet Ltd. is a Belizean company that provides wholesale and retail sales of hardware and construction supplies.`,
          responsibilities: [
            `Collect monies from customers for monies owed for accounts.`,
            `Assist in day-to-day activities in office procedures.`,
            `Assist in upgrading written/manual accounting system to use of more modern technology such as cash registers that use QuickBooks POS and QuickBooks Enterprise for management of customer accounts.`
          ],
          technologies: [
            'Quickbooks Accounting Pro',
            'Quickbooks POS'
          ]
        },
        {
          id: 5,
          position: 'Assistant Program Manager / Technician',
          company: 'Belize Broadcasting Network (BBN9)',
          companyLocation: 'Belize City, Belize',
          duration: '2009-2011',
          content: `Belize Broadcasting Network (BBN9) is a Belizean company that provides television programming ranging from news, entertainment and informational series. `,
          responsibilities: [
            `Create timeline to allow for easier placement of ads and new programming to be aired using Sony Vegas.`,
            `Review content to be aired to ensure family friendly content.`,
            `Assist in creation of television series and assist in airing the content.`,
            `Provide assistance where necessary for production to remain seamless.`
          ],
          technologies: [
            'Sony Vegas Pro',
            'Adobe Photoshop'
          ]
        },
        {
          id: 6,
          position: 'Office Assistant',
          company: 'Matus Medical Supplies',
          companyLocation: 'Belize City, Belize',
          duration: '2008 - 2009',
          content: `Matus Medical Supplies is a Belizean company that provides wholesale and retail sales of medical equipment and products. `,
          responsibilities: [
            `Provide support to customers.`,
            `Promote sales of products.`,
            `Delivery of products to customers.`,
            `Perform cashier duties using QuickBooks Accounting software.`
          ],
          technologies: ['Quickbooks Accounting Pro']
        },
        {
          id: 7,
          position: 'Customer Service Representative',
          company: 'Ready Call Center',
          companyLocation: 'Belize City, Belize',
          duration: '2007 - 2008',
          content: `Ready Call Center is a locally run call center that outsources customer service for US based companies such as Net10 wireless and Tracfone.`,
          responsibilities: [
            `Support: Provide customer support for provided services as well as attempt to encourage sales of products.`
          ],
          technologies: [
            'Avaya'
          ]
        }
      ],
      educationItems: [
        {
          id: 1,
          school: `St. John's College Extension`,
          duration: `2006 - 2009`,
          status: `Completed with GED`
        }, {
          id: 2,
          school: `St. John's Junior College`,
          duration: `2009 - 2011`,
          status: `Incomplete`,
          course: 'Computer Science'
        }, {
          id: 3,
          school: `Wesley Junior College`,
          duration: `2011 - 2012`,
          status: `Incomplete`,
          course: 'Information Technology'
        }
      ],
      laracastCourses: [
        {
          id: 1,
          name: `Vue 2.0`
        },
        {
          id: 2,
          name: `Overview Of Laravel Framework`
        }
      ],
      udemyCourses: [
        {
          id: 1,
          name: `The Web Developer Bootcamp`,
          author: `Colt Steele`
        },
        {
          id: 2,
          name: `PHP MVC Framework CodeIgniter Tutorial For Beginners Project`,
          author: `Edwin Diaz`
        },
        {
          id: 3,
          name: `The Complete ASP.Net MVC 5 Course`,
          author: `Mosh Hamedani`
        },
        {
          id: 4,
          name: `PHP With Laravel For Beginners – Become a Master in Laravel`,
          author: `Edwin Diaz`
        },
        {
          id: 5,
          name: `Learning Axure RP`,
          author: `Packt Publishing`
        },
        {
          id: 6,
          name: `Vue - The Complete Guide (incl. Router & Composition API)`,
          author: `Maximilian Schwarzmüller`
        },
        {
          id: 7,
          name: `Nuxt.js 2 - Vue.js on Steroids`,
          author: `Maximilian Schwarzmüller`
        },
        {
          id: 8,
          name: `React - The Complete Guide (incl Hooks, React Router, Redux) <Currently Enrolled>`,
          author: `Maximilian Schwarzmüller`
        }
      ]
    }
  },
  computed: {
    yearsOfExperience() {
      return useExperience().full;
    }
  }
}
</script>

<style scoped>
.spaced {
  letter-spacing: 10px;
}

p, li {
  font-size: 14px;
}

.developer-name::after {
  content: "";
  display: block;
  width: 6em;
  max-width: 70%;
  border-bottom: 0.1em solid #0D0D0DFF;
  margin: 0.5em auto 0;
}

.profile-header::after {
  content: "";
  display: block;
  width: 4em;
  max-width: 50%;
  border-bottom: 0.1em solid #0c0c0c;
  /*margin: 0.5em auto 0;*/
}

.work-experience-header::after {
  content: "";
  display: block;
  width: 9.7em;
  max-width: 50%;
  border-bottom: 0.1em solid #0c0c0c;
  /*margin: 0.5em auto 0;*/
}

.knowledge-base-header::after {
  content: "";
  display: block;
  width: 9em;
  max-width: 50%;
  border-bottom: 0.1em solid #0C0C0C;
  /*margin: 0.5em auto 0;*/
}

.education-header::after {
  content: "";
  display: block;
  width: 5.5em;
  max-width: 50%;
  border-bottom: 0.1em solid #0C0C0C;
  /*margin: 0.5em auto 0;*/
}

.right-panel {
  padding-left: 30px;
}
</style>
