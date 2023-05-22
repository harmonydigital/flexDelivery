 tabledetails=(datakey, tipo)=>{    
       
       containerMesaDetails=document.getElementById('openTable')  
       containerMesaDetails.classList.toggle("show") 

      
       if(datakey){ var key=datakey.toString()  }  

       containerMesaDetails.innerHTML=`
            <div class="controls">
                <button onclick="tabledetails()">
                    <i class="fa-solid fa-chevron-left"></i>  
                </button>
                <button onclick="tabledetails()"> 
                    <i class="fa-solid fa-xmark"></i> 
                </button>    
            </div> 
            <div id="badgemesa"></div>
            <div id="dataOrder"> 
                <div id="subTotal">Total da Compra</div>
                <button key='`+key+`' onclick="closeOrder(event)" class="closeOrder">Fechar Conta</button>
            </div> 
       `;
       
          

        if(tipo==='mesa'){
            
            let mesasO=JSON.parse(localStorage.getItem("mesasOpen"))
           
            mesasO.map((mesasMap)=>{
                 
                if(mesasMap.mesa===key){
                    badgeMesa=document.getElementById('badgemesa')

                    badgeMesa.innerHTML=`
                        <h5>Pedidos Mesa <span> `+key+`</span></h5>
                    `; //Imprime numero da mesa
                    mesasMap.orders.map((mOrder)=>{

                        containerMesaDetails.innerHTML+=`
                        <div id="`+mOrder.idPedido+`" class="card"><div class="idpedido">#Pedido`+mOrder.idPedido+`  </div>   

                            <div onclick="getPrint(this)"  class="setor" id="porcoes`+mOrder.idPedido+`">
                                <h4 >Setor Porções<img src="assets/img/printer.png" ></h4>
                            </div>
                            <div onclick="getPrint(this)"  class="setor" id="tapiocas`+mOrder.idPedido+`"><h4>Setor Pasteis<img src="assets/img/printer.png" ></h4></div>
                            <div onclick="getPrint(this)"  class="setor" id="pasteis`+mOrder.idPedido+`"><h4>Setor Pasteis<img src="assets/img/printer.png" ></h4></div>
                            <div onclick="getPrint(this,`+mOrder.idPedido+`)"  class="setor" id="bebidas`+mOrder.idPedido+`"><h4>Setor Bebidas<img src="assets/img/printer.png" ></h4></div>
                           
                        </div>  
                        `;

                      
                       

                    })

                    innnerOrderItens(key,'mesa')
                }else{
                    // console.log('else',key)

                }
            })

            containerMesaDetails.innerHTML+=`
                <button class="printAll" onclick="getPrint(this)">
                    <img src="assets/img/printer.png" > Imprimir tudo 
                </button> 
                
                <div class="qr">  
                    <h4>Escaneie e pague, facil e rápido!</h4>
                    <img src='assets/components/impressao/andd.png'>
                    
                </div>
            `

        }else if(tipo==='delivery'){
            // console.log(JSON.parse(localStorage.getItem("pedidosDelivery")))   
            deliveryO=JSON.parse(localStorage.getItem("pedidosDelivery"))
            deliveryO.map((deliMap)=>{
                
                if(deliMap.id==key){
                   
                    deliMap.orders.map((dOrder)=>{
                        containerMesaDetails.innerHTML+=`
                        <div id="`+deliMap.name+`" class="card"><div class="idpedido">#Pedido `+dOrder.idPedido+`</div>   
                        <div onclick="getPrint(this)"  class="setor" id="porcoes`+dOrder.idPedido+`"><h4> Porções<img src="assets/img/printer.png" ></h4></div>
                        <div onclick="getPrint(this)"  class="setor" id="tapiocas`+dOrder.idPedido+`"><h4> Tapiocas<img src="assets/img/printer.png" ></h4></div>
                        <div onclick="getPrint(this)"  class="setor" id="pasteis`+dOrder.idPedido+`"><h4> Pasteis<img src="assets/img/printer.png" ></h4></div>
                        <div onclick="getPrint(this)"  class="setor" id="bebidas`+dOrder.idPedido+`"><h4> Bebidas<img src="assets/img/printer.png" ></h4></div>
                        </div>  
                        `;
                    })
                    innnerOrderItens(key,'delivery')

 
                }
            })
            containerMesaDetails.innerHTML+=`
            <button class="printAll" onclick="getPrint(this)">
                <img src="assets/img/printer.png" > Imprimir tudo 
            </button> 
            
            <div class="qr">  
                <h4>Escaneie e pague, facil e rápido!</h4>
                <img src='assets/components/impressao/andd.png'>
                
            </div>
        `
        }

 
 
    }