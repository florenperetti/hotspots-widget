<template>
  <div>
    <section class="editor">
      <div>
        <h3>Widget</h3>
        <p>
          <label for="title">Widget Title: </label>
          <input id="title" type="text" v-model="configuration.title">
        </p>
        <p>
          <label for="bgUrl">Background Image URL: </label>
          <input @change="markers = []" id="bgUrl" type="text" v-model="configuration.imageUrl">
        </p>
        <p>
          <label for="bgUrl">Hotspot Marker Style: </label>
          <select id="style" v-model="configuration.markerStyle">
            <option :key="ms.key" :value="ms.key" v-for="ms in markerStyles">{{ms.label}}</option>
          </select>
        </p>
        <p>
          <button @click="$emit('closeEditor')">Cancel</button>
          <button @click="save" v-show="!hotspot.x">Save & Close</button>
          <button @click="changeMode" v-show="!hotspot.x">
            <span v-if="!preview">Preview</span>
            <span v-else>Edit</span>
          </button>
        </p>
      </div>
      <div v-show="hotspot.x">
        <h3>Hotspot</h3>
        <p>
          <label for="h-position">Popup position:</label>
          <select ref="hPosition" id="h-position" v-model="hotspot.position">
            <option value="center" selected>Center</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </p>
        <p>
          <label for="h-content">Content: </label><br>
          <textarea id="h-content" type="text" v-model="hotspot.content"></textarea>
        </p>
        <button @click="cancelHotspot">Cancel</button>
        <button @click="addHotspot">Save</button>
        <button @click="deleteHotspot">Delete</button>
        <span class="help" v-show="helpTextOn">Add some content</span>
      </div>
    </section>
    <section v-if="!preview">
      <HotspotEditArea
        :markers="markers"
        :config="configuration"
        @newMarker="newHotspot"
        @editMarker="editHotspot"
      ></HotspotEditArea>
    </section>
    <section v-else>
      <HotspotArea :markers="markers" :config="configuration"></HotspotArea>
    </section>
  </div>
</template>
<script>
import HotspotEditArea from '@/components/edit/HotspotEditArea';
import HotspotArea from '@/components/view/HotspotArea';
import { mapActions, mapGetters } from 'vuex';
import Utils from '@/utils/Utils';

export default {
  name: 'editor',

  components: {
    HotspotEditArea,
    HotspotArea,
  },

  mixins: [Utils],

  data() {
    return {
      markers: [],
      isNewMarker: false,
      isEditMarker: false,
      helpTextOn: false,
      preview: false,
      configuration: {
        title: '',
        imageUrl: '',
        markerStyle: '',
      },
      hotspot: {
        content: null,
        text: null,
        position: null,
        x: null,
        y: null,
      },
      markerStyles: [
        { key: 'n', label: 'Numeral' },
        { key: 'rn', label: 'Roman Numeral' },
        { key: 'au', label: 'Alphabetic Uppercase' },
        { key: 'al', label: 'Alphabetic Lowercase' },
      ],
    };
  },

  computed: {
    ...mapGetters([
      'getConfig',
      'getMarkers',
    ]),
  },

  methods: {
    ...mapActions([
      'loadConfiguration',
      'storeConfiguration',
      'setMarkers',
    ]),

    save() {
      this.storeConfiguration(this.configuration);
      this.setMarkers(this.markers);
      this.$emit('closeEditor');
    },

    resetHotspot() {
      this.helpTextOn = false;
      this.hotspot = {
        content: null,
        position: null,
        x: null,
        y: null,
      };
      this.isNewMarker = false;
      this.isEditMarker = false;
    },

    newHotspot(marker) {
      if (!this.isNewMarker && !this.isEditMarker) {
        this.isNewMarker = true;
        this.hotspot.x = marker.x;
        this.hotspot.y = marker.y;
        this.markers.push(this.hotspot);
        this.$nextTick(() => {
          this.$refs.hPosition.focus();
        });
      } else if (!this.isNewMarker && this.isEditMarker) {
        this.$nextTick(() => {
          this.$refs.hPosition.focus();
        });
      }
    },

    editHotspot(marker) {
      if (!this.isNewMarker) {
        this.isEditMarker = true;
        this.hotspot = marker;
        this.$nextTick(() => {
          this.$refs.hPosition.focus();
        });
      }
    },

    cancelHotspot() {
      if (this.isNewMarker) {
        this.markers.splice(-1, 1);
      }
      this.resetHotspot();
    },

    deleteHotspot() {
      const v = this;
      this.markers.forEach((marker, index) => {
        if (marker.x === v.hotspot.x && marker.y === v.hotspot.y) {
          v.markers.splice(index, 1);
        }
      });
      this.resetHotspot();
    },

    changeMode() {
      this.preview = !this.preview;
      this.resetHotspot();
    },

    addHotspot() {
      if (this.hotspot.content === null || this.hotspot.content.trim() === '') {
        this.helpTextOn = true;
      } else {
        const v = this;
        this.markers.forEach((marker, index) => {
          if (marker.x === v.hotspot.x && marker.y === v.hotspot.y) {
            v.markers[index] = v.hotspot;
          }
        });
        this.resetHotspot();
      }
    },
  },

  created() {
    this.loadConfiguration();
    this.configuration = this.copyObject(this.getConfig);
    this.markers = this.copyObject(this.getMarkers);
  },
};
</script>

<style>
.editor {
  text-align: left;
}
.editor > div {
  width: 49%;
  display: inline-block;
  vertical-align: top;
}
</style>
