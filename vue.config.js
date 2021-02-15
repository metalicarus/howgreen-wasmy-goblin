module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://backend.verdemeuduende.com.br',
        ws: true,
        changeOrigin: true,
      },
    },
    port: 8081,
  },
};
