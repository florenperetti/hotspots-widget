const state = {
  markers: [],
};

const mutations = {
  LOAD_MARKERS(context, markers) {
    state.markers = markers;
  },
};

const actions = {
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
