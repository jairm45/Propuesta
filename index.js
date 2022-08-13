const yesBtn = document.querySelector('#yesBtn');
yesBtn.addEventListener('click', function () {
      alert('sabia que ibas a decir que si uwu JAJAJA')
});


const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomV = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomV+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-%{ramdomX}%,-%{ramdomY}%)`);
})
