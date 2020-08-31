<template>
  <div>
    <v-row v-for="(row, i) in grid" :key="i" no-gutters>
      <v-col v-for="(col, j) in row" :key="j">
        <Box
          :color="col.currColor"
          @click.native="fillBox({pos: col.pos, color: brushColor, grid})"
          @click.right.native="fillBox({pos: col.pos, color: 'transparent', grid})" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { useState, useActions, useMutations } from '@u3u/vue-hooks';

import Box from '@/components/Box.vue';

export default {
  name: 'Grid',
  components: {
    Box,
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
}
</script>
