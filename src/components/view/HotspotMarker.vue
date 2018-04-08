<template>
  <div ref="marker" class="marker"
    :class="showModal ? 'active' : ''"
    :style="styles"
    @click="clickHotspot">
    {{marker.text}}
  </div>
</template>

<script>
import Utils from '@/utils/Utils';

export default {
  name: 'hotspot-marker',

  mixins: [Utils],

  data() {
    return {
      styles: {
        left: 0,
        top: 0,
      },
      showModal: false,
    };
  },

  props: ['marker', 'selectedMarker'],

  created() {
    this.styles.left = `${this.marker.x}%`;
    this.styles.top = `${this.marker.y}%`;
  },

  methods: {
    clickHotspot() {
      this.showModal = !this.showModal;
      this.$nextTick(() => {
        const hotspotCenter = this.getCenter(this.$refs.marker);
        this.$emit('hotspotClicked', this.showModal, hotspotCenter, this.marker, this.styles);
      });
    },
  },

  watch: {
    selectedMarker(value) {
      if (this.marker !== value) {
        this.showModal = false;
      }
    },
  },
};
</script>

<style>
.marker {
  background-color: #F9B326;
  border-radius: 50%;
  color: #424242;
  height: 32px;
  line-height: 32px;
  position: absolute;
  width: 32px;
}
.marker.active {
  height: 8px;
  width: 8px;
  font-size: 0;
}
</style>
