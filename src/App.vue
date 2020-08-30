<template>
  <v-app>
    <v-main class="mx-auto">
      <h1 class="display-1 mb-4">Pixel Drawer</h1>
      <v-row v-for="(row, i) in grid" :key="i" no-gutters>
        <v-col v-for="(col, j) in row" :key="j">
          <Box
            :color="col.currColor"
            @click.native="fillBox({pos: col.pos, color: brushColor})"
            @click.right.native="fillBox({pos: col.pos, color: 'transparent'})"
          />
        </v-col>
      </v-row>
      <ColorPicker/>
      <UndoButton/>
    </v-main>
  </v-app>
</template>

<script>
import { useState, useActions, useMutations } from '@u3u/vue-hooks';

import Box from '@/components/Box.vue';
import UndoButton from '@/components/UndoButton.vue';
import ColorPicker from '@/components/ColorPicker.vue';

export default {
  name: 'App',
  components: {
    Box,
    UndoButton,
    ColorPicker,
  },
  setup() {
    const { grid, brushColor } = useState('grid', ['grid', 'brushColor']);

    const { fillBox } = useMutations('grid', ['fillBox']);

    const { initGrid } = useActions('grid', ['initGrid']);

    initGrid();

    return {
      grid,
      fillBox,
      initGrid,
      brushColor,
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

