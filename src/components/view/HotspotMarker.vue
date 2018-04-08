<template>
  <div class="marker"
    :class="activeClass"
    :style="markerStyle"
    @click="$emit('clickHotspot')">
    {{marker.text}}
  </div>
</template>

<script>
export default {
  name: 'hotspot-marker',

  props: ['marker', 'activeClass', 'markerStyle'],
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
