var assets = document.querySelector('a-assets');
assets.addEventListener('loaded', function() {
  console.log('Loaded')
});

var scene = document.querySelector('a-scene');
scene.addEventListener('renderstart', function() {
  console.log('Loaded')
})