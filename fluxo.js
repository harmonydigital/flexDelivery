// arquivo principal.js
// import { data} from './api'
credentials=undefined
bodyDocument=document.getElementsByTagName('body')[0]
var app=document.getElementById('app') 
inputMesa=document.getElementById('mesa')
repeat=false


function innnerOrderItens(dataKey,tipo){
 
    ordersContainer=document.querySelectorAll('.card')
    setores=document.querySelectorAll('.setor')
    let mesasO=JSON.parse(localStorage.getItem("mesasOpen"))
    let key=dataKey
    
    //DADOS FINANCEIRO
    QTDITENSMESA=0
    TOTALDAMESA=0

    if(tipo==='mesa'){
        mesasO.map((mesasMap)=>{

            if(mesasMap.mesa===key){ 
                mesasMap.orders.map((mOrder)=>{ 
                    Array.from(ordersContainer).map((containerOnlyOrder)=>{   
                        
                        mOrder.itens.map((myItens)=>{ 
                            if(containerOnlyOrder.getAttribute("id")==mOrder.idPedido){
                                 
                                Array.from(setores).map((setMap)=>{
                              
                                    if(setMap.getAttribute('id')==myItens.categoria+mOrder.idPedido){
                                             var custoporquantidade=myItens.price*myItens.quantidade
                                             
                                            document.getElementById(setMap.getAttribute('id')).style.cssText="display:block"
                                            document.getElementById(setMap.getAttribute('id')).innerHTML+= `
                                            
                                            <div class="pedidoResumo">  
                                                <div class='quantd'> ` +myItens.quantidade+ `un. </div> 
                                                <div class='nomeProd'> ` +myItens.name+ `</div>
                                                <div class="priceresumo"> ` +custoporquantidade.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ `</div>
        
                                            </div>
                                            `; 
                                            
                                            //OBTEM DADOS DE FATURAMENTO
                                            QTDITENSMESA+=myItens.quantidade
                                            TOTALDAMESA+=custoporquantidade
                                            
                                    }
                                     

                                    
                                }) 

 
                              
        
        
        
                            }                                    
                        })
                        
        
                     
                            
                    })
                })
    
                
            }
        })

        
     
    
    }else if(tipo==='delivery'){
       let deliveryPedidos=JSON.parse(localStorage.getItem("pedidosDelivery"))
        

       deliveryPedidos.map((delPedMap)=>{
        console.log(delPedMap.id)
            if(delPedMap.id==key){
             
                delPedMap.orders.map((orMapDel)=>{
                    orMapDel.itens.map((itmaps)=>{ 
                        Array.from(setores).map((setMap)=>{
                              
                            if(setMap.getAttribute('id')==itmaps.categoria+orMapDel.idPedido){
                                    
                                     document.getElementById(setMap.getAttribute('id')).style.cssText="display:block"
                                     var custoporquantidade=itmaps.price*itmaps.quantidade

                                     document.getElementById(setMap.getAttribute('id')).innerHTML+= ` 
                                        <div class="pedidoResumo">  
                                            <div class='quantd'> ` +itmaps.quantidade+ `un. </div> 
                                            <div class='nomeProd'> ` +itmaps.name+ `</div>
                                            <div class="priceresumo"> ` +custoporquantidade.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ `</div>
                                            
                                        </div>
                                     `;

                                   //OBTEM DADOS DE FATURAMENTO
                                   QTDITENSMESA+=itmaps.quantidade
                                   TOTALDAMESA+=custoporquantidade
                            }
                             

                            
                        }) 



                        // document.getElementById(delPedMap.name).innerHTML+=`
                        // <div class="pedidoResumo">
                        //         <div class='quantd'> ` +itmaps.quantidade+ `</div>
                        //         <div class='nomeProd'> ` +itmaps.name+ `</div>
                        //         <div> ` +itmaps.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ `</div>


                        // </div>
                        // `; 
                    })
                })
            }
       })
   
   
    }




  // COLETA DADOS FINANCEIRO
       totalMesaContainer=document.getElementById('subTotal')
    //    console.log('QUANTIDADE DE ITENS NA MESA',QTDITENSMESA)
    //    console.log('TOTAL DA MESA',TOTALDAMESA.toString())

       if(totalMesaContainer){
        totalMesaContainer.innerHTML+=` ` +TOTALDAMESA.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).toString()+ ` `;
       }

   
    
    
   
   
}
function getProds(){

    var allProds=[] 
    data.map((apiData)=>{  
        apiData.itens.map((itensMap)=>{  
            itensMap.products.map((productsMap)=>{  
                allProds.push(productsMap)

            }) 
        }) 

    }) 
    
    return allProds
}

