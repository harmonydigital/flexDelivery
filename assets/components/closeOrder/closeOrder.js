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
  console.log(dataHoraFormat())
  if(event){
 

      idConta=event.target.getAttribute('key')
      type=event.target.getAttribute('type')
      todospedidos=[]  
      
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

       type=='mesa' ? closeTable()  :  closeDelivery() 







     
  }


}