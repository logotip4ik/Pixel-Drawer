<template>
  <v-app :dark="darkMode" :style="darkMode ? 'background-color: black' : null">
    <v-main class="mx-auto">
      <Navbar/>
      <Grid class="mt-4"/>
      <ColorPicker/>
      <MainButton/>
    </v-main>
  </v-app>
</template>

<script>
import { useState, useMutations } from '@u3u/vue-hooks';

import Grid from '@/components/Grid.vue';
import Navbar from '@/components/Navbar.vue';
import MainButton from '@/components/MainButton.vue';
import ColorPicker from '@/components/ColorPicker.vue';

export default {
  name: 'App',
  components: {
    Grid,
    Navbar,
    MainButton,
    ColorPicker,
  },
  setup() {
    const { darkMode } = useState('grid', ['darkMode']);
    const { toggleDarkMode } = useMutations('grid', ['toggleDarkMode']);

    if (!localStorage.darkMode) {
      localStorage.darkMode = false;
    } else {
      if (JSON.parse(localStorage.darkMode) !== darkMode.value) {
        toggleDarkMode();
      }
    }

    return {
      darkMode,
      toggleDarkMode,
    };
  },
};
</script>

<style>
body {
  height: 100vh;
  width: 100vw;
}
</style>