admLogin=false

function login(){
    credentials=sessionStorage.getItem("nameValueStorage");
    
        inputFocus=()=>{
            var clasFormLogin=document.querySelector('.form') 

              if (window.matchMedia("(max-width: 700px)").matches==true) {   
                clasFormLogin.childNodes[1].style.cssText='height:55px;transition:.3s;'
                // console.log(window.matchMedia("(max-width: 700px)"))
              }   
        }
         
        if(credentials===null){
        bodyDocument.style.cssText='overflow:hidden;'
        app.innerHTML+=`  
                <div id="login">   
                    <div class="form">
                    <img class="logo" src="assets/img/logo.png">
                        <div>
                        <h3>Gerencie seus pedidos</h3>
                        </div>
                        <form>

                            <input onfocus="inputFocus()" outfocus="inputOutFocus()" type='text' id='nameuser' placeholder='Nome de Usuário'>
                            <input type="password" id="pass" placeholder='Senha' name="password" minlength="4" required>
                            <button class="btn-bottom" onclick='validationLogin(event, nameuser, pass)'>Entrar</button>
                            <a style="
                            margin: 10px auto;
                            text-decoration: none;
                            font-size: 14px;
                        " href=''>Esqueci minha senha!</a>
                        </form>
                    </div>
                    <footer>
                      harmonyCorp©
                    </footer>
                </div>
        `; 
    
        loginContainer=document.getElementById('login')
    

        validationLogin=(event,nameuser,pass)=>{
            event.preventDefault()

            var nameValue=nameuser.value
            var userPass=pass.value 

        

                if(nameValue==='garcom' & userPass==='1010'){
                    
                    document.getElementById('login').style.cssText="display:none;"
                    sessionStorage.setItem("nameValueStorage",nameValue);
                    bodyDocument.style.cssText='overflow:auto;'


                }else if(nameValue==='FlexDelivery' & userPass==='3030'){
                    
                    admLogin=true  
                    document.getElementById('login').style.cssText="display:none;"
                    sessionStorage.setItem("nameValueStorage",nameValue);
                    bodyDocument.style.cssText='overflow:auto;'
                    
                }else if(nameValue==='canoasubatuba' & userPass==='181818'){ 
                    
                    admLogin=true  
                    document.getElementById('login').style.cssText="display:none;"
                    sessionStorage.setItem("nameValueStorage",nameValue);
                    bodyDocument.style.cssText='overflow:auto;'

                }else{
                    alert('Dados Incorretos')

                }



                if(credentials){
            
                    // app.innerHTML=`  `; 
                }
            }
    
        }    
        

    
 

}
login()

 

