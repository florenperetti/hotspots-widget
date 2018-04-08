<template>
  <div class="area">
    <h1>{{config.title}}</h1>
    <div class="interactive-area" ref="area" @click="addMarker">
      <MarkerEdit
        :key="marker.x + marker.y"
        v-for="(marker, index) in markers"
        :tabindex="index"
        :marker="marker"
        :listStyle="config.markerStyle"
        :order="index"
        :selectedMarker="selectedMarker"
        @markerClicked="setSelectedMarker"
      >
      </MarkerEdit>
      <img class="background" :src="config.imageUrl" alt="config.title">
    </div>
  </div>
</template>

<script>
import HotspotAreaBase from '@/components/utils/HotspotAreaBase';
import MarkerEdit from '@/components/edit/MarkerEdit';

export default {
  name: 'hotspot-edit-area',

  mixins: [HotspotAreaBase],

  components: {
    MarkerEdit,
  },

  data() {
    return {
      selectedMarker: null,
    };
  },

  methods: {
    setSelectedMarker(marker) {
      this.$emit('editMarker', marker);
    },

    addMarker(event) {
      event.stopPropagation();
      const mouseX = event.pageX;
      const mouseY = event.pageY;

      const coordXPixels = mouseX - this.$refs.area.offsetLeft - 16;
      const coordYPixels = mouseY - this.$refs.area.offsetTop - 16;

      const coordXPorc = (coordXPixels * 100) / this.$refs.area.offsetWidth;
      const coordYPorc = (coordYPixels * 100) / this.$refs.area.offsetHeight;

      this.newMarker = {
        x: coordXPorc,
        y: coordYPorc,
      };

      this.$emit('newMarker', this.newMarker);
    },
  },
};
</script>
