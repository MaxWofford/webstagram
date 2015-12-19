var els = document.getElementsByTagName('img');
for (var i = 0; i < els.length; i++) {
  var el = els[i];
  el.style.filter = "contrast(1.3) brightness(0.8) sepia(0.3) saturate(1.5) hue-rotate(-20deg)";
}
