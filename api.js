tabledatatest=[]
data=[]
prodsArray=[]
prodsSelct=[]
 
requestMenuRest=(dataMenuRes)=>{

    dataMenuRes.map((apiData)=>{ 
   
        apiData.dataProd.map((mapDataProd)=>{ 
            // console.log(mapDataProd)
            data.push(mapDataProd)
        })

    })  
        
    data.map((apiData)=>{  
        apiData.itens.map((itensMap)=>{  
            itensMap.products.map((productsMap)=>{  
                prodsArray.push(productsMap)

            }) 
        }) 

    }) 

    // console.log(prodsArray)
    
} 


var apiContainer=document.getElementById('api') 
var categoriesContainer=document.getElementById('categories') 
ii=0

 getApi=(container)=>{
    container.innerHTML =` <div class="tab"> </div>`;
    prods=""
    data.map((apiData)=>{ 
         
        container.childNodes[1].innerHTML += ` 

            <button key="`+apiData.id+`" class="tablinks" onclick="openCity(event, '`+apiData.id +`')">
                <img class="img1" src=" `+apiData.image +`" alt="">
                <img class="img2"  src=" `+apiData.image2 +`" alt="">
                `+apiData.name +`
            </button>
          
        `;
        container.innerHTML += ` 

            <div id="`+apiData.id +`" class="tabcontent">  
            </div>
      
        `; 
        document.getElementById(apiData.id.toString()).innerHTML+= `  
        <div class="tab sub"  >
            <div class="swiper mySwiperTabs">
            <div class="swiper-wrapper" id="`+apiData.key +`" >
                
           
            
            </div>
            
            </div>
        </div>
          `; 
          
        var subs=document.getElementById(apiData.key)
       
        apiData.itens.map((itensMap)=>{        

            ii+=itensMap
            subs.innerHTML+= ` 
                 <div class="swiper-slide"> 
                    <button class="tablinks" onclick="openCity(event, '`+itensMap.id +`', '`+apiData.id +`')">`+itensMap.name +`</button> 
                 </div>
            `;
           
          
        }) 
        apiData.itens.map((tabContentMap)=>{ 
           
           
            document.getElementById(apiData.id.toString()).innerHTML+= ` 
               
                <div id="`+tabContentMap.id +`" class="tabcontent">  
                </div>
            `;
            var Contentsubs=document.getElementById(tabContentMap.id)
           
          innitProd=  tabContentMap.products.map((productsMap)=>{  
            prods+=productsMap
                    Contentsubs.innerHTML+= `  
                        <div class="produto">
                                <img src="`+productsMap.img +`" alt="" s></img>
                            <div class="prod-val">
                                <h3 class="title-prod">`+productsMap.name +`</h3> 
                                <span class="valor">`+productsMap.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+`</span>
                            </div>
                            <div class="quantidade">
                                <button key="`+productsMap.id +`" onclick="addProd(this,`+productsMap.id +`); ">+</button>
                                <input  id="`+productsMap.id +`" value="`+productsMap.quantidade +`" type="text" placeholder="0">
                                <button key="`+productsMap.id +`" onclick="removeProd(this,`+productsMap.id +`); ">-</button>
              
                            </div>
                        </div> 
                        </div>
                    `;


                if(productsMap.price==undefined){
                  

                }
   
                }) 
        }) 
     }) 
 }
  
 categoriesContainer ? getApi(categoriesContainer) : console.log("..");


 var value = 0

 removeProd=(ProdThis, inputProd)=>{ 
 
    var key=ProdThis.getAttribute('key')
    input=document.getElementById(inputProd)
    
    data.map((apiData)=>{   
        apiData.itens.map((itensMap)=>{     
             itensMap.products.map((productsMap)=>{ 
              

              if(productsMap.id===key && productsMap.quantidade>0){

         
                productsMap.quantidade-- 
                value=productsMap.quantidade  
    
                document.getElementById(key+'search').setAttribute('value',value)
                
                refrashCart(inputProd)

              }
             }) 
        }) 

     }) 

    

    
  }

  resetcart=()=>{
    data.map((apiData)=>{   
        apiData.itens.map((itensMap)=>{     
             itensMap.products.map((productsMap)=>{ 
        
            

                productsMap.quantidade=0
                console.log(productsMap)
                
                // value=productsMap.quantidade 
  

                // document.getElementById(key+'search').setAttribute('value',key)
                // if(inputSearch){
                //     inputSearch.setAttribute('value',value)

                // }
               
             }) 
        }) 

     }) 

     refrashCart(inputProd)

  }  
 addProd=(ProdThis, inputProd)=>{ 
 
    var key=ProdThis.getAttribute('key')
      
      input=document.getElementById(key)
      inputSearch=document.getElementById(key+'search')
      
 
    data.map((apiData)=>{   
        apiData.itens.map((itensMap)=>{     
             itensMap.products.map((productsMap)=>{ 
        
              if(productsMap.id===key ){

                productsMap.quantidade++
                value=productsMap.quantidade 
  

                document.getElementById(key+'search').setAttribute('value',key)
                if(inputSearch){
                    inputSearch.setAttribute('value',value)

                }
              }
             }) 
        }) 

     }) 

    
     refrashCart(inputProd)

    
  }

     
 refrashCart=(inputProd)=>{ 
     

  var cartContainer = document.getElementById('cartList')
  cartContainer.innerHTML=''
//   var cartPreview = document.getElementById('cartList')
  input =document.getElementById(inputProd)

  cartQtd=0
  totalCart=0
  itensTotal=0
  list=null

  allordersBuy=[]
  prodsSelct=[]
  
  data.map((apiData)=>{   
    apiData.itens.map((itensMap)=>{     
         itensMap.products.map((productsMap)=>{ 
           

          if(productsMap.quantidade>0){
            cartQtd+=productsMap.quantidade
            itensTotal+=productsMap.quantidade
            prodMultiply=productsMap.price*productsMap.quantidade
            totalCart+=prodMultiply
            list+=productsMap.name 
           
     
              cartContainer.innerHTML+= `  
                <div class='listprod'>
                    <div class="qtd-prod"> `+productsMap.quantidade +` </div>   
                    <div class="title-prod"> `+productsMap.name +` </div>   
                    <div class="price-prod"> `+productsMap.price +` </div>   
                </div>  

                             
                `;  
                
                prodsSelct.push(productsMap)


         }
        
         
         }) 

        
    }) 

 }) 

//    cartPreview.innerHTML= `<div><button id="cartPreview" onclick="showCart()"><img src="assets/images/shopping-cart.png" alt=""></button>      </div>`;  
//    cartContainer.innerHTML= `<div class="content"><h2>Pedido</h2><p ><span id="itensTotal"></span>  Itens na Cesta</p></div>`; 
   
   
 
  

        // document.getElementById("itensTotal").innerHTML+=  itensTotal
        cartContainer.innerHTML+= ` 

            <div class="controls"  > 
                <button onclick="showCart()"><i class="fa-solid fa-chevron-left"></i></button>
                <button onclick="showCart()"><i class="fa-solid fa-xmark"></i></button>  
            </div> 
             <div class="total"> 
                Total da compra
                `+totalCart.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +` 
                <button onclick="getCheckout()">Finalizar Pedido <i class="fa-regular fa-rectangle-list"></i></button> 
            </div> 
        `; 
  }

    getCheckout=()=>{ 
        select=document.getElementById('selectValidate')
        text = select.options[select.selectedIndex].text;
        containerCheckout=document.getElementById('checkout')
        containerCheckout.setAttribute("class", "checkout")
        containerCheckout.innerHTML= ` 
        <div class="controls"> 
                <button onclick="closeCheckout()"><svg class="svg-inline--fa fa-chevron-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg><!-- <i class="fa-solid fa-chevron-left"></i> Font Awesome fontawesome.com --></button>
                <button onclick="closeCheckout()"><svg class="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path></svg><!-- <i class="fa-solid fa-xmark"></i> Font Awesome fontawesome.com --></button>  
            </div>
        <div class="content"><h2>Finalizar Pedido </h2> </div>
        <form>
        <div>
            <label>
            Forma de retirada:
            </label>
            

            <div class="select">
            <img src="assets/images/inputs/archive.png" style="margin-top: 16px;"/>

                <select onchange="formaRetirada()" id="selectCheckout" > 

                    <option value="1">Selecione a forma de retirada</option>
                    <option value="balcao">Balcão</option>
                    <option value="mesa">Mesa</option>
                </select>
            </div>
            <div class="select"  style="display:none;">
            <img src="assets/images/inputs/mesa.png" style="margin-top: 16px;"/ >

            <select  id="selectMesaCheckout" > 

                <option value="0">Selecione a Mesa</option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
              
            </select>
        </div>
        </div>
        <div style="position: relative;">
            <label> 
                Observações do Pedido:
            </label>
            <img src="assets/images/inputs/chat.png" style="margin-top: 38px;">

            <textarea id="areaObs" placeholder="Digite observações do seu pedido"></textarea>
            
        </div>
        <div id="mgg"></div>
        <form>

        <div class="total"> 
        Total da compra
            `+totalCart.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +` 
            <button onclick="sendOrder(event)">Enviar Pedido  <i class="fa-brands fa-whatsapp"></i> </button> 
        </div> 

                           
        
        `;
        selectCheck=document.getElementById('selectCheckout')
        optionsCheck=selectCheck.options[selectCheck.selectedIndex].text
        retiradavalue=0
        // VALIDA CAMPO HOME
        if(text=="Mesa"){
            mesaCheck=document.getElementById('selectMesaCheckout')
            mesaCheck.parentNode.style.cssText="display:block"
        }

        // VALIDA CAMPO CHECKOUT 
        if(optionsCheck=="Mesa"){
            
            mesaCheck.parentNode.style.cssText="display:block"

        }
        containerCheckout.style.cssText="display:block"
    }

    formaRetirada=()=>{
       
        retiradavalue=document.getElementById('selectCheckout').value
        mesaCheck=document.getElementById('selectMesaCheckout')

        if(retiradavalue=='mesa'){
            mesaCheck.parentNode.style.cssText="display:block"

        }else if(retiradavalue=='balcao'){
            mesaCheck.parentNode.style.cssText="display:none"

        }

   }
 
    sendOrder=(event)=>{
        event.preventDefault() 
    
        mesaCheck=document.getElementById('selectMesaCheckout').value

      if(retiradavalue=='mesa'){
              
            retirada=retiradavalue+" N* "+mesaCheck
            send()
        }else if(retiradavalue=='balcao'){
           
            retirada=retiradavalue 
            send()
        }else{
            alert('Preencha os Campos')

        }

        function send(){
            comments=document.getElementById("areaObs").value
            url+=""
            + "*Forma de Retirada*: " + retirada+ "%0a" // Dados do formulário
            +"%0a" 
            + "*Observações do Pedido*"
            + "%0a" // Quebra de linhas 
            +comments
    
            location.href = url
        }
    }

    closeCheckout=()=>{ 
        containerCheckout.classList.toggle("hide");
    }



   
 