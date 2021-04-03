const elements = document.querySelectorAll('[data-parallax]');

elements.forEach( element => {
  let elementHeight = element.offsetHeight;
  element.style.backgroundSize = 'auto ' + elementHeight * 3 + 'px';
  element.style.backgroundPositionY = -elementHeight + "px";
});

window.addEventListener('scroll', event => {
  let offsetY = window.pageYOffset;
  
  for(let i = 0; i < elements.length; i++){
    let layer = elements[i];
    let multiplier = parseFloat( layer.getAttribute('data-parallax') );
    let lastPosition =  parseFloat(layer.style.backgroundPositionY);
    let layerOffsetY = layer.offsetTop;
    let pageHeight = offsetY + layer.offsetHeight;
    let layerHeight = layerOffsetY + layer.offsetHeight;
    console.log('as' , lastPosition);
    
    let movement = -(offsetY - layerOffsetY) * multiplier;
    movement = movement - layer.offsetHeight;
   
    console.log(movement);
    
    if( layerHeight >= layerOffsetY && offsetY <= layerHeight )
      layer.style.backgroundPositionY = movement + 'px';
  }
  
});