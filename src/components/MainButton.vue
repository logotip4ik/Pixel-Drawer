<template>
  <v-speed-dial
    v-model="fab"
    fixed bottom left
    direction="right"
    transition="slide-y-reverse-transition">
    <template v-slot:activator>
      <v-btn v-model="fab" :dark="darkMode" fab>
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
    </template>
    <ClearButton/>
    <DarkModeButton/>
  </v-speed-dial>
</template>

<script>
import { ref } from '@vue/composition-api'
import { useState } from '@u3u/vue-hooks';

import ClearButton from './ClearButton';
import DarkModeButton from './DarkModeButton';

export default {
  components: {
    ClearButton,
    DarkModeButton,
  },
  setup() {
    const fab = ref(false);
    const { darkMode } = useState('grid', ['darkMode']);

    return {
      fab,
      darkMode,
    }
  }
}
</script>
