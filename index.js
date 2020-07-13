window.onload = function(){
	const mask = document.querySelector('.mask')
	const bigbox = document.querySelector('#bigbox')
	const smallbox = document.querySelector('#smallbox')
	const bigimg = document.querySelector('#bigimg')

	smallbox.onmouseover = function(){		
		mask.style.display = 'block'
		bigbox.style.display = 'block'
		smallbox.onmousemove = function(e){
			//鼠标伴随事件
			var e = e || window.event
			let top = e.clientY - smallbox.offsetTop - parseInt((mask.offsetHeight)/2)
			let left = e.clientX - smallbox.offsetLeft - parseInt((mask.offsetWidth)/2)
			if(top < 0){
				top = 0
			}else if(top > 250){
				top = 250
			}
			if(left > 150){
				left = 150
			}else if (left < 0){
				left = 0
			}
			mask.style.top = top + 'px'
			mask.style.left = left + 'px'
			//放大镜功能
			let btop = -top / (mask.offsetHeight/bigbox.offsetHeight)
			let bleft = -left / (mask.offsetWidth/bigbox.offsetWidth)
			bigimg.style.top = btop + 'px'
			bigimg.style.left = bleft + 'px'
		}
	}
	smallbox.onmouseout = function(){
		mask.style.display = 'none'
	}
}