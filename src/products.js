var products = [{
					"id": "100",
					"name": "iPhone 4S",
					"brand": "Apple",
					"os": "iOS"
				},
				{
					"id": "101",
					"name": "Moto X",
					"brand": "Motorola",
					"os": "Android"	
				},
				{
					"id": "102",
					"name": "iPhone 6",
					"brand": "Apple",
					"os": "iOS"
				},
				{
					"id": "103",
					"name": "Samsung Galaxy S",
					"brand": "Samsung",
					"os": "Android"
				},
				{
					"id": "104",
					"name": "Google Nexus",
					"brand": "ASUS",
					"os": "Android"
				},
				{
					"id": "105",
					"name": "Surface",
					"brand": "Microsoft",
					"os": "Windows"
				}];



buildTable()

function buildTable(){
	var html = '';	
     html += '<table id = "myTable"><tr><th>ID</th><th>NAME</th><th>BRAND</th><th>OS</th><th>action</th></tr>';
    for(i =0 ; i < products.length ; i++)
    {
        html += '<tr><td>'+products[i].id+'</td><td>'+products[i].name+'</td><td>'+products[i].brand+'</td><td>'+products[i].os+'</td><td><a href = "#" id="delId">X</a></td></tr>';
    }
    html += '</table>';
	$('#result').html(html);
}

$("body").on("click","#delId" ,function(e){
    $(this).parents('tr').remove();
  });

$("#myInput").on("keyup", function() {
	var value = $(this).val().toLowerCase();
	$("#myTable tr").filter(function() {
	$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	
	});
});
  

sortByOs = []
sortByBrand = []
var flagOs = 0
var flagBrand =0 
$("#selectField").on("change", function() {

	console.log("inside select fucntoin")	
   var selected = this.value;
   flagOs =1 
   console.log("selected"+selected)
   var j =0 ;
   for(var i =0 ; i < products.length ; i++){	
	   if(products[i].os == selected)
	   {
			sortByOs[j] = products[i].id
			j++
	   }
   }
   for(var i =0 ; i < sortByOs.length ; i++){
	console.log(sortByOs[i])
   }
display2(flagOs ,flagBrand)

});


$("#selectField2").on("change", function() {
	console.log("inside select2 fucntoin")	
   var selected = this.value;
   flagBrand = 1
   console.log("selected"+selected)

   var j =0 ;
   for(var i =0 ; i < products.length ; i++){
	   if(products[i].brand == selected)
	   {
			sortByBrand[j] = products[i].id
			j++
	   }
   }
   for(var i =0 ; i < sortByBrand.length ; i++){
	console.log(sortByBrand[i])
   }
   display2(flagOs ,flagBrand)

});

function display2(flagOs ,flagBrand)
{
	html1 = ''
	html1 += '<table id = "myTable"><tr><th>ID</th><th>NAME</th><th>BRAND</th><th>OS</th><th>action</th></tr>';
	if(flagOs == 1 && flagBrand == 0)
	{
		for(i =0 ; i < products.length ; i++)
		{
			for(j =0 ; j <sortByOs.length ; j++)
			{
				if(products[i].id == sortByOs[j])
				{
				html1 += '<tr><td>'+products[i].id+'</td><td>'+products[i].name+'</td><td>'+products[i].brand+'</td><td>'+products[i].os+'</td><td><a href = "#" id="delId">X</a></td></tr>';
				}
			}

		}
	}
	else if(flagOs == 0 && flagBrand == 1)
	{
	for(i =0 ; i < products.length ; i++)
	{
		for(j =0 ; j <sortByBrand.length ; j++)
		{
				if(products[i].id == sortByBrand[j])
				{
				html1 += '<tr><td>'+products[i].id+'</td><td>'+products[i].name+'</td><td>'+products[i].brand+'</td><td>'+products[i].os+'</td><td><a href = "#" id="delId">X</a></td></tr>';
				}
		}
	}
	}
	else if(flagOs == 1 && flagBrand == 1)
	{
		console.log("both element select tag has  been clicked")
	for(i =0 ; i < sortByOs.length ; i++)
	{
		for(j =0 ; j <sortByBrand.length ; j++)
		{
			console.log(sortByOs[i]+"=="+sortByBrand[j])
				if(sortByOs[i] == sortByBrand[j])
				{	
					console.log("entered")
					for(k =0 ; k < products.length ; k++)
					{
						if(sortByOs[i] == products[k].id)
						{
						html1 += '<tr><td>'+products[k].id+'</td><td>'+products[k].name+'</td><td>'+products[k].brand+'</td><td>'+products[k].os+'</td><td><a href = "#" id="delId">X</a></td></tr>';
						}
					}
				}
			}
			console.log("after loop")
	}
	}

   html1 += '</table>';
$('#result').html(html1);
}