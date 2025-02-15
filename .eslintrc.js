module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error', // Prettier ile uyumsuz her şey hata olarak gösterilir
  },
};
