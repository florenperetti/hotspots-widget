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
  }
  .background {
    max-width: 800px;
    max-height: 800px;
    min-width: 480px;
    min-height: 480px;
  }
  .markers {
    margin: 0;
    padding: 0;
    list-style-position: inside;
  }
  .markers.n {
    list-style-type: decimal;
  }
  .markers.rn {
    list-style-type: upper-roman;
  }
  .markers.al {
    list-style-type: lower-alpha;
  }
  .markers.au {
    list-style-type: upper-alpha;
  }
</style>
