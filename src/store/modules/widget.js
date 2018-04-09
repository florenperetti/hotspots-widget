const state = {
  configuration: {},
};

const mutations = {
  SAVE_CONFIGURATION(context, config) {
    state.configuration = config;
  },
};

const actions = {
  loadConfiguration: ({ commit }) => {
    const config = localStorage.getItem('config');
    if (config) {
      commit('SAVE_CONFIGURATION', JSON.parse(config));
    } else {
      localStorage.setItem('config', JSON.stringify({}));
    }
  },

  storeConfiguration: ({ commit }, config) => {
    localStorage.setItem('config', JSON.stringify(config));
    commit('SAVE_CONFIGURATION', config);
  },
};

const getters = {
  getConfig(context) {
    return context.configuration;
  },
};

export default {
  state, mutations, actions, getters,
};
