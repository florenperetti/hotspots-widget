const state = {
  markers: [],
};

const mutations = {
  SET_MARKER(context, marker) {
    state.markers.push(marker);
  },
  LOAD_MARKERS(context, markers) {
    state.markers = markers;
  },
};

const actions = {
  addMarker: ({ commit }, marker) => {
    let markers = localStorage.getItem('markers');
    markers = JSON.parse(markers);
    markers.push(marker);
    localStorage.setItem('markers', JSON.stringify(markers));
    commit('SET_MARKER', marker);
  },

  loadMarkers: ({ commit }) => {
    const markers = localStorage.getItem('markers');
    if (markers) {
      commit('LOAD_MARKERS', JSON.parse(markers));
    } else {
      localStorage.setItem('markers', JSON.stringify([]));
    }
  },

  setMarkers: ({ commit }, markers) => {
    commit('LOAD_MARKERS', markers);
    localStorage.setItem('markers', JSON.stringify(markers));
  },
};

const getters = {
  getMarkers(context) {
    return context.markers;
  },
};

export default {
  state, mutations, actions, getters,
};
