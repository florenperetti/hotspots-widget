<template>
  <svg class="line" :width="width" :height="height">
    <line :x1="x1" :y1="y1" :x2="x2" :y2="y2"
    :stroke-width="strokeWidth"
    :stroke="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'hostpot-line',

  props: [
    'width',
    'height',
    'x1',
    'y1',
    'x2',
    'y2',
    'color',
    'strokeWidth',
  ],
};
</script>

<style>
.line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>
