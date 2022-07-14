// overlay nav

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//  script for breadcrumb for page 6 account details


   function accountdetails(){
     document.getElementById("accountdetails").style.display = "block";
     document.getElementById("currentbids").style.display = "none";
     document.getElementById("prebids").style.display="none";
     document.getElementById("seeAll").style.display="none";
   }
   function currentbids(){
      document.getElementById("accountdetails").style.display = "none";
     document.getElementById("currentbids").style.display = "block";
     document.getElementById("prebids").style.display="none";
     document.getElementById("seeAll").style.display="none";
   }
   function prebids(){
      document.getElementById("accountdetails").style.display = "none";
     document.getElementById("currentbids").style.display = "none";
     document.getElementById("prebids").style.display="block";
     document.getElementById("seeAll").style.display="none";
   }
   function seeAll(){
      document.getElementById("accountdetails").style.display = "none";
     document.getElementById("currentbids").style.display = "none";
     document.getElementById("prebids").style.display="none";
     document.getElementById("seeAll").style.display="block";
   }
  //  heading of account details toggale
  
      function myFunctionaccount(){
      document.getElementById("head").style.display = "block";       
      }  
      function myFunctionaccount1(){
      document.getElementById("head").style.display = "none";       
      }
 

  // script to toggle grid and list for page 2 search and bid for homes
  
     function gridVeiw(){
       document.getElementById("grid").style.display = "block";
       document.getElementById("list").style.display = "none";
       document.getElementById("listviewIcon").style.display="block";
       document.getElementById("gridviewIcon").style.display="none";
     }
     function listVeiw(){
       document.getElementById("list").style.display = "block";
       document.getElementById("grid").style.display = "none";
       document.getElementById("gridviewIcon").style.display="block";
       document.getElementById("listviewIcon").style.display="none";
     }
   
 
    
    
