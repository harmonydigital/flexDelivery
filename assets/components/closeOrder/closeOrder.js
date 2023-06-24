contasClosedb=[]
unifechamentos=[] 
platatorma=false
valuepaymentCheck=''
valueindex=0

  // Pay
  function getPay(){  
    var paymentCheck=document.getElementById('paymentCheck') 
    valuepaymentCheck=paymentCheck.options[paymentCheck.selectedIndex].text   
    valueindex=paymentCheck.options[paymentCheck.selectedIndex].value  

    console.log(idConta,'idConta')

    if(valueindex==='1'){
      alert('Selecione a forma de pagamento do cliente.')
      
    }else{
      contaFechada={
        "idConta":idConta,
        "fechamento":hfechamento,
        "pedidosfeitos":todospedidos,
        "formadePagamento":valuepaymentCheck, 

      }
    }
  }

 
closeOrder=(event)=>{ 

  // ABRE FORMA DE PAGAMENTO
  
  closeForm=document.getElementById('closeForm')
  closeForm.classList.toggle('show')


  hfechamento=relogio()
  if(event){
 

      idConta=event.target.getAttribute('key')
      type=event.target.getAttribute('type')
      todospedidos=[]  
  console.log(type,'type')
      
      //TODAS AS VENDAS EM ABERTO console.log(VENDASOPENOW)
      closeTable=()=>{
        VENDASOPENOW.map((vendasMap)=>{
          vendasMap.data.map((typeMap)=>{   
            if(typeMap.mesa==idConta.toString()){ 
              console.log(typeMap)
              typeMap.orders.map((mOrders)=>{
                  todospedidos.push(mOrders)
                  plataforma='Mesas'
              })
            }
          })
        })
      } 

      closeDelivery=()=>{
        console.log('fechar Delivery')
        VENDASOPENOW.map((vendasMap)=>{
    

          if(vendasMap.data!=undefined){
              vendasMap.data.map((allMap)=>{ 
                if(allMap.id==idConta.toString()){ 
                  console.log(allMap)

                  
                  allMap.orders.map((mOrders)=>{
                          todospedidos.push(mOrders)
                          plataforma='Deliverys'
                      })

                }


              })
          }
           
        })
      } 

      
      closeBalcao=()=>{
        // console.log('fechar Balcao')
        // console.log('VENDASOPENOW',VENDASOPENOW)
        VENDASOPENOW.map((vendasMap)=>{
    
          console.log('vendasMap',vendasMap)

          if(vendasMap.data!=undefined){
              vendasMap.data.map((allMap)=>{ 
 

                  
                  allMap.orders.map((mOrders)=>{
                          todospedidos.push(mOrders)
                          plataforma='balcao'
                      })
 


              })
          }
           
        })
      } 


     
       
      if(type=='mesa'){
        closeTable()
      }else if(type=='Delivery'){
        closeDelivery() 
      }else if(type=='balcao'){
        closeBalcao() 
      }
      






     
  }


}