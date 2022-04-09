window.onscroll = function(ev) {
  const animationParcours = document.getElementById('parcours')
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    animationParcours.classList.add('animation');
  }else{
    animationParcours.classList.remove('animation');

  };
};

