<template>
  <v-btn fab @click="toggleMode" :dark="darkMode">
    <v-icon v-if="!darkMode">mdi-weather-night</v-icon>
    <v-icon v-else>mdi-white-balance-sunny</v-icon>
  </v-btn>
</template>

<script>
import { useState, useMutations } from '@u3u/vue-hooks'
export default {
  setup() {
    const { darkMode } = useState('grid', ['darkMode']);

    const { toggleDarkMode } = useMutations('grid', ['toggleDarkMode']);

    return {
      darkMode,
      toggleDarkMode,
    }
  },
  methods: {
    toggleMode() {
      this.toggleDarkMode();
      localStorage.darkMode = this.darkMode;
    }
  }
}
</script>
