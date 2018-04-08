<template>
  <div class="marker"
    :class="activeClass"
    :style="markerStyle"
    :listStyle="listStyle"
    @click="clickHotspot"
    >
    {{format(order)}}
  </div>
</template>

<script>
import Utils from '@/utils/Utils';

export default {
  name: 'hotspot-marker',

  mixins: [Utils],

  props: ['marker', 'activeClass', 'markerStyle', 'order', 'listStyle'],

  methods: {
    clickHotspot(event) {
      if (event) {
        event.stopPropagation();
      }
      this.$emit('clickHotspot');
    },
    format(order) {
      switch (this.listStyle) {
        case 'au':
          return this.numberToLetterUppercase(order);
        case 'al':
          return this.numberToLetter(order);
        case 'rn':
          return this.numberToRoman(order);
        default:
          return order + 1;
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
  cursor: pointer;
  height: 32px;
  line-height: 32px;
  position: absolute;
  width: 32px;
  z-index: 15;
}
</style>
