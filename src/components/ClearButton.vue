<template>
  <v-btn fab @click="initGrid" :dark="darkMode">
    <v-icon>mdi-delete-outline</v-icon>
  </v-btn>
</template>

<script>
import { useActions, useState } from '@u3u/vue-hooks';

export default {
  name: 'UndoButton',
  setup() {
    const { initGrid } = useActions('grid', ['initGrid']);
    const { darkMode } = useState('grid', ['darkMode']);

    return {
      initGrid,
      darkMode,
    };
  },
};
</script>

