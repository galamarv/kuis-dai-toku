function openPopup(folderName) {
     fetch(`/getRandomImage/${folderName}`)
         .then(response => response.json())
         .then(data => {
             const modal = document.getElementById('imageModal');
             const popupImage = document.getElementById('popupImage');
             const imageFileName = document.getElementById('imageFileName');
 
             // Get the image file name from the URL
             const imageName = data.imagePath.split('/').pop();
             
             popupImage.src = data.imagePath;
             imageFileName.textContent = `Image Name: ${imageName}`;
             modal.style.display = 'block';
         })
         .catch(error => console.error(error));
 }
 
 function closePopup() {
     const modal = document.getElementById('imageModal');
     modal.style.display = 'none';
 }
 