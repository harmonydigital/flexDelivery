relatorioFinanceiro=document.getElementById('relatorioFinanceiro')

notificacao=document.getElementById('notificacao')
notQtd=document.getElementById('notQtd')
VENDASOPENOW=[];
mesasData=0
deliverysData=0
balcaoData=0

faturamentoatual=document.getElementById('faturamentoatual')
ftotal=document.getElementById('ftotal')
mesasRelatorio=document.getElementById('innerMesas')

pedidosDeliveryAtuais=document.getElementById('pedidosDeliveryAtuais')

relatorioFaturamentoAtual=document.getElementById('relatorioFaturamentoAtual')
vendasareceber=document.getElementById('vendasareceber')
 
toogleNot=(id)=>{ 
  document.getElementById(id).classList.toggle('show')  
}

innerSequenceOrders=(notDataBase)=>{
 
  notificacoesData=notDataBase 

  notificacoesData.length>0?  notQtd.innerHTML=`<span>`+notificacoesData.length+`</span>` : console.log('')


  notificacao.innerHTML=`
    <div class="controls">
      <button onclick="toogleNot('notificacao')">
          <i class="fa-solid fa-chevron-left"></i>  
      </button>
      <button onclick="toogleNot('notificacao')"> 
          <i class="fa-solid fa-xmark"></i> 
      </button>    
    </div>
    
    
    <div>
      <h2>Notificações</h2>
    </div>
    
    <div>
      <button class="closeAll btn" style="color: white; margin: 0 auto; display: block;">Fechar todas</button>
    </div>


    <div id='notification_content'>
    
    </div>
   `;  



    notification_content=document.getElementById('notification_content')
 
  notificacoesData.map((notMap)=>{
 


    notMap.orders.map((allOrdersMap)=>{  
 
          if(notMap.name!=undefined){
            notification_content.innerHTML+=` 
          



                  
          <div  class='flx card'>

            <div class="flx"> 
              <span><i class="fa-regular fa-bell"></i> </span>

              <div class='card_content'>
                <h6>Novo pedido Mesa (`+notMap.name+`) </h6>
                <p>Hora do Pedido: `+notMap.hora+`</p>
              </div>

            </div>
            <div class='buttons_controls'>
            <button class="sm-hidden" onclick="modalJs(`+allOrdersMap.idPedido+`)"><i class="fa-solid fa-magnifying-glass"></i>+</button>
            <button class="xs-hidden" onclick="modalJs(`+allOrdersMap.idPedido+`)"><i class="fa-solid fa-magnifying-glass"></i> ver </button>
            <button class="xs-hidden" onclick="modalJs(`+allOrdersMap.idPedido+`)"><i class="fa-solid fa-magnifying-glass"></i> Aceitar </button>
            <button class="xs-hidden" onclick="modalJs(`+allOrdersMap.idPedido+`)"><i class="fa-solid fa-magnifying-glass"></i> Recusar </button>
            </div>
          
        </div>
            `;
          }else if(notMap.mesa!=undefined){
            notification_content.innerHTML+=`
            
          <div  class='flx card'>

            <div class='flx' >
              <span><i class="fa-regular fa-bell"></i> </span>

              <div class='card_content'>
                <h6>Novo pedido Mesa (`+notMap.mesa+`) </h6>
                <p>Hora do Pedido: `+notMap.hora+`</p>
              </div>

            </div>



            <button class="sm-hidden" onclick="modalJs(`+allOrdersMap.idPedido+`)"><i class="fa-solid fa-magnifying-glass"></i>+</button>
            <button class="xs-hidden" onclick="modalJs(`+allOrdersMap.idPedido+`)"><i class="fa-solid fa-magnifying-glass"></i> ver pedido</button>
           
          </div>`;
          
          }  

    })
    
  })
}

