pedidosAll=[]   
pedidosContainer=document.getElementById("mesas")
containerTables=document.getElementById("containerTables")

dataTable=[]
totalBuy=0
function innerDataTotalPrice(idData,bddata){ 
 
    var totalBuy=0
    var multiPLBuy=0
    var idCardData='cardHome'+idData  
 
    idt=document.getElementById(idCardData)
    idt.innerHTML=""  
    
    bddata.map((pedidosMap)=>{ 
        if(idData===pedidosMap.mesa){ 

            pedidosMap.orders.map((pedidosOrderMap)=>{ 
        
                    pedidosOrderMap.itens.map((pedidosItensMap)=>{
                   

                 
                        if(pedidosItensMap.price===undefined) {
                        // console.log(pedidosItensMap.name)
                            
                        }else{
                            multiPLBuy=pedidosItensMap.quantidade*pedidosItensMap.price
                            totalBuy+=multiPLBuy

                       
                           
                            if(idt){
                                idt.innerHTML=totalBuy.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                            }

                        }
            
                })
        
            })

        }

    })
    
    // console.log("total",totalBuy)
   
}
//

function getData(bddata){
pedidosContainer.innerHTML="<h3>Controle de Mesas:</h3>"
containerTables.innerHTML=" <h5 class='tittle' style='width:100%;'>Controle de Mesas. </h5>"


    localStorage.setItem("mesasOpen", JSON.stringify(bddata));

    bddata.map((pedidosMap)=>{
        if(pedidosContainer){     
            pedidosContainer.innerHTML+=`<button key='`+pedidosMap.mesa+`' id='`+pedidosMap.mesa+`' onclick="tabledetails(event,'mesa')" class="mesabutton">`+pedidosMap.mesa+`</button>`
        
                containerTables.innerHTML+=`
            
                    <div key='`+pedidosMap.mesa+`' id='`+pedidosMap.mesa+`' 
                    onclick="tabledetails(`+pedidosMap.mesa+`,'mesa')" class="card"> 
                        <h6> Mesa `+pedidosMap.mesa+`</h6>   
                        <span id=cardHome`+pedidosMap.mesa+` class="price">..</span>
                    </div>

                ` 
                innerDataTotalPrice(pedidosMap.mesa,bddata)

              
        }
    })
   
  
}



//
deliveryContainer=document.getElementById("deliveyPedidos")
containerDel=document.getElementById("containerDel")

function deliveryData(deliveryAll){
    deliveryContainer.innerHTML="<h3 >Pedidos Delivery:</h3>"
    containerDel.innerHTML='<h5 class="tittle" style="width:100%;">Controle de Delivery( 3 )</h5>'

    localStorage.setItem("pedidosDelivery", JSON.stringify(deliveryAll));
    

    innerDataTotalDel=(idDel)=>{

      
        var totalBuyDel=0 
        var idCardData='cardDel'+idDel   
        idd=document.getElementById(idCardData)
        idd.innerHTML=''
        

        deliveryAll.map((deliveryMap)=>{
            if(idDel===deliveryMap.name){ 
                deliveryMap.orders.map((deliveryMapOrders)=>{
                    deliveryMapOrders.itens.map((itensMapDel)=>{
                        totalBuyDel+=itensMapDel.quantidade*itensMapDel.price
                      
                        idd.innerHTML=totalBuyDel.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                        
                    })

                })
            }
        })

    }
    deliveryAll.map((deliveryMap)=>{
       
    // sadasdasdas/
        // deliveryContainer.innerHTML+=`<button onclick="" class="deliveryButton" onclick="tabledetails(event)">`+deliveryMap.name+`</button>`
        deliveryContainer.innerHTML+=`

                                <div class="deliveryOrder">
                                    <button key='`+deliveryMap.name+`'   >
                                        <img src="assets/img/user.png" style="width: 16px;">`+deliveryMap.name+`
                                    </button>
                                    <button class="avisePronto" key='`+deliveryMap.name+`'   onclick="sendMsgWhats('`+deliveryMap.whatsapp+`')" >
                                        <img src="assets/img/whatswhite.png" style="width: 16px;"> Solicitar pagamento!   </button>
                                </div>     
                            
                            
                            `;


        containerDel.innerHTML+=`
        
                <div key='`+deliveryMap.name+`'  
                onclick="tabledetails(`+deliveryMap.id+`,'delivery')" class="card">
                    
                        <h6>`+deliveryMap.name+`</h6>   
                        <span id='cardDel`+deliveryMap.name+`'class="price">..</span>
            
                </div>     
            
    
        `;
        innerDataTotalDel(deliveryMap.name)

    })
 
}

 

window.onload=function(){
    deliveryAll=false
}