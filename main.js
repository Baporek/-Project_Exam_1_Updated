 // https://baporek.com/project_exam_1/wp-json
        // https://baporek.com/project_exam_1/wp-json/wp/v2/posts

        axios.get('https://baporek.com/project_exam_1/wp-json/wp/v2/posts')
        .then(res => { render(res.data) })
        .catch(err => console.log(err))

		function render(arr) {
			let html = '';
			let innerHtml = '';
			let id = 1;
			for(let i=0; i<arr.length; i++) {
				innerHtml += `<div class="media-element">
						${arr[i].content.rendered}
				</div>`;
				if(i%3 === 0 && i !== 0) {
					html += `<div class="media-group" id="group-${id}">`;
					if(id>1) html += `<a class="previous" href="#group-${id-1}">
							<i class="bi bi-arrow-left-short" style="font-size: 30px"></i>
						</a>`;
					if(id<3) {
                        html +=	`${innerHtml}
						<a class="next" href="#group-${id+1}" aria-label="next">
							<i class="bi bi-arrow-right-short" style="font-size: 30px"></i>
						</a>
					</div>`
                    } else {
                        html +=	`${innerHtml}
						<a class="next" href="#group-1" aria-label="next">
							<i class="bi bi-arrow-right-short" style="font-size: 30px"></i></a>
						</div>`;
                    }
					innerHtml = '';
					id++;
				}
			}
            document.getElementById('render').innerHTML = html;
		}