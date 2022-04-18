class MobileNavbar {
	contructor(mobileMenu,navList,navLinks) {
		this.mobileMenu = document.querySelector(mobileMenu);
		this.navList = document.querySelector(navList);
		this.navLinks = document.querySelectorAll(navLinks);
		this.activeClass = "active";
		
		this.handleClick = this.handClick.bind();
	}
	
	addClickEvent() {
		this.mobileMenu.addEventListener("click", () => console.log(Hey));
	}
	init() {
		if(this.mobileMenu) {
			this.addClickEvent();
		}
		return this;
	}
}


const mobileNavbar = new MobileNavbar(
	".mobile-menu",
	".nav-list",
	".nav-list li",

);
mobileNavbar.init();



