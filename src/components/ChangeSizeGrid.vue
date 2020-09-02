<template>
  <v-menu
    v-model="menuShow"
    nudge-bottom="5"
    transition="scale-transtion"
    :close-on-click="true"
    :close-on-content-click="false"
    offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn outlined v-bind="attrs" v-on="on">
        {{gridWidth}}, {{gridHeight}}
      </v-btn>
    </template>
    <v-scale-transition>
      <v-card
        height="150"
        width="300"
        class="">
        <v-container>
          <v-text-field
            dense
            type="number"
            v-model.number="width"
            label="Width"/>
          <v-text-field
            dense
            type="number"
            v-model.number="height"
            label="Height"/>
          <div>
            <v-spacer/>
            <v-btn
              color="red"
              outlined small
              @click="cancel">
              Cancel</v-btn>
            <v-btn
              color="green"
              class="ml-2" small
              @click="menuShow = false">
              Save</v-btn>
          </div>
        </v-container>
      </v-card>
    </v-scale-transition>
  </v-menu>
</template>

<script>
import { ref } from '@vue/composition-api'
import { useState, useMutations } from '@u3u/vue-hooks';

export default {
  name: 'CahngeSizeGrid',
  watch: {
    menuShow(val) {
      if (val) {
        this.size = {h: this.gridHeight, w: this.gridWidth};
      }
    }
  },
  setup() {
    const { gridHeight, gridWidth } = useState('grid', [
      'gridHeight',
      'gridWidth',
    ]);

    const { changeGridHeight, changeGridWidth } = useMutations('grid', [
      'changeGridHeight',
      'changeGridWidth',
    ]);

    const menuShow = ref(false);
    const size = ref({h: gridHeight.value, w: gridWidth.value});

    const cancel = () => {
      changeGridHeight(size.value.h);
      changeGridWidth(size.value.w);
      menuShow.value = false;
    };

    return {
      size,
      cancel,
      menuShow,
      gridWidth,
      gridHeight,
      changeGridWidth,
      changeGridHeight,
    }
  },
  computed: {
    width: {
      get() {
        return this.gridWidth;
      },
      set(val) {
        this.changeGridWidth(val);
      },
    },
    height: {
      get() {
        return this.gridHeight;
      },
      set(val) {
        this.changeGridHeight(val);
      },
    },
  },
}
</script>
