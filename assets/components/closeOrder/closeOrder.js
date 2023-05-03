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

  closeForm=document.getElementById('closeForm')
  closeForm.classList.toggle('show')
  hfechamento=relogio()

  if(event!=false){
  idConta=event.target.getAttribute('key')
  todospedidos=[] 


  

  if(VENDASOPENOW){
    VENDASOPENOW.map((vendasMap)=>{ 

        if(vendasMap.data){

          vendasMap.data.map((tipoMap)=>{ 
  
             if(tipoMap.mesa==idConta){ 

                tipoMap.orders.map((mOrders)=>{
                     todospedidos.push(mOrders)
                     plataforma='Mesas'
                })

              }else if(tipoMap.name==idConta){
             
                tipoMap.orders.map((dOrders)=>{  
                    todospedidos.push(dOrders)
                    plataforma='Deliverys'    
                })
  
             }
          })


        }
      
    })

    // console.log(contaFechada)
  }
}
}