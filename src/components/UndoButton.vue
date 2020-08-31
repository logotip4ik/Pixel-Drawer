<template>
  <v-btn fab fixed bottom left @click="undo">
    <v-icon>mdi-undo</v-icon>
  </v-btn>
</template>

<script>
import { useActions } from '@u3u/vue-hooks';

export default {
  name: 'UndoButton',
  setup() {
    const { undo } = useActions('grid', ['undo']);

    return {
      undo,
    };
  },
};
</script>

