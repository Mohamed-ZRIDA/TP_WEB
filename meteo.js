
      var Sousse = document.getElementById("SousseBlock");
      var Barcelone = document.getElementById("BarceloneBlock");
      var Londres = document.getElementById("LondresBlock");
      
      function showCity()
      {
      	var element = document.getElementById("villes").value;
      if (element == "selection") 
      {
      
           Sousse.style.visibility = "hidden";
              Barcelone.style.visibility = "hidden";
              Londres.style.visibility = "hidden";
      
      }
      
      else if(element=="Sousse")
       {
       	        Sousse.style.visibility = "visible";
                Barcelone.style.visibility = "hidden";
                Londres.style.visibility = "hidden";
       }
      else if(element=="Barcelone")
       {
       	        Sousse.style.visibility  = "hidden";
              	Barcelone.style.visibility = "visible";
              	Londres.style.visibility = "hidden";
       }
      else if(element=="Londres")
       {
       	        Sousse.style.visibility  = "hidden";
              	Barcelone.style.visibility = "hidden";
              	Londres.style.visibility = "visible";
       }
	   else if(element=="Tout")
       {
       	        Sousse.style.visibility = "visible";
                Barcelone.style.visibility = "visible";
                Londres.style.visibility = "visible";
       }
      
      }          
