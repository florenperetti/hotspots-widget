<template>
  <div class="modal" :class="marker ? marker.position : ''" v-html="marker ? marker.content : ''">
  </div>
</template>

<script>
export default {
  name: 'modal',

  props: ['marker'],
};
</script>

<style>
.modal {
  background-color: white;
  border: 2px solid #F9B326;
  color: #424242;
  font-size: 16px;
  line-height: 1.5rem;
  padding: 20px;
  width: 300px;
  overflow-y: auto;
  position: absolute;
  top: 10px;
  z-index: 20;
}
.modal.center {
  left: 25%;
}
.modal.left {
  left: 10px;
}
.modal.right {
  right: 10px;
}

</style>
