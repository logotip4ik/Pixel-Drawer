<template>
  <v-app-bar app color="grey darken-4" dark>
    <v-toolbar-title>Pixel Drawer</v-toolbar-title>
    <v-spacer/>
    <ChangeSizeGrid/>
  </v-app-bar>
</template>

<script>
import ChangeSizeGrid from './ChangeSizeGrid';

export default {
  name: 'Navbar',
  components: {
    ChangeSizeGrid,
  },
}
</script>
