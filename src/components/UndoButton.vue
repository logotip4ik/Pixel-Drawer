<template>
  <v-btn fab fixed bottom left @click="undo">
    <v-icon>mdi-undo</v-icon>
  </v-btn>
</template>

<script>
import { useMutations } from '@u3u/vue-hooks';

export default {
  name: 'UndoButton',
  setup() {
    const { undo } = useMutations('grid', ['undo']);

    return {
      undo,
    };
  },
};
</script>

