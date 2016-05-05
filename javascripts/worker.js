// The SW will be shutdown when not in use to save memory,
// be aware that any global state is likely to disappear
self.addEventListener('install', function(event) {
  console.log("Installing…");

  event.waitUntil(
    somethingThatReturnsAPromise().then(function() {
      console.log("Installed!");
    })
  );
});
