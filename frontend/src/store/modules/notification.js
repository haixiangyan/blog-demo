export const notification = {
  state: {
    isShow: false,
    title: '',
    type: 'info'
  },

  getters: {

  },

  mutations: {
    // trigger notification
    trigger(state, payload) {
      state.isShow = true;
      state.title = payload.title;
      state.type = payload.type;

      // Hide notification after 1.5 second
      setTimeout(() => {
        state.isShow = false;
        state.title = '';
        state.type = 'info';
      }, 3000);
    },
  },

  actions: {

  }
}