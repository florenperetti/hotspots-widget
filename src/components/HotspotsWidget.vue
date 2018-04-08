<template>
<div class="widget__wrapper">
  <Editor v-if="editorMode" @changeMode="editorMode = !editorMode"></Editor>
  <InteractiveArea></InteractiveArea>
</div>
</template>

<script>
import InteractiveArea from '@/components/InteractiveArea';
import Editor from '@/components/Editor';

export default {
  name: 'hotspots-widget',

  components: {
    InteractiveArea,
    Editor,
  },

  data() {
    return {
      editorMode: true,
    };
  },
};
</script>

<style>
.widget__wrapper {
  border: 1px solid gray;
  max-width: 800px;
  min-width: 480px;
  max-height: 800px;
  min-height: 480px;
}
</style>
