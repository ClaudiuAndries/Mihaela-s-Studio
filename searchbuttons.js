document.getElementById('header').innerHTML =
`
<a href="/index.html">
<image class="Logo" src="/logoPng.png" ></a>
<nav>
	<ul class = "TestUl">
		<a href="/index.html">Home</a>
		<li><a href="/AboutPage.html">About</a></li>
				
		<li><a href="/GalleryPage.html">Gallery</a></li>
		<li><a href="/ExibitionsPage.html"'.html')">Exibitions</a></li>
		<div class="Gallery-Button">
		<li><a href="/StorePage.html">Store</a></li>
			<div class="Gallery-Dropdown">
				<a href="/Store/IconsPage.html">Icons</a>
				<a href="/Store/PortraitsPage.html">Portraits</a>
				<a href="/Store/AnimalsPage.html">Animals</a>
			</div>
		</div>
		<li><a href="/ContactPage.html">Contact</a></li>
	</ul>
</nav>

<div class="icon menu-btn">
	<i class="fas fa-bars"></i>
</div>
	
<div class="NavBar">
	<div class="icon cancel-btn">
		<i class="fas fa-times"></i>
	</div>
	<li><a href="/index.html">Home</a></li>
	<li><a href="/AboutPage.html">About</a></li>
	<li><a href="/GalleryPage.html">Gallery</a></li>
	<li><a href="/ExibitionsPage.html")">Exibitions</a></li>
	<li>
		<a href="/StorePage.html" class="Store-Dropdown">Store<i class="fas fa-caret-down"></i></a></a>
		<div class="Dropdown">
			<a href="/Store/IconsPage.html">Icons</a>
			<a href="/Store/PortraitsPage.html">Portraits</a>
			<a href="/Store/AnimalsPage.html">Animals</a>
		</div>
	</li>
	<li><a href="/ContactPage.html">Contact</a></li>
	<a href="https://www.facebook.com/MihaelaColours" target="_blank"> <i class="fab fa-facebook"></i></a>
	<a href="https://www.youtube.com/@Mihaela_Anton_Artist" target="_blank"><i class="fab fa-youtube"></i></a>
	<a href="https://www.instagram.com/ma_artist909/" target="_blank"><i class="fab fa-instagram"></i></a>
	<a href="https://www.tiktok.com/@ma.artist909" target="_blank"><i class="fab fa-tiktok" style="color: white"></i></a>

</div>

`

document.getElementById('social').innerHTML = 
`
<a href="https://www.facebook.com/MihaelaColours" target="_blank">Facebook <i class="fab fa-facebook"></i></a>
<a href="https://www.youtube.com/@Mihaela_Anton_Artist" target="_blank">Youtube <i class="fab fa-youtube"></i></a>
<a href="https://www.instagram.com/ma_artist909/" target="_blank">Instagram <i class="fab fa-instagram"></i></a>
<a href="https://www.tiktok.com/@ma.artist909" target="_blank">TikTok <i class="fab fa-tiktok" style="color: white"></i></a>
`
document.getElementById('footer').innerHTML =
`
	<p>© Copyright 2023. All Rights Reserved</p>
`
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navBar = document.querySelector(".NavBar");
// menuBtn.onclick = ()=>{
// 	navBar.classList.add("show");
// 	navBar.classList.remove("hide");
//   }

  
//   cancelBtn.onclick = ()=>{
// 	navBar.classList.remove("show");
// 	navBar.classList.add("hide");
//   }
menuBtn.addEventListener("click", () => {
    navBar.classList.add("show");
    navBar.classList.remove("hide");
});

cancelBtn.addEventListener("click", () => {
    navBar.classList.remove("show");
    navBar.classList.add("hide");
});