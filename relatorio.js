

function relatorio(){
  return console.log("Mesas",arrOrder)

}

function date(){ 
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    // document.write(today);   
} date()

 
function saved(){
 
    // Storexx  
    allM=JSON.stringify(arrOrder)

   
    // indow.localStorage.setItem("myObject", JSON.stringify(myObject));
    // localStorage.setItem("oders",allM);
  
    // if(arrOrder){
    
    //     prodsSaved=JSON.parse(localStorage.getItem("oders"))
        
       
    // }   
}
 

 
function orderFortable(){
    nMesa=document.getElementById('mesa').value 
    
    arrOrder.map((orMap)=>{ 

        if(orMap.name===nMesa){ 

            orMap.orders.map((allOrTab)=>{

                return allOrTab.idPedido
            })
        }

    })
                    
}


function statusApp(){
 
  prodSaved=JSON.parse(localStorage.getItem("oders"))
  containerMesas=document.getElementById("mesas");

//   if(prodSaved.length>0){ 

//     arrOrder=prodSaved    
    
//         arrOrder.map((mesaMap)=>{ 
            
//             containerMesas.innerHTML+=`   
//                 <button key='`+mesaMap.name+`' onclick="tabledetails(event)" class="mesabutton">`+mesaMap.name+`</button>
//             `; 
//         })

//         tableOptions()
 
//   }
}

statusApp()