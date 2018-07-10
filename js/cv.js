// Template
Vue.component('cv-block', {
	props:['education'],
	template: `<div>
				<p style="font-size:1.25rem">
					{{education.title}}
				</p>
				<p class="font-italic">
					{{education.org}}
				</p>
				<br>
				</div>`
})
var cvApp = new Vue({
	el: '#cvApp',
	data:{
		titleList:["Education", "Industrial Experience", "Research Experience", "Awards"],
		educationList:[
			{id:0,title:"Bachelor of Engineering in Computer Science (Honours - Highest Distinction)", org:"Nanyang Technological University, Singapore"}
		],
		industryList:[
			{id:1,title:"Technology Analyst @ Equity Department (Jan.2017 - Jul.2017)", org:"Bank of America Merrill Lynch, Singapore"},
			{id:2,title:"Web Engineer @ Game Operation Department (Jul.2018 - Now)", org:"SEA Group, Singapore"}
		],
		researchList:[
			{id:3,title:"NTU President Research Scholar (Aug.2015 - Aug.2016)", org:"Nanyang Technological University, Singapore"}
		],
		awardList:[
			{id:4,title:"SM2 Government Scholarship", org:"Ministry of Education, Singapore"}
		]
	}
})