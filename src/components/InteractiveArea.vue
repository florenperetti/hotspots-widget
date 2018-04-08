<template>
  <div class="interactive-area" @click="addMarker" ref="area">
    <HotspotMarker :key="marker.x + marker.y" v-for="(marker, key) in getMarkers" :marker="marker">{{key + 1}}</HotspotMarker>
    <Modal v-if="showEditModal" :marker="newMarker"></Modal>
    <img :src="getBackgroundImage" alt="">
  </div>
</template>

<script>
import HotspotMarker from '@/components/HotspotMarker';
import Modal from '@/components/Modal';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'hotspots-widget',

  data() {
    return {
      newMarker: null,
      showEditModal: false
    };
  },

  components: {
    HotspotMarker,
    Modal,
  },

  created() {
    this.loadMarkers();
  },

  computed: {
    ...mapGetters([
      'getMarkers',
      'getBackgroundImage'
    ]),
  },

  methods: {
    ...mapActions({
      pushMarker: 'addMarker',
      loadMarkers: 'loadMarkers',
    }),

    addMarker(event) {
      const mouseX = event.pageX;
      const mouseY = event.pageY;
      
      const coordXPixels = mouseX - this.$refs.area.offsetLeft - 16;
      const coordYPixels = mouseY - this.$refs.area.offsetTop - 16;
      
      const coordXPorc = coordXPixels * 100 / this.$refs.area.offsetWidth;
      const coordYPorc = coordYPixels * 100 / this.$refs.area.offsetHeight;
      
      this.newMarker = {
        x: coordXPorc,
        y: coordYPorc,
      };

      this.showEditModal = true;

      this.pushMarker(this.newMarker);
    },
  },
};
</script>

<style>
  .interactive-area {
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>
