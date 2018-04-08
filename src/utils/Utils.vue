<script>
export default {
  methods: {
    getCenter(el) {
      const element = el.$el || el;
      const centerX = (element.offsetLeft + element.offsetWidth) / 2;
      const centerY = (element.offsetTop + element.offsetHeight) / 2;
      return {
        x: centerX,
        y: centerY,
      };
    },
  },
};
</script>