function  fluxo(){
    
    arrOrder=[] //array de vendas na mesa
 
    prodSelected=[] //Array de Produtos selecionados 
    mesaNumber=0
 
    tableValidation=()=>{
        inputMesa=document.getElementById('mesa')
        

        submitTable=()=>{ 

            valueMesa=inputMesa.value 
            document.getElementById('innerMesaNumber').style.cssText='display:flex'
            document.getElementById('innerMesaNumber').innerHTML=valueMesa
            
        }

        repeatTable=()=>{
             return alert("Esta mesa já existe, deseja adicionar um novo pedido?")
            
        }

        inputMesa.addEventListener('blur', (event) => {
            
            mesaNumber=inputMesa.value
            newOrder=[]

            if(arrOrder.length>0){
                arrOrder.map((allTabs)=>{
                    if(mesaNumber==allTabs.name){ 
                        repeat=true
                   
                        
                    }else{ 
                        document.getElementById('includOrderbtn').disabled = false
                    }
                })

            }else{ 
                document.getElementById('includOrderbtn').disabled = false
             }
 


             

        });  
      
        inputMesa.addEventListener('keyup', _.debounce(submitTable, 500)) 

      
    }

    searched=(event, searchInput)=>{
        event.preventDefault()
        searchIn=searchInput
        prodsArray=[]

        inputMesa=document.getElementById('mesa')

       
        if(inputMesa){
            
            document.getElementById('titleAdd').style.cssText="display:none;"
            inputMesa.style.cssText='display:none'
        }
        submitSearch=(event)=>{
            searchedValue=event.target.value 
            searchResult = document.getElementById('searchResult')   
 
            const productFound=ProductsFilter(searchedValue)  
            searchedValue.length > 3 ?  render(productFound) :  searchResult.innerHTML="Produto não encontrado" 
        }   

        ProductsFilter=(searchedValue)=>{
            return prodsArray.filter(p=>{
                return p.name.toLowerCase().includes(searchedValue.toLowerCase())  
            })  
        }

        searchIn.addEventListener('keyup', _.debounce(submitSearch, 500)) 

        includProdInTable=(prodThis)=>{
            var keyProd=prodThis.getAttribute("key") 
            var allProd=getProds() 
            
            allProd.map((prods)=>{ 
            
                if(keyProd.toString()===prods.id){ 
              
                    prodSelected.push(prods) 
                    // orderFortable()
                    saved()
                }


 
        })
     

        // prodSelected=[]
    
        alert('Produto adicionado com sucesso')

    }
        
    function render(productFound){   
       
        searchResult.innerHTML=`   `;  

        productFound.map((prodFoundMap)=>{  

            searchResult.innerHTML+=` 
            <div class='prodresult'>
            <span>
            ` +prodFoundMap.id+ `
            </span>
            <div>
            ` +prodFoundMap.name+ `
            </div>
            <div>
            <button key="`+prodFoundMap.id+`" onclick="includProdInTable(this)">
                incluir
            </button>
            </div>
            </div>
          
            `;  
        }) 
     }


          
    data.map((apiData)=>{  
        apiData.itens.map((itensMap)=>{  
            itensMap.products.map((productsMap)=>{  
                prodsArray.push(productsMap)

            }) 
        }) 

    }) 
       
    }
    
    tabledetails=(datakey, tipo)=>{ //imprime detalhes do pedido
    //    var key=event.target.getAttribute('key') 

    
       containerMesaDetails=document.getElementById('openTable')  
       if(datakey){
        var key=datakey.toString()
        }else{
            console.log("oi")
        }

       containerMesaDetails.classList.toggle("show")

    

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
            // console.log(JSON.parse(localStorage.getItem("mesasOpen")))    
            let mesasO=JSON.parse(localStorage.getItem("mesasOpen"))
           
            mesasO.map((mesasMap)=>{

                if(mesasMap.mesa===key){
                    badgeMesa=document.getElementById('badgemesa')

                    badgeMesa.innerHTML=`
                        <h5>Pedidos Mesa <span> `+key+`</span></h5>
                    `; //Imprime numero da mesa
                    mesasMap.orders.map((mOrder)=>{
                        // console.log(mOrder)
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
                    console.log('oi',key)

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

    tableOptions=()=>{
        tableButton=document.querySelectorAll('.mesabutton')
        var btnsArr = Array.prototype.slice.call(tableButton);

            // btnsArr.forEach(element => {
        
            //     element.addEventListener('click',tabledetails(event))
                
            // });
    } 
     
 
    includOrder=(event, id)=>{ 
        if(event!=false){
            event.preventDefault() 
            // LIMPA CAMPOS POS CADASTRO
            inputMesa.value=""
            searchInput.value=""
            searchResult.innerHTML=""
       
        }
        containerMesas=document.getElementById("mesas");

       
        
        // MESA NOVA
        if(repeat===false){    
          alert('Mesa Adicionada')
            mesaValue={
                name:mesaNumber,
                orders:[{
                    idPedido:parseInt(Math.random() * 1000),
                    itens:prodSelected,
                }]
            }

            arrOrder.push(mesaValue) 
            prodSelected=[]
    
            containerMesas.innerHTML=` `; 
    
            if(arrOrder.length>0){
                arrOrder.map((mesaMap)=>{ 
                    
                    // containerMesas.innerHTML+=`   
                    //     <button key='`+mesaMap.name+`' onclick="tabledetails(event)" class="mesabutton">`+mesaMap.name+`</button>
                    // `; 
                })
    
                tableOptions()
    
             } 
            
            
        }else{

           // MESA EXISTENTE
            console.log('Pedido Adicionado com sucesso')
            alert('Pedido Adicionado com sucesso')

            var newOrder={
                idPedido:parseInt(Math.random() * 1000),
                itens:prodSelected
            }
            mesaValue.orders.push(newOrder)            
            var lastOrder=mesaValue.orders[mesaValue.orders.length-1].idPedido.toString

            console.log(mesaValue)
            console.log(newOrder)
            // renderItensOrder(lastOrder)
            
        } 
        relatorio()
        saved()
         
    }


    // ABRE MODAL INPUTS
    getModal=(id)=>{          
        id.classList.toggle("show");
        inputMesa=document.getElementById('mesa')

        document.getElementById('innerMesaNumber').innerHTML=''

        inputMesa.style.cssText='display:flex;'
        prodSelected=[]



    }
     fullScreen=()=>{
        var element = document.documentElement;
        
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    
    // HOME FRONT PAGE
    app.innerHTML+=` 
            <div class="header">

                <div class="user" id="user">  
                    <div>   
                        <i class="fa-regular fa-user" style="color:red;"></i>
                        Olá <strong>`+sessionStorage.getItem("nameValueStorage")+`</strong>, bem-vindo!
                    </div>
                    <h2>Administre seus pedidos aqui.</h2>
                </div>

                <div id="menu">
                    <div  onclick='menuToggle()'>
                        <i class="fa-solid fa-bars"></i>    

                    </div>
                    <div id="ftotal">
                        R$ 0,00 
                    
                    </div>
                    <div id=" ">
                        ..
                    </div>
                </div>

                <div id="menu-nav" class="menu-nav">
                <div class="controls">
                    <button onclick="menuToggle(event)">
                        <svg class="svg-inline--fa fa-chevron-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg><!-- <i class="fa-solid fa-chevron-left"></i> Font Awesome fontawesome.com -->  
                    </button>
                    <button onclick="menuToggle(event)"> 
                        <svg class="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path></svg><!-- <i class="fa-solid fa-xmark"></i> Font Awesome fontawesome.com --> 
                    </button>    
                </div>


                    <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="closeds.html">Fechamentos</a></li>
                    <li><a href="https://harmonydigital.github.io/updateFlexDelivery/">Alterar Cardápio</a></li>

                    </ul>
                </div>
                
                <div onclick="toogleNot('notificacao')" style="    position: absolute;
                right: 30px;
                top: 30px;
                display: flex;
                flex-direction: row-reverse;
                ">
                
                    <i style="
                    color: red;
                " class="fa-solid fa-bell"></i>
                    <span id="notQtd"></span> 
                    <div style="
                width: 45%;
                margin-right: 10px;
                
            ">
                <button id="btnFullScreen" onclick="fullScreen()"><i style="color: red;" class="fa-solid fa-expand"></i></button>

                </div>
                </div>
             

            </div>


                <!--Container de dados -->
                <div class="data_container">

                 <div>
                    <h5 class="tittle">Fluxo de pedidos.</h5> 
                        <div class="flx">
                            <div class="card"> 
                                <span id="nOrdersTables" class="tooltip">..</span>

                                <h6>Mesas</h6>   
                                <span id="nSalesTables" class="price">..</span>
                            </div>
                            <div class="card"> 
                                <span id="nOrdersDeliverys" class="tooltip">..</span>

                                <h6>Delivery</h6>   
                                <span id="nSalesDeliverys" class="price">..</span>
                            </div>    
                    </div>    
                </div>    


                <div> 
                <div> 
                    <div id="containerTables" class="flx wrap"> </div>    
                </div>

                <div> 
                    <div id="containerDel" class="flx wrap"> </div>    
                </div> 
                </div> 
                 

                </div>
                <div id="relogio" hidden></div>


                <div class="notificacoes"> 
                    <div id="notificacao"> </div>
                </div>


            <button class="btn-circle-bottom" onclick='getModal(modalMesa)' hidden> + </button>
            
            <div id="relatorioFinanceiro" class="relatorioFinanceiro" hidden>
            
                    <h5>Fluxo de Caixa</h5>
                    <div id="vendasareceber" class="relatorioFinanceiro"> </div>
                    <div id="faturamentoatual"></div>


                        <div id="relatorioFaturamentoAtual" class="relatorioFinanceiro">
                        
                                <div class="relatorioMesas">
                                    <h4>Relatório Vendas Mesas</h4> 
                                    <div id="innerMesas" class="relatorioFinanceiro">  </div>
                                    <div id="innerpedidosatuaismesas" class="relatorioFinanceiro">  </div>
                                    <div id="totalfaturamentomesas" class="relatorioFinanceiro">  </div>
                                </div>
                            
                                <div class="relatorioDelivery">
                                    <h4>Relatório Vendas Delivery</h4> 
                                    <div id="deliveryRelatorio" class="relatorioFinanceiro"> </div>
                                    <div id="pedidosDeliveryAtuais" class=" relatorioFinanceiro "> </div>
                                    <div id="totalfaturamentodelivery" class="relatorioFinanceiro">  </div> 
                                </div>
                        </div>
                </div>
          
            <div class="painelvendas" hidden>
                <div id="mesas">
                  <h3>Pedidos Mesa:</h3>
                </div>
                <div id="deliveyPedidos">
                  <h3>Pedidos Delivery:</h3>  
                </div>
            </div>

                
            <div class="modal" id="modalMesa">
         
                        <div class="controls">
                            <button onclick='getModal(modalMesa)'>
                                <i class="fa-solid fa-chevron-left"></i>  
                            </button>
                            <button onclick='getModal(modalMesa)'>
                                <i class="fa-solid fa-xmark"></i>  
                            </button>
                        </div>
                       
                        <h5 id="titleAdd">Adicione Pedidos</h5> 
                        <div id="innerMesaNumber"></div> 

                        <form>
                            <input id='mesa' onclick='tableValidation()' type='number' placeholder='Numero da Mesa'>
                            <input id='searchInput' onfocus="searched(event, searchInput)" onclick='searched(event, searchInput)' type='name' placeholder='Busque Produtos'>
                            
                            <button class="h-button" id="includOrderbtn" disabled onclick='includOrder(event, mesa)'>
                                Adicionar Pedido
                            </button>
                        </form>
                        <div id="searchResult"></div>

                </div> 
                
                <div class="openTable" id="openTable"> 
                    <div class="controls">
                         <button onclick="tabledetails(event)">  
                         <i class="fa-solid fa-chevron-left"></i>  
                         </button>
                        <button onclick="tabledetails(event)"> 
                            <i class="fa-solid fa-xmark"></i>  
                        </button>    
                     </div> 
                </div>
                

               


        `;      


}

fluxo()
 