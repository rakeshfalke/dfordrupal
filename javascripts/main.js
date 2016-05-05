navigator.serviceWorker.register('javascripts/worker.js').then(function(reg) {
  console.log("SW Ok",reg);
}, function(err) {
  console.log("SW Error",err);
});
