module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    proxy: 'http://backend.verdemeuduende.com.br/',
  },
};
