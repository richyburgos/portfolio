<template>
  <div class="mb-4 text-center">
    <h5 class="text-white">My Current Time</h5>
    <div class="mb-3 mt-3">
      <font-awesome-icon
          size="2xl"
          :icon="['fas', 'clock']"
          bounce
          style="color: #fff"/>
    </div>
    <p class="text-white">{{ currentTime }}</p>
    <button class="btn btn-sm btn-outline-dark text-white border-white" @click="toggleFormat">{{ hrShiftText }}</button>
  </div>
</template>

<script>
import { DateTime } from 'luxon';

export default {
  name: "CurrentTime",
  data() {
    return {
      is12HourFormat: true,
    };
  },
  computed: {
    currentTime() {
      const format = this.is12HourFormat ? 'h:mm a' : 'HH:mm';
      const date = DateTime.now().setZone('America/Belize').toLocaleString({ day: 'numeric', month: 'long', year: 'numeric' });
      return `${date} | ${DateTime.now().setZone('America/Belize').toFormat(format)}`;
    },
    hrShiftText() {
      return this.is12HourFormat ? 'Show 24 hrs' : 'Show 12 hrs';
    },
  },
  methods: {
    toggleFormat() {
      this.is12HourFormat = !this.is12HourFormat;
    },
  },
};
</script>

