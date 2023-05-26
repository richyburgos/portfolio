<template>
  <div class="col-4 side-info px-3">
    <div class="row justify-content-center mt-3 mb-5">
      <img
          src="~assets/images/self-portrait.jpeg"
          alt="Self Portrait"
          class="rounded-circle resume-img"/>
    </div>
    <div class="row mb-5">
      <div class="col text-white">
        <h5 class="underline">CONTACT</h5>
        <p>
          <font-awesome-icon
              :icon="['fa', 'home']"
              size="sm"
              fixed-width/>
          <strong> Address:</strong>
          <small> 2 1/2 Miles Philip Goldson Highway, Belize City, Belize, Central America</small>
          <br>
          <font-awesome-icon
              :icon="['fa', 'phone']"
              size="sm"
              fixed-width/>
          <strong> Phone:</strong>
          <small> +(501)-637-0617</small>
          <br>
          <font-awesome-icon
              :icon="['fa', 'envelope']"
              size="sm"
              fixed-width/>
          <strong> Email 1:</strong>
          <small>&nbsp;<a href="mailto:richyburgos@live.com">richyburgos@live.com</a></small>
          <br>
          <font-awesome-icon
              :icon="['fa', 'envelope']"
              size="sm"
              fixed-width/>
          <strong> Email 2:</strong>
          <small>&nbsp;<a href="mailto:richyburgos@live.com">richyburgos98@gmail.com</a></small>
        </p>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col text-white">
        <h5>LANGUAGES</h5>
        <p>
          Primary: English (Native)<br>
          Secondary: Spanish (Intermediate)
        </p>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col text-white">
        <h5>HOBBIES</h5>
        <p>
          Reading<br>
          Traveling<br>
          Fishing<br>
          Learning new skills<br>
          Casual gaming
        </p>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col text-white">
        <h5>Skills</h5>
        <p>
          Jira<br>
          SCRUM<br>
          Agile<br>
          GIT<br>
          WordPress Management<br>
          PHP<br>
          CodeIgniter<br>
          Laravel<br>
          Javascript<br>
          VueJs<br>
          Nuxt<br>
          PostGres<br>
          MySQL<br>
          Oracle<br>
          HTML<br>
          Css<br>
          Bootstrap<br>
          Jira<br>
          WireFraming<br>
          Axure RP9<br>
          Photoshop<br>
          Customer Service<br>
          Hardware Troubleshooting<br>
          Training
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  components: {FontAwesomeIcon},
  name: "LeftPanel"
}
</script>

<style scoped>

.side-info h1,
.side-info h2,
.side-info h3,
.side-info h4,
.side-info h5,
.side-info h6,
.side-info span,
.side-info label,
.side-info strong,
.side-info p {
  color: white;
}

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

.resume-img {
  width: 70%;
}

.side-info,
.right-panel {
  /*height: 1052px;*/
}

.side-info {
  background-color: #253947;
}
</style>
