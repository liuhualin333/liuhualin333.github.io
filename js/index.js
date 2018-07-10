// Contact List Component
Vue.component('contact-block', {
	props: ['type'],
	template: `<div :class="type.class">
					<h4 class="text-white">Contact Me</h4>
					<ul :class="type.ulclass">
						<slot></slot>
					</ul>
				</div>`
})
Vue.component('contact-item', {
	props: ['contact'],
	template: `<li class="pr-md-4 pr-lg-4">
				<a :href="contact.link">
					<span :class="contact.afclass" style="font-size:36px;color:white"></span>
				</a>
			</li>`
})
// NavBar List Component
Vue.component('navbar-item', {
	props: ['item'],
	template: `<li class="nav-item"><a class="nav-link" :href="item.link">{{ item.name }}</a></li>`
})
var footerApp = new Vue({
	el: '#footerApp',
	data: {
		largeContact:{class:"col-6 col-sm-4 offset-md-1 py-4 d-none d-md-block", ulclass:"list-unstyled d-flex py-2"},
		smallContact:{class:"col-6 col-sm-4 offset-md-1 py-4 d-block d-md-none mx-auto text-center", ulclass:"list-unstyled d-flex px-2 py-2 mx-auto justify-content-between"},
		brandList: [
			{ id: 0, link: 'https://github.com/liuhualin333/', afclass:"fab fa-github" },
			{ id: 1, link: 'https://www.linkedin.com/in/visionaryliu/', afclass:"fab fa-linkedin" },
			{ id: 2, link: 'mailto:liuhualin333@gmail.com', afclass:"fas fa-envelope"}
		]
	}
})
var contactApp = new Vue({
	el: '#navbarItemApp',
	data: {
		name: "Hualin Liu",
		itemList: [
			{ id: 0, link: './cv.html', name:"Curriculum Vitae" },
			{ id: 1, link: './blog.html', name:"Articles" }
		]
	}
})
function resizeImage() {
    //calculations here...

}

window.addEventListener('resize', resizeImage, false);