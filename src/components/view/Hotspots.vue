<template>
  <div class="wrapper">
    <HotspotLine v-if="showModal"
      strokeWidth="2"
      width="100%"
      :x1="lineStartCoords.left" :y1="lineStartCoords.top"
      :x2="modalCenter.x" :y2="modalCenter.y"
      color="#F9B326"
    ></HotspotLine>
    <HotspotMarker
      :activeClass="showModal ? 'active' : ''"
      :markerStyle="markerCoords"
      :marker="marker"
      @clickHotspot="clickHotspot">
    </HotspotMarker>
    <Modal :style="modalMaxHeight" ref="modal" v-if="showModal" :marker="marker"></Modal>
  </div>
</template>

<script>
import Modal from '@/components/view/Modal';
import HotspotLine from '@/components/view/HotspotLine';
import HotspotMarker from '@/components/view/HotspotMarker';
import Utils from '@/utils/Utils';

export default {
  name: 'hotspots',

  mixins: [Utils],

  data() {
    return {
      showModal: false,
      modalCenter: {
        x: 0,
        y: 0,
      },
      markerCoords: {
        left: 0,
        top: 0,
      },
      lineStartCoords: {
        left: 0,
        top: 0,
      },
      modalMaxHeight: { maxHeight: '390px' },
    };
  },

  components: {
    Modal,
    HotspotLine,
    HotspotMarker,
  },

  props: ['marker', 'selectedMarker'],

  created() {
    this.markerCoords.left = `${this.marker.x}%`;
    this.markerCoords.top = `${this.marker.y}%`;
    this.lineStartCoords.left = `${this.marker.x + 0.5}%`;
    this.lineStartCoords.top = `${this.marker.y + 1.5}%`;
  },

  methods: {
    clickHotspot() {
      this.showModal = !this.showModal;
      if (this.showModal) {
        this.$emit('markerClicked', this.marker);
        this.$nextTick(() => {
          this.modalCenter = this.getCenter(this.$refs.modal);
        });
      }
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

.marker.active {
  height: 8px;
  width: 8px;
  font-size: 0;
}
</style>
