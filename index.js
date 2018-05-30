(function(){
  const meter1 = document.getElementById('meter1'); 
  const plusFiveBtn = document.querySelector('.plus-10');
  
  plusFiveBtn.addEventListener('click', function() {
    meter1.value += 10;
  })
})();