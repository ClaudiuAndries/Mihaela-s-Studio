let maxPhotos = 0;
async function loadImagesFromFolder(folderPath) {
	const response = await fetch(folderPath);
	const text = await response.text();
	const parser = new DOMParser();
	const htmlDoc = parser.parseFromString(text, 'text/html');
	const files = htmlDoc.querySelectorAll('a');
	let index = 1;
	
	for (let i = 0; i < files.length; i++) {
	  const fileName = files[i].textContent.trim();
	  const fileExtension = fileName.split('.').pop();
	  if (fileExtension.match(/^(jpe?g|png|gif)$/)) {
		const image = document.createElement('img');
		var paragraph = document.createElement('p');
		image.src = `${folderPath}/${fileName}`;
		image.setAttribute("Image-Name", fileName);
		image.setAttribute("data-index", index);
		maxPhotos = index;
		index++;
		//load text file
		const txtFileName = fileName.replace(fileExtension, 'txt');
		paragraph.textContent = await loadTextForImages(`${folderPath}/${txtFileName}`);
		
		image.onclick = () => {
		  document.querySelector('.Popup-Image').style.display = 'block';
		  document.querySelector('.Popup-Image img').src = image.getAttribute('src');
		  document.querySelector('.Popup-Image img').setAttribute("data-index", image.getAttribute('data-index'));
		  document.querySelector('#social').style.display = 'none';
		}
		const imageContainer = document.getElementById('Image-Container');
		const data = document.createElement("div");
		data.id = "Show-Data";
		data.appendChild(image);
		data.appendChild(paragraph);
		imageContainer.appendChild(data);
	  }
	}
  }

  function loadTextForImages(path) {
	return fetch(path)
	  .then(response => response.text())
	  .then(txt => {
		if(txt.includes('Descriere:'))
		{
			const descriereIndex = txt.indexOf('Descriere:');
			const textContent = txt.substring(descriereIndex + 'Descriere:'.length);
			return textContent;
		}
		else
		return '';
	  })
	  .catch(error => console.error(error));
  }

document.querySelector('.Popup-Image span').onclick = () => 
{
	document.querySelector('.Popup-Image').style.display = 'none';
	if(window.innerWidth > 900)
	{
		document.querySelector('#social').style.display = 'block';
	}
}

// prev and next btn

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

//prev btn
prevBtn.addEventListener('click', () => 
{
	const currentIndex = parseInt(document.querySelector('.Popup-Image img').getAttribute('data-index'));
    let prevIndex = currentIndex - 1;
	if(prevIndex < 1)
	{
		prevIndex = maxPhotos;
	}
    const prevImage = document.querySelector(`[data-index='${prevIndex}']`);
    if (prevImage) {
        document.querySelector('.Popup-Image img').src = prevImage.getAttribute('src');
        document.querySelector('.Popup-Image img').setAttribute('data-index', prevIndex);
    }
});

nextBtn.addEventListener('click', () => 
{
	const currentIndex = parseInt(document.querySelector('.Popup-Image img').getAttribute('data-index'));
    let nextIndex = currentIndex + 1;
	if(maxPhotos < nextIndex )
	{
		nextIndex = 1;
	}
    const nextImage = document.querySelector(`[data-index='${nextIndex}']`);
    if (nextImage) {
        document.querySelector('.Popup-Image img').src = nextImage.getAttribute('src');
        document.querySelector('.Popup-Image img').setAttribute('data-index', nextIndex);
    }
});
