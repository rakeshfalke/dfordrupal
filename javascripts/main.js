navigator.serviceWorker.register('/worker.js').then(function(reg) {
  console.log('◕‿◕', reg);
}, function(err) {
  console.log('ಠ_ಠ', err);
});
