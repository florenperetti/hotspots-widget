<template>
  <section class="editor">
    <p>
      <label for="title">Widget Title: </label>
      <input id="title" type="text" v-model="configuration.title">
    </p>
    <p>
      <label for="bgUrl">Background Image URL: </label>
      <input id="bgUrl" type="text" v-model="configuration.imageUrl">
    </p>
    <p>
      <label for="bgUrl">Hotspot Marker Style: </label>
      <select id="style" v-model="configuration.markerStyle">
        <option :key="ms.key" :value="ms.key" v-for="ms in markerStyles">{{ms.label}}</option>
      </select>
    </p>
    <p>
      <button @click="saveConfiguration">Save</button>
    </p>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'editor',

  data() {
    return {
      configuration: {
        title: '',
        imageUrl: '',
        markerStyle: '',
      },
      markerStyles: [
        { key: 'n', label: 'Numeral' },
        { key: 'rn', label: 'Roman Numeral' },
        { key: 'au', label: 'Alphabetic Uppercase' },
        { key: 'al', label: 'Alphabetic Lowercase' },
      ],
    };
  },

  computed: {
    ...mapGetters([ 'getConfig' ]),
  },

  methods: {
    ...mapActions([
      'loadConfiguration',
      'storeConfiguration',
    ]),

    saveConfiguration() {
      this.storeConfiguration(this.configuration);
      this.$emit('changeMode');
    },
  },

  created() {
    this.loadConfiguration();
    this.configuration = this.getConfig;
  },
};
</script>

<style>
.editor {
  text-align: left;
}
</style>
