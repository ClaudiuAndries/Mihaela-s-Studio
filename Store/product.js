const urlParams = new URLSearchParams(window.location.search);
            const encodedFileName = urlParams.get('fileName');
const encodedSrc = removeDuplicateStoreFromPath(urlParams.get('src')) ;
const directoryName = encodedSrc.split('/')[0];
const fileName = decodeURIComponent(encodedFileName);
const src = decodeURIComponent(encodedSrc);
productImage.src = src;
var elements = document.getElementsByClassName("zoom");
for(var i=0; i<elements.length; i++) {
  elements[i].style.backgroundImage = `url(${productImage.src})`;
}

const nameWithoutExtension = fileName.split('.')[0];

//read

const filePathinfo = `${directoryName}/${nameWithoutExtension}/info.txt`;

            
fetch(filePathinfo)
.then(response => response.text())
.then(data => 
{
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(data, 'text/xml');

    const title = data.match(/Titlu:\s*(.*)/)[1];
    document.getElementById('Title').textContent = `${title}`;


    const description = data.match(/Descriere:\s*(.*)/)[1];
    document.getElementById('DescriptionText').textContent = description;

    const year = data.match(/An:\s*(.*)/)[1];
    document.getElementById('Year').textContent = `Year: ${year}`;

    const price = data.match(/Pret:\s*(.*)/)[1];
    document.getElementById('Price').textContent = `Price: ${price}`;

    const availability = data.match(/Disponibilitate:\s*(.*)/)[1];
    document.getElementById('Availability').textContent = `Disponibilitate: ${availability}`;

    const dimension = data.match(/Dimensiune:\s*(.*)/)[1];
    document.getElementById('Dimension').textContent = `Dimension: ${dimension}`;
})
.catch(error => console.log(error));

//load slide photo
async function displayImages() {
    try {
      const filePath = `${directoryName}/${nameWithoutExtension}`;
  
      const response = await fetch(filePath);
      const current = window.location.pathname;
      const text = await response.text();
  
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(text, 'text/html');
      const files = htmlDoc.querySelectorAll('a');
  
      for (let i = 0; i < files.length; i++) {
        const fileName = files[i].textContent;
        const fileExtension = fileName.split('.').pop();
        if (fileExtension.match(/^(jpe?g|png|gif)$/)) {
          const image = document.createElement('img');
          const folderPath = `${filePath}`;
          image.src = `${folderPath}/${fileName}`;
          image.onclick = () => {
            document.getElementById('productImage').src = image.src;
            for(var i=0; i<elements.length; i++) {
              elements[i].style.backgroundImage = `url(${productImage.src})`;
            }
          };
          const imageContainer = document.getElementById('Images-Product');
          imageContainer.appendChild(image);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  displayImages();

  function removeDuplicateStoreFromPath(path) {
    const index = path.indexOf('Store');
    if (index !== -1) {
      const nextIndex = path.indexOf('Store', index + 1);
      if (nextIndex !== -1) {
        path = path.slice(0, nextIndex) + path.slice(nextIndex + 'Store'.length);
      }
    }
    return path;
  }