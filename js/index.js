// Brand List Component
Vue.component('contact-item', {
	props: ['contact'],
	template: `<li class="pr-4">
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