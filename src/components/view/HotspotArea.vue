<template>
  <div class="area">
    <h1>{{config.title}}</h1>
    <div class="interactive-area" ref="area"
    @keyup.tab="fordward"
    @keyup.shift.tab="backward"
    >
      <Hotspots
        ref="list"
        :key="marker.x + marker.y"
        v-for="(marker, index) in markers"
        :tabindex="index"
        :order="index"
        :marker="marker"
        :listStyle="config.markerStyle"
        :selectedMarker="selectedMarker"
        @markerClicked="setSelectedMarker"
        @keyup.enter.native="enter"
      >
      </Hotspots>
      <img class="background" :src="config.imageUrl" alt="config.title">
    </div>
  </div>
</template>

<script>
import HotspotAreaBase from '@/components/utils/HotspotAreaBase';
import Hotspots from '@/components/view/Hotspots';

export default {
  name: 'hotspot-area',

  mixins: [HotspotAreaBase],

  components: {
    Hotspots,
  },

  data() {
    return {
      selectedMarker: null,
      index: -1,
      current: null,
    };
  },

  methods: {
    setSelectedMarker(marker) {
      this.selectedMarker = marker;
    },

    fordward() {
      if (this.index + 1 === this.$refs.list.length) {
        this.index = 0;
      } else {
        this.index += 1;
      }
      this.$refs.list[this.index].$el.focus();
      this.current = this.$refs.list[this.index];
    },

    backward() {
      if (this.index - 1 < 0) {
        this.index = this.$refs.list.length - 1;
      } else {
        this.index -= 1;
      }
      this.$refs.list[this.index].$el.focus();
      this.current = this.$refs.list[this.index];
    },

    enter() {
      this.current.$children[0].clickHotspot();
    },
  },
};
</script>

<style>
.wrapper:focus .marker {
  box-shadow: 0 0 5px 2px #FFFFFF;
}
</style>