appNotification=(todosPedidos,tipo)=>{  
 

if(todosPedidos.length>0){


        if(tipo=='balcao'){ 
          balcaoData={
            "tipo":'balcao',
            "data":todosPedidos, 
          }
        }else if(tipo=='delivery'){
          deliverysData={
            "tipo":'Deliverys',
            "data":todosPedidos, 
          }  
        }

       
      if(tipo=="mesa"){ 
 
        NUMEROMESASABERTASNOMOMENTO=todosPedidos.length  
        let MESASABERTASNOMOMENTO=todosPedidos
        
 
        if(todosPedidos.length>0){

          mesasData={
            "tipo":'Mesas',
            "data":todosPedidos, 
          }  
      }   
     
         
 
  }else if(todosPedidos.length >0){  
          
        NUMERODELIVERYABERTOSMOMENTO=todosPedidos.length 
        let DELIVERYABERTOSMOMENTO=todosPedidos
   

        if(todosPedidos.length>0){
          // deliverysData={
          //   "tipo":'Deliverys',
          //   "data":todosPedidos, 
          // }   
      
        }
    }
    
 

    if(mesasData!=0 || deliverysData!=0 | balcaoData!=0){
    VENDASOPENOW=[mesasData,deliverysData,balcaoData] 
    }
   setTimeout(allData(), 2000);

  }
}

 function allData(){
  deliveryRelatorio=document.getElementById('deliveryRelatorio')
  pedidosDeliveryAtuais=document.getElementById('pedidosDeliveryAtuais')
  somaProdTotalDelivery=0
  

  totalfaturamentodelivery=document.getElementById('totalfaturamentodelivery')

  innerpedidosatuaismesas=document.getElementById('innerpedidosatuaismesas')
  totalfaturamentomesas=document.getElementById('totalfaturamentomesas')
  tpedMesa=0
  somaProdTotalMesas=0
  totaldaCompra=0
  totaldaCompraBalcao=0


   // VAR FOR NEW DESIGN PATHERS
   nOrdersTables=document.getElementById('nOrdersTables')
   nSalesTables=document.getElementById('nSalesTables')

   nOrdersDeliverys=document.getElementById('nOrdersDeliverys')
   nSalesDeliverys=document.getElementById('nSalesDeliverys')

   nOrdersBoard=document.getElementById('nOrdersBoard')
   nSalesBoard=document.getElementById('nSalesBoard')

 
  
  // console.log("admLogin",admLogin)
  
  if(admLogin==true){
    relatorioFinanceiro.innerHTML=''  
    // console.log(relatorioFinanceiro)
  }
 
  if(VENDASOPENOW.length>0){

    VENDASOPENOW.map((vatualMap)=>{
      if(vatualMap!==0){

        if(vatualMap.tipo=='Mesas'){
 
          mesasRelatorio.innerHTML=`Mesas Abertas no momento (`+vatualMap.data.length+`)`;

          vatualMap.data.map((dataMap)=>{ 
            tpedMesa+=dataMap.orders.length
        

            dataMap.orders.map((delOrdersMap)=>{

              delOrdersMap.itens.map((dimap)=>{
               // LISTA DE TODOS OS PEDIDOS NAS MESAS GERALconsole.log(dimap)
                // console.log(dimap)

                if(dimap.name){
                  somaProdTotalMesas+=dimap.quantidade*dimap.price 
                  if(totalfaturamentomesas){
                      totalfaturamentomesas.innerHTML=`Total Vendas Mesas<strong style="margin: 0 5px;">`+ somaProdTotalMesas.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+`</strong> `;
                      nSalesTables.innerHTML=``+ somaProdTotalMesas.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+` `;
                     
                    }
                } 
              })
            
            })

            
            
            innerpedidosatuaismesas.innerHTML=`Pedidos Mesas em curso (`+tpedMesa+`)`;
            nOrdersTables.innerHTML=` `+tpedMesa+` `;
           
          })

        }else if(vatualMap.tipo=='Deliverys'){
          console.log('vatualMap.tipo',vatualMap.tipo)
        
          deliveryRelatorio.innerHTML=`Delivery vendas atuais (`+vatualMap.data.length+`)`;
          nOrders=0
          vatualMap.data.map((dataMap)=>{ 

            nOrders+=dataMap.orders.length
 
           
           
            dataMap.orders.map((pedidoDelMap)=>{
                pedidoDelMap.itens.map((mapDelI)=>{
                  
                  if(mapDelI.price){
                    var custoporquantidade=mapDelI.price*mapDelI.quantidade
                    totaldaCompra+=custoporquantidade
                    
                    somaProdTotalDelivery=totaldaCompra

                    totalfaturamentodelivery.innerHTML=`Total Vendas Delivery<strong> `+totaldaCompra.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+`</strong>`;
                    nSalesDeliverys.innerHTML=` `+totaldaCompra.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+``;
                    
                  }
               
                })

              }) 

          
            pedidosDeliveryAtuais.innerHTML=`Pedidos Delivery em curso (`+nOrders+`)`;
            nOrdersDeliverys.innerHTML=` `+nOrders+` `;
            // 
            // totalfaturamentodelivery.innerHTML=`Total Vendas Delivery total()`;
          })
          
        }else if(vatualMap.tipo=='balcao'){
          

          vatualMap.data.map((dataMap)=>{ 
 
           
            dataMap.orders.map((pedidoDelMap)=>{
                pedidoDelMap.itens.map((mapDelI)=>{ 
                  

                  var custoporquantidade=mapDelI.price*mapDelI.quantidade
                  totaldaCompraBalcao+=custoporquantidade
                  
                  var somaProdTotalbalcao=totaldaCompraBalcao

                  
                     
                  totaldaCompraBalcao
                    nOrdersBoard.innerHTML=` 
                    `+somaProdTotalbalcao.toLocaleString('pt-br',
                    {style: 'currency', currency: 'BRL'})+``;


                    // nOrdersBoard.innerHTML=`oi `
               
                })

              }) 

          
            pedidosDeliveryAtuais.innerHTML=`Pedidos Delivery em curso (`+nOrders+`)`;
            nOrdersDeliverys.innerHTML=` `+nOrders+` `;
            // 
            // totalfaturamentodelivery.innerHTML=`Total Vendas Delivery total()`;
          })
        }

      }
    })
     

      var FATURAATUAL=somaProdTotalMesas+somaProdTotalDelivery

      
      ftotal.innerHTML=` Total ` +FATURAATUAL.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +``;  
 
        // faturamentoatual.innerHTML=`FATURAMENTO ATUAL  <strong style="margin: 0 5px;"> ` +FATURAATUAL.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +`</strong>`;  

  }else{

    relatorioFinanceiro.innerHTML=`SEM DADOS PARA MOSTRAR`;  

  }
   
 }