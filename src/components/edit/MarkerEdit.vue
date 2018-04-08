<template>
  <HotspotMarker
    :markerStyle="markerCoords"
    :marker="marker"
    :order="order"
    :listStyle="listStyle"
    @clickHotspot="$emit('markerClicked', marker)">
  </HotspotMarker>
</template>

<script>
import HotspotMarker from '@/components/view/HotspotMarker';

export default {
  name: 'marker-edit',

  data() {
    return {
      markerCoords: {
        left: 0,
        top: 0,
      },
    };
  },

  components: {
    HotspotMarker,
  },

  props: ['marker', 'order', 'listStyle'],

  created() {
    this.markerCoords.left = `${this.marker.x}%`;
    this.markerCoords.top = `${this.marker.y}%`;
  },
};
</script>
