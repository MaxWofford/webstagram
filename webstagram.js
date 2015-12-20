var filters = ['ig-xpro2', 'ig-willow', 'ig-walden', 'ig-valencia',
'ig-toaster', 'ig-sutro', 'ig-sierra', 'ig-rise', 'ig-nashville', 'ig-mayfair',
'ig-lofi', 'ig-kelvin', 'ig-inkwell', 'ig-hudson', 'ig-earlybird', 'ig-brannan',
'ig-amaro', 'ig-1977'];

var els = document.getElementsByTagName('img');
for (var i = 0; i < els.length; i++) {
  var el = els[i];
  var randomFilter = filters[Math.round(Math.random() * (filters.length - 1))];
  el.classList.add(randomFilter);
}
