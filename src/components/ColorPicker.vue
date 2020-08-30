<template>
  <v-speed-dial
    v-model="fab"
    fixed
    bottom
    right
    direction="top"
    transition="slide-x-reverse-transition"
  >
    <template v-slot:activator>
      <v-btn fab v-model="fab">
        <v-icon>mdi-brush</v-icon>
      </v-btn>
    </template>
    <v-btn color="grey" @click="changeBrush('#9E9E9E')" fab/>
    <v-btn color="red" @click="changeBrush('#F44336')" fab/>
    <v-btn color="green" @click="changeBrush('#4CAF50')" fab/>
    <v-btn color="indigo" @click="changeBrush('#3F51B5')" fab/>
    <v-btn color="yellow" @click="changeBrush('#FFEB3B')" fab/>
  </v-speed-dial>
</template>

<script>
import { ref } from '@vue/composition-api';
import { useMutations } from '@u3u/vue-hooks';

export default {
  name: 'ColorPicker',
  setup() {
    const fab = ref(false);

    const { changeBrush } = useMutations('grid', ['changeBrush']);

    return {
      fab,
      changeBrush,
    };
  },
};
</script>

