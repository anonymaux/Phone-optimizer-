self.addEventListener('install', function(e) {
  console.log("Service Worker installé");
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then(() => console.log("App installable ✅"))
  .catch(() => console.log("Erreur ❌"));
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}