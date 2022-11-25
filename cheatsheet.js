fetch('https://unsplash.ist/800/600')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.blob();
  })
  .then((myBlob) => {
    let myImage = document.createElement('img');
    myImage.src = URL.createObjectURL(myBlob);
    console.log("success");
    document.querySelector('body').appendChild(myImage);
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
});