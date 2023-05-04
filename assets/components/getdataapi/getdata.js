// pedidosAll=[]   
pedidosContainer=document.getElementById("mesas")
containerTables=document.getElementById("containerTables")

dataTable=[]

function innerDataTotalPrice(idData){
    // console.log(JSON.stringify(tabledatatest)+"<")
    // idData='10'
    var totalBuy=0
    var idCardData='cardHome'+idData  

    idt=document.getElementById(idCardData)
    idt.innerHTML=""
    dataTable.map((pedidosMap)=>{

        if(idData===pedidosMap.mesa){ 

            pedidosMap.orders.map((pedidosOrderMap)=>{ 
        
                    pedidosOrderMap.itens.map((pedidosItensMap)=>{


                
                        // console.log("qts",pedidosItensMap.quantidade) 
                        // console.log(pedidosItensMap.name) 
                        if(pedidosItensMap.price===undefined) {
                        // console.log(pedidosItensMap.name)
                            
                        }else{
                            totalBuy+=pedidosItensMap.quantidade*pedidosItensMap.price

                           
                            if(idt){
                                idt.innerHTML=totalBuy.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                                totalBuy=0
                            }

                        }
            
                })
        
            })

        }

    })
    // console.log("total",totalBuy)
   
}


function getData(bddata){
pedidosContainer.innerHTML="<h3>Controle de Mesas:</h3>"
containerTables.innerHTML=" <h5 class=tittle>Controle de Mesas. </h5>"


    localStorage.setItem("mesasOpen", JSON.stringify(bddata));

    bddata.map((pedidosMap)=>{
        if(pedidosContainer){     
            pedidosContainer.innerHTML+=`<button key='`+pedidosMap.mesa+`' id='`+pedidosMap.mesa+`' onclick="tabledetails(event,'mesa')" class="mesabutton">`+pedidosMap.mesa+`</button>`
        
                containerTables.innerHTML+=`
            
                    <div key='`+pedidosMap.mesa+`' id='`+pedidosMap.mesa+`' 
                    onclick="tabledetails(event,'mesa')" class="card"> 
                        <h6> `+pedidosMap.mesa+`</h6>   
                        <span id=cardHome`+pedidosMap.mesa+` class="price">..</span>
                    </div>

                ` 
                innerDataTotalPrice(pedidosMap.mesa)

              
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