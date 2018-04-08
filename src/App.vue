<template>
  <div id="app">
    <div v-if="!editMode">
      <ViewMarkers></ViewMarkers>
      <button tabindex="-1" @click="editMode = true" >Edit</button>
    </div>
    <Editor @closeEditor="editMode = false" v-else></Editor>
  </div>
</template>

<script>
import ViewMarkers from '@/components/view/ViewMarkers';
import Editor from '@/components/edit/Editor';
import { mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    ViewMarkers,
    Editor,
  },

  data() {
    return {
      editMode: false,
      hotspot: [
        {
          x: 16.25,
          y: 6.94444,
          text: 'a',
          content: '<h2>A title</h2><h3>A subtitle</h3>Lorem ipsum dolor sit amet, con sed beatae ut consequuntur quod error maxime? Asperiores minus veritatis adipisci error pariatur tempora iusto, quibusdam recusandae expedita.',
          position: 'center',
        },
        {
          x: 80.625,
          y: 11.3095,
          text: 'b',
          content: '<h2>Another title</h2><h3>Another subtitle</h3>Lorem ipsum dolor sit amet, con sed beatae ut consequuntur quod error maxime? Asperiores minus veritatis adipisci error pariatur tempora iusto, quibusdam recusandae expedita. Asperiores minus veritatis adipisci error pariatur tempora iusto, quibusdam recusandae expedita. Asperiores minus veritatis adipisci error pariatur tempora iusto, quibusdam recusandae expedita.<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnhcTUn8tzWTZKNZCljwL_3JJYnum9G9E8OfoBtIZXTm-sVE-">',
          position: 'left',
        },
      ],
      widget: {
        imageUrl: 'http://fondos.fondoshd.com/images/800/planeta-azul-5303c81748a17.jpg',
        title: 'Hotspot Widget',
        markerStyle: 'rn',
      },
    };
  },

  methods: {
    ...mapActions([
      'setMarkers',
      'storeConfiguration',
    ]),
  },

  created() {
    if (localStorage.getItem('markers')) {
      this.setMarkers(JSON.parse(localStorage.getItem('markers')));
    } else {
      this.setMarkers(this.hotspot);
    }
    if (localStorage.getItem('config')) {
      this.storeConfiguration(JSON.parse(localStorage.getItem('config')));
    } else {
      this.storeConfiguration(this.widget);
    }
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;
  max-height: 800px;
  min-width: 400px;
  min-height: 400px;
}
button {
  background-color: #0078e7;
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  padding: .5em 1em;
  text-decoration: none;
}
button:hover {
  filter: alpha(opacity=90);
  background-image: -webkit-linear-gradient(#0000,#0000000d 40%,#0000001a);
  background-image: linear-gradient(#0000,#0000000d 40%,#0000001a);
}
button:active {
  box-shadow: 0 0 0 1px rgba(0,0,0,.15) inset, 0 0 6px rgba(0,0,0,.2) inset;
}
.cancel {
  text-decoration: none;
  color: #2c3e50;
  padding: .5em 1em;
}
button:disabled {
  color: #9c9c9c;
  background-color: #0261b9;
}
button.warning {
  background: #df7514;
}
</style>
