// pedidosAll=[]   
pedidosContainer=document.getElementById("mesas")
containerTables=document.getElementById("containerTables")
function getData(bddata){
pedidosContainer.innerHTML="<h3>Controle de Mesas:</h3>"
containerTables.innerHTML=" <h5 class=tittle>Controle de Mesas ( 2 )</h5>"


    localStorage.setItem("mesasOpen", JSON.stringify(bddata));

    bddata.map((pedidosMap)=>{
        if(pedidosContainer){     
            pedidosContainer.innerHTML+=`<button key='`+pedidosMap.mesa+`' id='`+pedidosMap.mesa+`' onclick="tabledetails(event,'mesa')" class="mesabutton">`+pedidosMap.mesa+`</button>`
        
                containerTables.innerHTML+=`
            
                    <div key='`+pedidosMap.mesa+`' id='`+pedidosMap.mesa+`' 
                    onclick="tabledetails(event,'mesa')" class="card"> 
                        <h6> `+pedidosMap.mesa+`</h6>   
                        <span id=total`+pedidosMap.mesa+` class="price">R$ 50,00</span>
                    </div>

                `





                idTotal=document.getElementById(pedidosMap.mesa)

                pedidosMap.orders.map(orderMap=>{
                    // console.log(orderMap) 
                    orderMap.itens.map(orderItensMapp=>{
                        totalForTables=orderItensMapp.quantidade*orderItensMapp.price 
                        getIdTotal="total"+pedidosMap.mesa
                            // console.log(getIdTotal)
                        // console.log('o total da mesa'+pedidosMap.mesa+'deve ser'+totalForTables)
                        //  document.getElementById(getIdTotal).innerHTML=totalForTables
                            // console.log(document.getElementById(getIdTotal))
                    }) 

            }) 
        }
    })
   
  
}



//
deliveryContainer=document.getElementById("deliveyPedidos")

function deliveryData(deliveryAll){
    deliveryContainer.innerHTML="<h3>Pedidos Delivery:</h3>"
    localStorage.setItem("pedidosDelivery", JSON.stringify(deliveryAll));
 
    deliveryAll.map((deliveryMap)=>{
       
    // sadasdasdas/
        // deliveryContainer.innerHTML+=`<button onclick="" class="deliveryButton" onclick="tabledetails(event)">`+deliveryMap.name+`</button>`
        deliveryContainer.innerHTML+=`

                                <div class="deliveryOrder">
                                    <button key='`+deliveryMap.name+`'   onclick="tabledetails(event,'delivery')" >
                                        <img src="assets/img/user.png" style="width: 16px;">`+deliveryMap.name+`
                                    </button>
                                    <button class="avisePronto" key='`+deliveryMap.name+`'   onclick="sendMsgWhats('`+deliveryMap.whatsapp+`')" >
                                        <img src="assets/img/whatswhite.png" style="width: 16px;"> Solicitar pagamento!   </button>
                                </div>     
                            
                            
                            `;

    })
 
}

 

window.onload=function(){
    deliveryAll=false
}