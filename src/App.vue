<template>
  <div id="app">
    <ViewMarkers></ViewMarkers>
  </div>
</template>

<script>
import ViewMarkers from '@/components/view/ViewMarkers';
import { mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    ViewMarkers,
  },

  data() {
    return {
      hotspot: [
        {
          x: 16.25,
          y: 6.94444,
          text: 'a',
          content: '<h2>A title</h2><h3>A subtitle</h3>Lorem ipsum dolor sit amet, con sed beatae ut consequuntur quod error maxime? Asperiores minus veritatis adipisci error pariatur tempora iusto, quibusdam recusandae expedita.',
          position: 'top',
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
        markerStyle: 'nr',
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
    this.setMarkers(this.hotspot);
    this.storeConfiguration(this.widget);
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
  justify-content: center;
}
</style>
