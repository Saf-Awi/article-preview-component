const shareBtn = document.querySelector(".share-icon");
const desktopShare = document.querySelector(".share-desktop");



  
shareBtn.addEventListener('click', function ()  {

    desktopShare.classList.toggle('hidden');

 
  });
