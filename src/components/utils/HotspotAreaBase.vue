<script>
import Utils from '@/utils/Utils';

export default {
  name: 'hotspot-area-base',

  mixins: [Utils],

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
};
</script>

<style>
.interactive-area {
  position: relative;
  overflow: hidden;
  display: inline-block;
}
.background,
.interactive-area {
  max-width: 800px;
  max-height: 800px;
  min-width: 480px;
  min-height: 480px;
  width: 100%;
  height: auto;
}
</style>
