// document.getElementById('header').innerHTML =
// `
// <image class="Logo" src="../logoPng.png" >
// <nav>
	
// <ul class = "TestUl">
// 	<a href="../index.html">Home</a>
// 	<li><a href="../AboutPage.html">About</a></li>
	
// 	<li><a href="../GalleryPage.html">Gallery</a></li>
// 	<li><a href="../ExibitionsPage.html">Exibitions</a></li>
// 	<div class="Gallery-Button"></li>
//         <a href="../GalleryPage.html">Store</a></li>
// 		<div class="Gallery-Dropdown">
// 			<a href="IconsPage.html">Icons</a>
// 			<a href="PortraitsPage.html">Portraits</a>
// 			<a href="AnimalsPage.html">Animals</a>
// 		</div>
// 	</div>
// 	<li><a href="../ContactPage.html">Contact</a></li>
	
// 	</ul>
// </nav>
// `


document.getElementById('social').innerHTML = 
`
<a href="https://www.facebook.com/MihaelaColours" target="_blank">Facebook <i class="fab fa-facebook"></i></a>
<a href="https://www.youtube.com/@Mihaela_Anton_Artist" target="_blank">Youtube <i class="fab fa-youtube"></i></a>
<a href="https://www.instagram.com/ma_artist909/" target="_blank">Instagram <i class="fab fa-instagram"></i></a>
<a href="https://www.tiktok.com/@ma.artist909" target="_blank">TikTok <i class="fab fa-tiktok" style="color: white"></a>
`


document.getElementById('footer').innerHTML =
`
	<p>© Copyright 2023. All Rights Reserved</p>
`
  
  async function loadIconsFromFolder(folderPath) {
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
		console.log(`${folderPath}/${fileName}`);
		image.setAttribute("data-index", index);
		maxPhotos = index;
		index++;
		//load text file
		
		image.onclick = () => {
			const encodedFileName = encodeURIComponent(fileName);
			//check if is start with store
			const isSubfolder = folderPath.startsWith('Store/');
			const subfolder = isSubfolder ? folderPath.substring(6) : folderPath;
			const encodedSrc = encodeURIComponent(`${subfolder}/${fileName}`);
		// const encodedSrc = encodeURIComponent(`/Store/${folderPath}/${fileName}`);
			const queryString = `?fileName=${encodedFileName}&src=${encodedSrc}`;
			const url = `/Store/ProductInfo.html${queryString}`;
			window.location.href = url;
		}
		const imageContainer = document.getElementById('Image-Container');
		imageContainer.appendChild(image);
		imageContainer.appendChild(paragraph);
	  }
	}
  }