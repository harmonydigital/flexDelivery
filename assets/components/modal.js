
modalJs=(idPed)=>{

  modalApp=document.getElementById('modalApp')
  modalBody=document.getElementById('modalBody')
  modalContent=document.getElementById('modalContent')
  modalApp.classList.toggle('show')
  totalPedidoPreview=0
  precosobproduto=0
  dataDelete=''
 
//   console.log(dataInner)


  if(idPed!=false){
 
  // modalContent+=`<div> `+idPed+` ID</div>`;
   notificacoesData.map((notMap)=>{

   
      notMap.orders.map((oMap)=>{
     
      if(oMap.idPedido==idPed){
        // Mesa <span> `+notMap.mesa+`</span>
        dataDelete=notMap.key
        var innherCategoria=''

          if(notMap.mesa){
              innherCategoria=`Mesa <span> `+notMap.mesa+`</span> `
          }else if(notMap.name){
              innherCategoria=`Nome <span> `+notMap.name+`</span> ` 

          }

 

        modalContent.innerHTML=` 
          <button class="printAll" onclick="getPrint(this)" hidden>
                <img src="assets/img/printer.png"> Imprimir   
            </button>
            <div class="card" id="`+oMap.idPedido+`">
                <div id="badgemesa">
                    <h5 style="
                    margin: 10px auto 20px;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 15px;
                ">`+innherCategoria+`oo</h5>
                </div> 
              <div class="idpedido">
                #Pedido `+oMap.idPedido+`</div>
              </div>  
          </div> 
          `
       

        oMap.itens.map((imap)=>{

          precosobproduto=imap.price*imap.quantidade
          totalPedidoPreview+=precosobproduto
          
          if(imap.name){
            document.getElementById(oMap.idPedido).innerHTML+=` 

            

              <div class="pedidoResumo" >  
                    <div class="quantd"> `+imap.quantidade+` un. </div> 
                    <div class="nomeProd"> `+imap.name+`</div>
                    <div class="priceresumo">`+precosobproduto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+`</div>
              </div>
          
            
            `
          }else{

            document.getElementById(oMap.idPedido).innerHTML+=` 

            

            <div class="observacoes" >  
            Observações
                  <div class=" "> `+imap.observacaoPedido+`  </div> 
                 
            </div>
        
          
          `

          }
        })
 
        
        // modalContent.innerHTML+=`<div class="botoes">
        //   <form class="deleteNotification">
        //   <button type="submit"><i class="fa-solid fa-check"></i> Clique para saber que o pedido foi entregue!</button>
        //   </form>
        // </div>`; 
      }

      })
   })
 
  }else{

     
//  modalContent.innerHTML=''
  
  modalContent=innerHTML=''
    
  //   modalBody=`<div onclick="modalJs(false)"class="overylay"> </div>
  // <div id="modalBody" class="modalBody">
  // <div class="controls">
  //     <button onclick="modalJs(false)">&lt;</button>
  //     <button onclick="modalJs(false)">x</button>    
  // </div>                          
  // </div>`;
  }

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}