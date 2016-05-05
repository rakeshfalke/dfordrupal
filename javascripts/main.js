navigator.serviceWorker.register('/worker.js').then(function(reg) {
  console.log('good to go', reg);
}, function(err) {
  console.log('ok error', err);
});
