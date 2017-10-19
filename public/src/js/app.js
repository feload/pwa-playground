var deferredPrompt;

// Check to see if service workers are supported.
if('serviceWorker' in navigator) {

  // Register service worker.
  var swConf = {};

  navigator
    .serviceWorker
    .register('/sw.js', swConf)
    .then(function(){
      console.log('Service worker registered.');
    });
}

window.addEventListener('beforeinstallprompt', function (event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});