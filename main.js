function bookSearch(){

	var search = document.getElementById('search').value
	document.getElementById('results').innerHTML= ""
	
	
	$.ajax({url: "https://www.googleapis.com/books/v1/volumes?q="+ search,
	dataType: "json",
	
	success:function(data){
	
	
		for(i = 0; i < data.items.length; i++){
			
		if (data.items[i].volumeInfo.authors == null){
			document.getElementById('results').innerHTML+="<div class='item col-lg-3 col-md-6'>"+
								"<div id='imgdiv'><img  src=" + data.items[i].volumeInfo.imageLinks.smallThumbnail + "alt='img'></div>"+
								"<p>"+"<h3 style='color:lightblue;'>" + data.items[i].volumeInfo.title + "</h3>"+"</p>"+"</div>"
			}else {
				document.getElementById('results').innerHTML+= "<div class='item col-lg-3 col-md-6'>"+
								"<div id='imgdiv'><img  src=" + data.items[i].volumeInfo.imageLinks.smallThumbnail + "alt='img'></div>"+
								"<p>"+"<h3 style='color:lightblue;'>" + data.items[i].volumeInfo.title + "</h3>"+
								"<h3>by: " + data.items[i].volumeInfo.authors[0] + "</h3>"+"</p>"+"</div>"
			}
	
		}
		
		}, 
		type: 'GET'
		});
		
	}
	