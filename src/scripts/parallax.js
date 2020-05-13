const parallax = document.querySelector('.parallax');
const layers = parallax.children;
const parallaxBudda = document.querySelector('.parallax__budda');
const layersBudda = parallaxBudda.children;


function moveLayers (wScroll) {
  Array.from(layers).forEach(layer => {
    const divider = layer.dataset.speed;
    const strafe = wScroll * divider / 10;
    layer.style.transform = `translateY(-${strafe}%)`;
  });

  Array.from(layersBudda).forEach(layerBudda => {
    const dividerBudda = layerBudda.dataset.speed;
    const strafeBudda = (wScroll - 3000) * dividerBudda / 10;
    layerBudda.style.transform = `translateY(-${strafeBudda}%)`;
  });

  
}

window.addEventListener("scroll", e => {

    const wScroll = window.pageYOffset;
    moveLayers(wScroll);
    
  })


