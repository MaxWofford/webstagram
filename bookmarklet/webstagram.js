var filters = ['ig-xpro2', 'ig-willow', 'ig-walden', 'ig-valencia',
'ig-toaster', 'ig-sutro', 'ig-sierra', 'ig-rise', 'ig-nashville', 'ig-mayfair',
'ig-lofi', 'ig-kelvin', 'ig-inkwell', 'ig-hudson', 'ig-earlybird', 'ig-brannan',
'ig-amaro', 'ig-1977'];

// Get a random filter
var randomFilter = filters[Math.round(Math.random() * (filters.length - 1))];

// Remove all instagram filters applied to the body
var igClassRegex = new RegExp("ig-.+?( |\$)", 'g');
document.body.className = document.body.className.replace(igClassRegex, '');

// Add our random filter to the body
document.body.classList.add(randomFilter);
