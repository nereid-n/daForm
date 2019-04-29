<template>
  <v-layout row wrap>
    <v-flex md8 xs12>
      <v-label v-if="data.label !== undefined">{{data.label}}</v-label>
      <vue-editor v-model="content"></vue-editor>
    </v-flex>
  </v-layout>
</template>

<script>
  import { VueEditor } from 'vue2-editor';

  export default {
    name: "Editor",
    components: {
      VueEditor
    },
    data() {
      return {
        content: ''
      }
    },
    props: {
      data: {
        type: Object
      }
    }
  }
</script>

<style lang="scss">
  .ql-toolbar.ql-snow,
  .ql-container.ql-snow {
    border-color: rgba(0,0,0,0.42) !important;
  }
</style>