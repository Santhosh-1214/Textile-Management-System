const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",  // or 'live' for production
  client_id: 'AfoAMxx3Yz_nsdL9Mckx0Y4eAE-kTfHrCVUYf_iFosRtcu98wmUwq2wl4IIH9zF7-IXS8yBxrFnqO477',
  client_secret: 'EIv8dsDcCoxYAreGrB1gKi5--72nSIPFbrXrtu-RBXpPPw37s7Oo0fS9BtF-RbZhTzkZx2S7WE6Ma789'

});

module.exports = paypal;
