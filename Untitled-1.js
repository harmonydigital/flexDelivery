
   
      let idspedidosRecebidos=[]
      let pedidoAtual=[]
      let btnSubmitOrder=e.submitter
    
     
      if(inpuMVaue!=0){ 

            //Load 
            document.getElementById('msgLoad').style.cssText='display:flex' 
            btnSubmitOrder.setAttribute("disabled", true)

            let intMesaValue=String(parseInt(inpuMVaue)) 
                databaseMesas.map((baseMap)=>{ 
                      if(baseMap.mesa==intMesaValue){ //VERIFICA EXISTENCIA  
                          baseMap.orders.map((mapOrders)=>{ 
                              recebePedidos.push(mapOrders)  

                          }) 

                      }  
                })
              
              allordersBuy.map((atualOrderMap)=>{
                recebePedidos.push(atualOrderMap) 
                pedidoAtual.push(atualOrderMap.idPedido) 

              })     
              

              //<==================Pedidos Mesas
              db.collection('mesasOpen').doc(intMesaValue).set({  
                mesa:intMesaValue,
                orders:recebePedidos,  //<==================Pedidos Recebidos
                
              })

              
              db.collection('notificacoes').doc(horaReplace).set({  
                mesa:intMesaValue,
                orders:allordersBuy,  //<==================Pedidos Recebidos
                "key":horaReplace,
                hora:horaAtual
              }) 


              // MENSAGEM WHATSAPP PEDIDO MESA
         
              setTimeout(function(){
                    alert('Pedido enviado com sucesso..') 
 

              }, 2000);


              setTimeout(function(){
              
                 databaseMesas.map((baseMap)=>{ 
                 if(baseMap.mesa==intMesaValue){ //VERIFICA EXISTENCIA  
                        baseMap.orders.map((mapOrders)=>{ 
                            idspedidosRecebidos.push(mapOrders.idPedido) 
                           
                            pedidoAtual.map((mapIdAtual)=>{ 
                                idspedidosRecebidos.map((recebidosMap)=>{ 
                                  
                                      if(recebidosMap===mapIdAtual){
                                        entregaPed=true 
                                      }else{
                                  
                                      entregaPed=false

                                      }
                                      
                                }) 

                            }) 
                              
                         

                        }) 

                    } 
  
                })


                if(entregaPed==true){
                  alert('O restaurante recebeu seu pedido, aguarde!')
                  setTimeout(function(){  
                     
                   var url = "https://wa.me/5512996048083?text=" // Seu numero
                            + "*Olá, novo pedido pelo APP <3*" + "%0a" // Mensagem personalizada
                            + "%0a" // Quebra de linha
                            + "*Tipo*: Mesa" + "%0a" // Dados do formulário
                            + "*nº mesa*: " +intMesaValue + "%0a" // Dados do formulário
                            + "*Nome*: " + inputUserName + "%0a"
                            + "%0a" // Quebra de linha
                            + "*Pedido itens:*" + "%0a" // Mensagem personalizada
                             //<==================Pedidos Recebidos
                            allordersBuy.map((currentOrderMap)=>{
                                  currentOrderMap.itens.map((currentItensMap)=>{
                                    url+=""+currentItensMap.quantidade+"un." +currentItensMap.name + "%0a" // Mensagem personalizada
                                    console.log(totalCart)
                                  })
                            })
                            url+="*Observações do pedido*: " + observacaoPedido + "%0a" 
                              + "%0a" 
                              + " *Total da Compra*: " + "%0a"
                              + totalCart.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "%0a" // Mensagem personalizada
                           
                            window.location.href=url;

                  }, 2000);
                  form.reset() 


                     

                }else{
                  alert('Enviando novamente')
                  // form.submit()
                  btnSubmit.click();
                }
              

              }, 3000);

 
     
            

      }else if(inpuMWhats!="") {
        
    
        //Load 
        document.getElementById('msgLoad').style.cssText='display:flex'
        btnSubmitOrder.setAttribute("disabled", true)


        
       



 
 
        if(databaseDeliveryArr.length>0){
          let initF=true  // FALSE PARA MAQUINA DELIVERY
          let idClient=localStorage.getItem("idClient");

            console.log('DELIVERY TODOS',databaseDeliveryArr)
            console.log('ID DO CLIENTE',idClient)
            function orderSend(){ 

              setTimeout(function(){ 
                alert('Seu pedido foi entregue ao restaurante') 
                setTimeout(function(){
                  location.reload() 
                }, 3000);
              }, 2000);
              }
          databaseDeliveryArr.map((mapDataDelivery)=>{ 

                 
                  
                      if(mapDataDelivery.id==idClient){ 
                          mapDataDelivery.orders.map((ordersMap)=>{ 
                            recebePedidos.push(ordersMap) 
                            console.log("Pedidos banco",ordersMap)

                          }) 
                      } 
 
                  })

                  // PEDIDO DA ULTIMA SESSÃO
                  allordersBuy.map((atualOrderMap)=>{
                        recebePedidos.push(atualOrderMap)
                  })
                  // VAR TODOS OS PEDIDOS DO CLIENT ID >>>>>>>>>>> recebePedidos

                  let userNameString=inputUserName.toLowerCase().replace(/\s/g, '');

                      
                      if(initF==true){ 
                          // ENVIA PEDIDO DELIVERY
                          db.collection('delivery').doc(idClient).set({  
                                "name":userNameString,
                                "id":idClient,
                                "whatsapp":inpuMWhats,
                                orders:recebePedidos   
                          }) 

                          // ENVIA NOTIFICACAO DELIVERY
                          db.collection('notificacoes').doc(horaReplace).set({  
                                "name":userNameString,
                                "whatsapp":inpuMWhats,
                                "key":horaReplace, 
                                orders:allordersBuy,   
                                hora:horaAtual 
                          }) 
                        }
                        
                      // ENVIA PEDIDO WHATSAPP
                      setTimeout(function(){ 
                        databaseDeliveryArr.map((delverymap)=>{ 
                          delverymap.orders.map((mapOrdersDelivery)=>{ 
                            

                            allordersBuy.map((atuaIdOrder)=>{  

                              if(atuaIdOrder.idPedido===mapOrdersDelivery.idPedido){
 
                                var sendOrder=true
                              

                                setTimeout(function(){ 
                               
                                      var url = "https://wa.me/5512996048083?text=" // Seu numero
                                        + "*Olá, novo pedido pelo APP <3*" + "%0a" // Mensagem personalizada
                                        + "%0a" // Quebra de linha
                                        + "*Tipo*: Delivery" + "%0a" // Dados do formulário
                                        + "*Whatsapp*: " +inpuMWhats + "%0a" // Dados do formulário
                                        + "*Endereço*: " +locationvalue + "%0a" // Dados do formulário
                                        + "*Nome*: " + inputUserName + "%0a"

                                        + "%0a" // Quebra de linha
                                        + "*Pedido itens:*" + "%0a" // Mensagem personalizada
                                        //<==================Pedidos Recebidos
                                        allordersBuy.map((currentOrderMap)=>{
                                              currentOrderMap.itens.map((currentItensMap)=>{
                                                url+=""+currentItensMap.quantidade+"un." +currentItensMap.name + "%0a" // Mensagem personalizada
                                                
                                              })
                                        })
                                        
                                        url+="*Observações do pedido*: " + observacaoPedido + "%0a" 
                                        + "%0a"  
                                        + " *Total da Compra*: " + "%0a"
                                        + totalCart.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "%0a" // Mensagem personalizada
                                      

                                        if(initF==true){
                                          window.location.href=url; 
                                        }

                                }, 1500);




                              }

                            }) 
                          })
                        })
                      }, 2000);

                      if(sendOrder){
                        orderSend()
                      }

        }else{ 

              let userNameString=inputUserName.toLowerCase().replace(/\s/g, '');
              let idClient=localStorage.getItem("idClient");
              db.collection('delivery').doc(idClient).set({  
                "name":userNameString,
                "id":idClient, 
                "whatsapp":inpuMWhats, 
                orders:allordersBuy  //<==================Pedidos Recebidos
                
              })  
 
              const horaAtual=relogio()
              
              db.collection('notificacoes').doc(horaReplace).set({  
                "name":userNameString,
                "whatsapp":inpuMWhats,
                "key":horaReplace,
                orders:allordersBuy,  //<==================Pedidos Recebidos
                hora:horaAtual
              })  
            
             
              setTimeout(function(){ 
                databaseDeliveryArr.map((delverymap)=>{ 
                  delverymap.orders.map((mapOrdersDelivery)=>{  
                    allordersBuy.map((atuaIdOrder)=>{ 
                      if(atuaIdOrder.idPedido===mapOrdersDelivery.idPedido){
                        setTimeout(function(){
                                  alert('Seu pedido foi entregue ao restaurante') 
                                  setTimeout(function(){
                                    location.reload() 
                                  }, 3000);
                        }, 2000);
                      }

                    }) 
                  })
                })
              }, 3000);


        }
     
      }  
