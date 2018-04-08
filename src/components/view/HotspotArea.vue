<template>
  <div class="interactive-area" ref="area">
    <HotspotLine v-show="showModal"
      :style="styles"
      height="100%"
      strokeWidth="2"
      :x1="hotspotCenter.x" :y1="hotspotCenter.y"
      :x2="modalCenter.x" :y2="modalCenter.y"
      color="#F9B326"
    ></HotspotLine>
    <Modal ref="modal" v-show="showModal" :marker="selectedMarker"></Modal>
    <HotspotMarker
      :key="marker.x + marker.y"
      v-for="marker in markers"
      :marker="marker"
      :selectedMarker="selectedMarker"
      @hotspotClicked="hotspotClicked"
    >
    </HotspotMarker>
    <img :src="config.imageUrl" alt="config.title">
  </div>
</template>

<script>
import HotspotMarker from '@/components/view/HotspotMarker';
import Modal from '@/components/view/Modal';
import HotspotLine from '@/components/view/HotspotLine';
import Utils from '@/utils/Utils';

export default {
  name: 'hotspot-area',

  mixins: [Utils],

  components: {
    Modal,
    HotspotLine,
    HotspotMarker,
  },

  data() {
    return {
      showModal: false,
      hotspotCenter: {
        x: 0,
        y: 0,
      },
      modalCenter: {
        x: 0,
        y: 0,
      },
      selectedMarker: null,
      styles: {
        left: 0,
        top: 0,
      },
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
    resetData() {
      this.hotspotCenter = {
        x: 0,
        y: 0,
      };
      this.modalCenter = {
        x: 0,
        y: 0,
      };
      this.selectedMarker = null;
      this.styles = {
        left: 0,
        top: 0,
      };
    },

    hotspotClicked(showModal, hotspotCenter, marker, styles) {
      if (!showModal) {
        this.resetData();
      } else if (this.showModal) {
        this.resetData();
        this.hotspotCenter = hotspotCenter;
        this.modalCenter = this.getCenter(this.$refs.modal);
        this.selectedMarker = marker;
        this.styles = styles;
      } else {
        this.hotspotCenter = hotspotCenter;
        this.modalCenter = this.getCenter(this.$refs.modal);
        this.selectedMarker = marker;
        this.styles = styles;
      }
      this.showModal = !this.showModal;
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
