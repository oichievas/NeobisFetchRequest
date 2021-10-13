// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => console.log(json)
//   )

let section = document.querySelector('.div');

fetch('https://jsonplaceholder.typicode.com/posts')
	.then(res => { 
		if (res.status !== 200) {  
			alert('Status Code: ' + res.status);  
			return;  
		}
		res.json().then(data => {  
			data.forEach((item) => { 
				let content = ` 
					<h3 class='title'>${item.title}</h3>
					<p class='descr'>${item.body}</p> 
				` 
				let wrapper = document.createElement('div'); 
				wrapper.className = 'card'
				wrapper.innerHTML = content 
				section.appendChild(wrapper)
			}) 
		});
	}).catch((err) => {
		console.error(err);
	}); 

  