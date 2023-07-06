relatorioFinanceiro=document.getElementById('relatorioFinanceiro')

notificacao=document.getElementById('notificacao')
notQtd=document.getElementById('notQtd')
VENDASOPENOW=[];
nOrders=0 
mesasData=0
deliverysData=0
balcaoData=0
somaProdTotalbalcao=0

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
 
   }



// (async ()=>{
//   let granted=false
 

//   if(Notification.permission==='granted'){
//     granted=true
//     // return console.log('notificações',Notification.permission)

//   }else if(Notification.permission!=='denied'){
//     const permission=await Notification.requestPermission()

//     // return console.log('notificações',Notification.permission)

//   }
// } )()

(async ()=>{
  let granted=false
  notBtn=document.querySelector('.notbtn')

  if(Notification.permission==='granted'){ //notificação aceita
    granted=true 

  } 
  
  if(Notification.permission!=='denied'){//notificação recusa
    
    const permission=await Notification.requestPermission();

    granted = permission==='granted' ? true : false
    
  }

  notBtn.addEventListener('click', ()=>{
    console.log('teste',granted)
    if(granted==true){
       
      const greeting = new Notification('Hi, How are you?',{
        body: 'Have a good day',
        icon: './img/goodday.png'
      });
      

      console.log('greeting',greeting)
    }
  })
}
 
)()

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

          
            // pedidosDeliveryAtuais.innerHTML=`Pedidos Delivery em curso (`+nOrders+`)`;
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
                  
                   somaProdTotalbalcao=totaldaCompraBalcao

                  
                     
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
     

      var FATURAATUAL=somaProdTotalMesas+somaProdTotalDelivery+somaProdTotalbalcao

      
      ftotal.innerHTML=` Total ` +FATURAATUAL.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +``;  
 
        // faturamentoatual.innerHTML=`FATURAMENTO ATUAL  <strong style="margin: 0 5px;"> ` +FATURAATUAL.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +`</strong>`;  

  }else{

    relatorioFinanceiro.innerHTML=`SEM DADOS PARA MOSTRAR`;  

  }
   
 }