<template>
  <v-layout row wrap>
    <v-flex md8 xs12>
      <v-label v-if="data.addLabel !== undefined">{{data.addLabel}}</v-label>
      <v-text-field
          :name="data.name"
          :value="value"
          @focus="focus"
          @input="input"
          @blur="blur"
          :type="data.type || 'text'"
          :prepend-inner-icon="data.icon"
      >
        <template v-slot:label>
          <span v-html="data.label"></span>
        </template>
      </v-text-field>
    </v-flex>
    <v-flex md4 xs12>
      <FormAlert
          :error="error"
          :hint="data.hint"
          :showHint="showHint"
      />
    </v-flex>
  </v-layout>
</template>

<script>
  import inputMixin from '../../mixins/inputMixin';
  import FormAlert from "./FormAlert";

  export default {
    name: "InputText",
    components: {FormAlert},
    mixins: [inputMixin]
  }
</script>

<style scoped>

</style>