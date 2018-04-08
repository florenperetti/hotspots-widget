<template>
  <HotspotArea :markers="getMarkers" :config="getConfig"></HotspotArea>
</template>

<script>
import HotspotArea from '@/components/view/HotspotArea';
import { mapGetters } from 'vuex';

export default {
  name: 'view-markers',

  components: {
    HotspotArea,
  },

  computed: {
    ...mapGetters([
      'getMarkers',
      'getConfig',
    ]),
  },
};
</script>
