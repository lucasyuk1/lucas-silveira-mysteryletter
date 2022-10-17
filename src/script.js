window.onload = function () {
  let iValue = document.getElementById('carta-texto');
  let letter = document.getElementById('carta-gerada');
  let bCreate = document.getElementById('criar-carta');
  let wordsCount = document.getElementById('carta-contador');
  let arrayStyle = ['newspaper', 'magazine1', 'magazine2'];
  let arraySize = ['medium', 'big', 'reallybig'];
  let arrayRotation = ['rotateleft', 'rotateright'];
  let arrayInclination = ['skewleft', 'skewright'];
  let count = 0;
  wordsCount.innerText = count;

  function addText() {
    count = 0;
    if (iValue.value === '' || iValue.value === ' ') {
      letter.innerText = 'Por favor, digite o conteúdo da carta.';
      return;
    }
    
    letter.innerHTML = '';
    let inputVale = iValue.value;
    let pArray = inputVale.split(' ');
    for (let i = 0; i < pArray.length; i += 1) {
      let createSpan = document.createElement('span');
      createSpan.style.display = 'inline-block';
      createSpan.className = generateClass();
      createSpan.innerText = `${pArray[i]}`;
      letter.appendChild(createSpan);
      count +=1;
    }
    wordsCount.innerText = count;
  }

  function generateClass() {
    let arrayStyleNew = arrayStyle[Math.floor(Math.random() * arrayStyle.length)];
    let arraySizeNew = arraySize[Math.floor(Math.random() * arraySize.length)];
    let arrayRotationNew = arrayRotation[Math.floor(Math.random() * arrayRotation.length)];
    let arrayInclinationNew = arrayInclination[Math.floor(Math.random() * arrayInclination.length)];
    return `${arrayStyleNew} ${arraySizeNew} ${arrayRotationNew} ${arrayInclinationNew}`;
  }

  // Mudando as classes no click de uma palavra

  document.addEventListener('click', function wordStyle(event) {
    if (event.target.classList != '') {        
      event.target.classList = generateClass();
    }
  });


  bCreate.addEventListener('click', addText);


}