<template>
  <v-app>
    <v-main class="mx-auto">
      <Navbar/>
      <Grid class="mt-4"/>
      <ColorPicker/>
      <UndoButton/>
    </v-main>
  </v-app>
</template>

<script>
import { useState } from '@u3u/vue-hooks';

import Grid from '@/components/Grid.vue';
import Navbar from '@/components/Navbar.vue';
import UndoButton from '@/components/UndoButton.vue';
import ColorPicker from '@/components/ColorPicker.vue';

export default {
  name: 'App',
  components: {
    Grid,
    Navbar,
    UndoButton,
    ColorPicker,
  },
  watch: {
    history: (val) => console.log(val),
  },
  setup() {
    const { history } = useState('grid', ['history']);

    return {
      history
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

