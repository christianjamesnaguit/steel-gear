// nav hover effect
const navListItems = document.querySelectorAll('nav li');
navListItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.classList.add('hover');
  });

  item.addEventListener('mouseout', () => {
    item.classList.remove('hover');
  });
});

// peripheral item hover effect
document.addEventListener('mouseover', (event) => {
    if (event.target.id === 'item') {
      event.target.style.transform = 'scale(0.9)';
    }
  });
  
  document.addEventListener('mouseout', (event) => {
    if (event.target.id === 'item') {
      event.target.style.transform = 'scale(1)';
    }
});

// peripheral subnav item filter
function showItem(classNames) {
  var products = document.getElementsByClassName('product');

  if (classNames[0] === 'all') {
      for (var i = 0; i < products.length; i++) {
          products[i].style.display = 'block';
      }
  } else {
      for (var i = 0; i < products.length; i++) {
          var hideProduct = true;
          for (var j = 0; j < classNames.length; j++) {
              if (products[i].classList.contains(classNames[j])) {
                  hideProduct = false;
                  break;
              }
          }
          if (hideProduct) {
              products[i].style.display = 'none';
          } else {
              products[i].style.display = 'block';
          }
      }
  }
}
