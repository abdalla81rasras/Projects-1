var lists = document.querySelectorAll(".lists .X li");
var Wrap = document.querySelectorAll(".wrap");
var list_view = document.querySelector(".list-view");
var grid_view = document.querySelector(".grid-view");

lists.forEach(function(link){
	link.addEventListener("click", function(){
		lists.forEach(function(link){
			link.classList.remove("active"); })

		link.classList.add("active");

		Wrap.forEach(function(view){
			view.style.display = "none";  })

        var data_view = link.getAttribute("data-view");

		if(data_view == "list-view"){
			list_view.style.display = "block";
		}
		else{
			grid_view.style.display = "block";  }
  })  });