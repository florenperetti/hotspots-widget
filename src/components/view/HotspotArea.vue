<template>
  <div class="interactive-area" ref="area">
    <Hotspots
      :key="marker.x + marker.y"
      v-for="marker in markers"
      :marker="marker"
      :selectedMarker="selectedMarker"
      @markerClicked="setSelectedMarker"
    >
    </Hotspots>
    <img :src="config.imageUrl" alt="config.title">
  </div>
</template>

<script>
import Hotspots from '@/components/view/Hotspots';
import Utils from '@/utils/Utils';

export default {
  name: 'hotspot-area',

  mixins: [Utils],

  components: {
    Hotspots,
  },

  data() {
    return {
      selectedMarker: null,
    };
  },

  props: {
    markers: {
      type: Array,
      required: true,
    },
    config: {
      type: Object,
      required: true,
    },
  },

  methods: {
    setSelectedMarker(marker) {
      this.selectedMarker = marker;
    },
  },
};
</script>

<style>
  .interactive-area {
    position: relative;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>
