contasClosedb=[]
unifechamentos=[] 
platatorma=0
valuepaymentCheck=''
// Pay
function getPay(){ 
var paymentCheck=document.getElementById('paymentCheck') 
 valuepaymentCheck=paymentCheck.options[paymentCheck.selectedIndex].text  
 console.log(valuepaymentCheck)
   // Pay  
   contaFechada={
    "idConta":idConta,
    "fechamento":hfechamento,
    "pedidosfeitos":todospedidos,
    "formadePagamento":valuepaymentCheck, 

  }
}

 
closeOrder=(event)=>{ 

  // ABRE FORMA DE PAGAMENTO
  closeForm=document.getElementById('closeForm')
  closeForm.classList.toggle('show')



  hfechamento=relogio()

  if(event!=false){
  idConta=event.target.getAttribute('key')
  todospedidos=[] 

    console.log('idConta',idConta)
  

  if(VENDASOPENOW){
    VENDASOPENOW.map((vendasMap)=>{ 

        if(vendasMap.data){
          console.log(vendasMap)
          vendasMap.data.map((tipoMap)=>{ 
  
             if(tipoMap.mesa==idConta){ 

                tipoMap.orders.map((mOrders)=>{
                     todospedidos.push(mOrders)
                     plataforma='Mesas'
                })

              }else if(tipoMap.name==idConta){

                
                console.log('Deliverys')



                tipoMap.orders.map((dOrders)=>{  
                    todospedidos.push(dOrders)
                    plataforma='Deliverys'    
                })
  
             }
          })


        }
      
    })

    console.log(plataforma)
  }
}
}