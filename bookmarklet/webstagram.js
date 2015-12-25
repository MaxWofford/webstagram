var filters = ['ig-xpro2', 'ig-willow', 'ig-walden', 'ig-valencia',
'ig-toaster', 'ig-sutro', 'ig-sierra', 'ig-rise', 'ig-nashville', 'ig-mayfair',
'ig-lofi', 'ig-kelvin', 'ig-inkwell', 'ig-hudson', 'ig-earlybird', 'ig-brannan',
'ig-amaro', 'ig-1977'];

var randomFilter = filters[Math.round(Math.random() * (filters.length - 1))];
document.body.classList.add(randomFilter);
