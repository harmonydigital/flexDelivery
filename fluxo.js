 
credentials=undefined
bodyDocument=document.getElementsByTagName('body')[0]
var app=document.getElementById('app') 
inputMesa=document.getElementById('mesa')
repeat=false

balcaopedidos=[]
 
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
function innnerOrderItens(dataKey,tipo,obs){
   
    ordersContainer=document.querySelectorAll('.card')
    getsetores=document.querySelectorAll('.setor')
    setores=Array.from(getsetores)
    let mesasO=JSON.parse(localStorage.getItem("mesasOpen"))
    let key=dataKey
    
    //DADOS FINANCEIRO
    QTDITENSMESA=0
    TOTALDAMESA=0

    if(tipo==='mesa'){ 

        var itensQtd=0
        var totalTicket=0

        mesasO.map((mesasMap)=>{

            if(mesasMap.mesa===key){ 
                mesasMap.orders.map((mOrder)=>{ 
                        var tabslss= Array.from(document.getElementsByTagName('table'))

                       
                            tabslss.forEach(element => {
                                idTable=element.getAttribute('id')
                                if(idTable==mOrder.idPedido){

                                    mOrder.itens.forEach(itensFor => { 
                                        containerTable=document.getElementById(idTable)  
                                        thisprice=itensFor.price 
                                        itensQtd+=1 

                                        if(itensFor.name!=undefined){


                                            calctotalprod=thisprice*itensFor.quantidade
                                            totalTicket+=calctotalprod

                                            containerTable.innerHTML+=`
                                                    <tr>
                                                        <th>`+itensFor.name+`</th> 
                                                        <th>00`+itensQtd+`</th> 
                                                        <th>00`+itensFor.quantidade+`</th> 
                                                        <th style="text-align: right;">`+calctotalprod+`</th> 
                                                    </tr> 

                                                ` 
                                        }

                                    });
                                }
                                
                            });
                }) 

                itensQtd=0
                ios=0.5

                totalbruto=ios+totalTicket
                document.getElementById('subTotal').innerHTML=`
                Total da compra `+totalbruto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                        
                cupomContainer.innerHTML+=`
                <table>
                    <tr>
                        <th>DINHEIRO<br>IMPOSTOS 0.50</br>TROCO</th>
                        <th><h5 class="totalCupom">TOTAL`+totalbruto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+` </h5></th> 
                    </tr>
                    
                     
                </table>
                `

                
            }
        })

        
     
    
    }else if(tipo==='delivery'){
       let deliveryPedidos=JSON.parse(localStorage.getItem("pedidosDelivery"))
        
       var itensQtd=0
       var totalTicket=0

       deliveryPedidos.map((delPedMap)=>{ 
                if(delPedMap.id==key){
                    delPedMap.orders.map((mOrder)=>{ 
                     
                        var tabslss= Array.from(document.getElementsByTagName('table')) 
                            tabslss.forEach(element => {
                            
                                idTableDel=element.getAttribute('id')
                                if(idTableDel==mOrder.idPedido){
                                    mOrder.itens.forEach(itensFor => { 
                                        var containerTable=document.getElementById(idTableDel)  
                                        var thisprice=itensFor.price 
                                        itensQtd+=1 

                                        if(itensFor.name!=undefined){


                                            calctotalprod=thisprice*itensFor.quantidade
                                            totalTicket+=calctotalprod

                                            containerTable.innerHTML+=`
                                                    <tr>
                                                        <th>`+itensFor.name+`</th> 
                                                        <th>00`+itensQtd+`</th> 
                                                        <th>00`+itensFor.quantidade+`</th> 
                                                        <th style="text-align: right;">`+calctotalprod+`</th> 
                                                    </tr> 

                                                ` 
                                        }

                                    });
                                }
                            });
                })
                
                itensQtd=0
                ios=0.5

                totalbruto=ios+totalTicket
                document.getElementById('subTotal').innerHTML=`
                Total da compra `+totalbruto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                        
                cupomContainer.innerHTML+=`
                <table>
                    <tr>
                        <th>DINHEIRO<br>IMPOSTOS 0.50</br>TROCO</th>
                        <th><h5 class="totalCupom">TOTAL`+totalbruto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+` </h5></th> 
                    </tr>
                    
                     
                </table>
                `
            }
       })
   
   
    }else if(tipo==='balcao'){
        var itensQtd=0
        var totalTicket=0
        balcaopedidos.map((balcaomap)=>{

        

        
                balcaomap.orders.map((mOrder)=>{ 
                        var tabslss=Array.from(document.getElementsByTagName('table'))

                       
                            tabslss.forEach(element => {
                                idTable=element.getAttribute('id')
                                if(idTable==mOrder.idPedido){

                                    mOrder.itens.forEach(itensFor => { 
                                        containerTable=document.getElementById(idTable)  
                                        thisprice=itensFor.price 
                                        itensQtd+=1 

                                        if(itensFor.name!=undefined){


                                            calctotalprod=thisprice*itensFor.quantidade
                                            totalTicket+=calctotalprod
                                          
                                            containerTable.innerHTML+=`
                                                    <tr>
                                                        <th>`+itensFor.name+`</th> 
                                                        <th>00`+itensQtd+`</th> 
                                                        <th>00`+itensFor.quantidade+`</th> 
                                                        <th style="text-align: right;">`+calctotalprod+`</th> 
                                                    </tr> 

                                                ` 
                                        }

                                    });
                                }
                                
                            });
                }) 

                itensQtd=0
                ios=0.5

                totalbruto=ios+totalTicket
                document.getElementById('subTotal').innerHTML=`
                Total da compra `+totalbruto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                        
                cupomContainer.innerHTML+=`
                <table>
                    <tr>
                        <th>DINHEIRO<br>IMPOSTOS 0.50</br>TROCO</th>
                        <th><h5 class="totalCupom">TOTAL`+totalbruto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+` </h5></th> 
                    </tr>
                    
                     
                </table>
                `

                
       
        })
    }

    // COLETA DADOS FINANCEIRO
    totalMesaContainer=document.getElementById('subTotal')

    if(totalMesaContainer){
    // totalMesaContainer.innerHTML+=` ` +TOTALDAMESA.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).toString()+ ` `;
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

// VAR TODOS OS PRODUTOS console.log(getProds())

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
                        <img class="logo" src="assets/images/logo.png">
                        <div>
                            <h3>Gerencie seus pedidos</h3>
                        </div>
                        <form>

                            <input autofocus autofocusonfocus="inputFocus()" outfocus="inputOutFocus()" type='text' id='nameuser' placeholder='Nome de usuário'>
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
            welcome=document.getElementById('user')
            var nameValue=nameuser.value
            var userPass=pass.value  


                if(nameValue==='garcom' & userPass==='1010'){
                    
                    document.getElementById('login').style.cssText="display:none;"
                    sessionStorage.setItem("nameValueStorage",nameValue);
                    bodyDocument.style.cssText='overflow:auto;'
                    welcome.innerHTML=` 
                    <i class="fa-regular fa-user" style="color:red;"></i>
                    Olá <strong>`+nameValue+`</strong>, bem-vindo!
                `


                }else if(nameValue==='FlexDelivery' & userPass==='3030'){
                    
                    admLogin=true  
                    welcome.innerHTML=` 
                        <i class="fa-regular fa-user" style="color:red;"></i>
                        Olá <strong>`+nameValue+`</strong>, bem-vindo!
                    `
                    document.getElementById('login').style.cssText="display:none;"
                    sessionStorage.setItem("nameValueStorage",nameValue);
                    bodyDocument.style.cssText='overflow:auto;'
                    
                }else if(nameValue==='goodvibes' & userPass==='3030'){ 
                    
                    admLogin=true  
                    document.getElementById('login').style.cssText="display:none;"
                    sessionStorage.setItem("nameValueStorage",nameValue);
                    bodyDocument.style.cssText='overflow:auto;'
                    welcome.innerHTML=` 
                    <i class="fa-regular fa-user" style="color:red;"></i>
                    Olá <strong>`+nameValue+`</strong>, bem-vindo!
                `

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



    // FUNÇÃO OBTEM LISTA DE CUPONS FISCAIS DA MESA
          
    tabledetails=(datakey, tipo)=>{    

 
       
       containerMesaDetails=document.getElementById('openTable')  
       containerMesaDetails.classList.toggle("show") 
      
       if(datakey){ var key=datakey.toString()}  
       
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
            

            <!--HEAD CUPOM FISCAL -->
            <div id="CFData"> 
                <div class="card">
                    <h5> Adega Good Vibes </h5>
                    <p> BR/101 Marafunda nº  999 /<br> ubatuba  - sp </p>

                    <table>
                        <tr>
                            <th>CNPJ: 00.000.000/003-00</th>
                            <th style="text-align: right;">06/01/2023</th> 
                        </tr>
                        <tr>
                            <th>IE: 10.458.648-1</th>
                            <th style="text-align: right;">12:12:39</th> 
                        </tr>
                        <tr>
                            <th>IM: 08641569</th>
                            <th style="text-align: right;">ccf:120289</th> 
                        </tr> 
                    </table>

                    <span class="line"></span>

                    <div id="cuponsContainer"></div>

                </div>
            </div>



            <div id="dataOrder"> 
                <div id="subTotal">Total da Compra</div>
                <button key='`+key+`' type='`+tipo+`' onclick="closeOrder(event)" class="closeOrder">Fechar Conta</button>
            </div> 
       `;

        //CONTAINER DE NOVAS COMPRAS
         cupomContainer=document.getElementById('cuponsContainer')

         
        if(tipo==='mesa'){

             
            let mesasO=JSON.parse(localStorage.getItem("mesasOpen"))
           
            mesasO.map((mesasMap)=>{ 

                if(mesasMap.mesa===key){

                    badgeMesa=document.getElementById('badgemesa') 
                    badgeMesa.innerHTML=`
                        <h5>Pedidos Mesa <span> `+key+`</span></h5>
                    `;  



                    mesasMap.orders.map((mOrder)=>{
                       if(cupomContainer){
                        var idTabelCupom=mOrder.idPedido
                        obs='Pedido Balcao'
                            
                        cupomContainer.innerHTML+=` 
                            
                                <table id=`+mOrder.idPedido+`>
                                    <tr>
                                        <th><h5>CUPOM FISCAL  </h5></th> 
                                        <th> </th>  
                                    </tr>
                                    <tr> 
                                        <th>DATA:`+mOrder.data+`/ HORA `+mOrder.hora+`</th> 

                                        <th> </th> 
                                    </tr> 
                                    <tr>
                                        
                                        <th>OBS:`+obs+` </th> 
                                    </tr> 
                                    <tr class="headtable">
                                        <th>DESCRIÇÃO</th> 
                                        <th>ITEM</th> 
                                        <th>QTD.</th> 
                                        <th style="text-align: right;">VALOR</th> 
                                    </tr>
                                </table>
                                <span class="line"></span> 
                        
                        `
                       }  

                    })

                    innnerOrderItens(key,'mesa',obs)
                }
            })

            containerMesaDetails.innerHTML+=`
                <button class="printAll" onclick="getPrint(this)">
                    <img src="assets/images/printer.png" > Imprimir tudo 
                </button> 
                
                <div class="qr">  
                    <h4>Escaneie e pague, facil e rápido!</h4>
                    <img src='assets/components/impressao/andd.png'>
                    
                </div>
            `

        }else if(tipo==='delivery'){ 


            deliveryO=JSON.parse(localStorage.getItem("pedidosDelivery"))
            deliveryO.map((deliMap)=>{
                
                if(deliMap.id==key){ 
                    deliMap.orders.map((dOrder)=>{
 

                        if(cupomContainer){
                            var idTabelCupom=dOrder.idPedido
                            obs='Pedido Balcao'

                        
                            cupomContainer.innerHTML+=` 
                                
                                    <table id=`+dOrder.idPedido+`>
                                        <tr>
                                            <th><h5>CUPOM FISCAL  </h5></th> 
                                            <th> </th>  
                                        </tr>
                                        <tr>
                                            <th>DATA:`+dOrder.data+`/ HORA `+dOrder.hora+`</th> 
                                            <th> Nome:`+deliMap.name.toUpperCase()+`</th> 
                                        </tr> 
                                        
                                         <tr>
                                            <th>END:`+dOrder.location+` </th> 
                                         </tr> 
                                         <tr>
                                            <th>Obs:`+dOrder.observacao+`</th> 
                                        </tr>
                                        <tr class="headtable">
                                            <th>DESCRIÇÃO</th> 
                                            <th>ITEM</th> 
                                            <th>QTD.</th> 
                                            <th style="text-align: right;">VALOR</th> 
                                        </tr>
                                    </table>
                                    <span class="line"></span> 
                            
                            `
                           }  




                         
                    })

                    innnerOrderItens(key,'delivery')

 
                }
            })

            containerMesaDetails.innerHTML+=`
            <button class="printAll" onclick="getPrint(this)">
                <img src="assets/images/printer.png" > Imprimir tudo 
            </button> 
            
            <div class="qr">  
                <h4>Escaneie e pague, facil e rápido!</h4>
                <img src='assets/components/impressao/andd.png'>
                
            </div>
        `
        }else if(tipo==='balcao'){
             
            balcaopedidos.map((mapBalcao)=>{
                
                if(cupomContainer){ 
                mapBalcao.orders.map((mOrder)=>{
                
                 var idTabelCupom=mOrder.idPedido
                 obs='Pedido Balcao'

                     
                 cupomContainer.innerHTML+=` 
                     
                         <table id=`+mOrder.idPedido+`>
                             <tr>
                                 <th><h5>CUPOM FISCAL  </h5></th> 
                                 <th> </th>  
                             </tr>
                             <tr> 
                                 <th>DATA:`+mOrder.data+`/ HORA `+mOrder.hora+`</th> 

                                 <th> </th> 
                             </tr> 
                             <tr>
                                 
                                 <th>OBS:`+obs+` </th> 
                             </tr> 
                             <tr class="headtable">
                                 <th>DESCRIÇÃO</th> 
                                 <th>ITEM</th> 
                                 <th>QTD.</th> 
                                 <th style="text-align: right;">VALOR</th> 
                             </tr>
                         </table>
                         <span class="line"></span> 
                 
                 `
               
                  

             })
            }   
          
             innnerOrderItens(key,'balcao')
             
            })
           

            
        }

 
 
    }

    tableOptions=()=>{
        tableButton=document.querySelectorAll('.mesabutton')
        var btnsArr = Array.prototype.slice.call(tableButton); 
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
            // console.log('Pedido Adicionado com sucesso')
            alert('Pedido Adicionado com sucesso')

            var newOrder={
                idPedido:parseInt(Math.random() * 1000),
                itens:prodSelected
            }
            mesaValue.orders.push(newOrder)            
            var lastOrder=mesaValue.orders[mesaValue.orders.length-1].idPedido.toString

          
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
 
  
    // HOME FRONT PAGE
    app.innerHTML+=` 
            <div class="header"> 
                <div>  
                    <div class="user" id="user"> 
                        <i class="fa-regular fa-user" style="color:red;"></i>
                        Olá <strong>`+credentials+`</strong>, bem-vindo! 
                    </div> 
                    <h2>Gerêncie seus pedidos aqui.</h2>
                </div>

 

                <div id="menu">

                    <div  onclick='menuToggle()'>
                          
                        <button>
                        <i class="fa-solid fa-bars"></i>
                        <span>menu</span>
                        </button>
                    </div>

                    <div id="ftotal"> R$ 0,00   </div>

                    <div onclick='neworders()' >
                        <button>
                        <i class="fa-solid fa-file-invoice"></i>
                        <span>novo</span>
                        </button>

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
                        <li><a target="_blank" href="closeds.html">Fechamentos</a></li>
                        <li><a target="_blank" href="https://harmonydigital.github.io/updateFlexDelivery/">Alterar Cardápio</a></li>
                    </ul>
                </div>

                <div style=" margin-right: 60px; margin-top: 11px; ">
                    <button id="btnFullScreen" onclick="fullScreen()"><i style="color: red;" class="fa-solid fa-expand"></i></button>

                </div>

                <div onclick="toogleNot('notificacao')" style="position: absolute;  right: 30px; top: 30px; display: flex;  flex-direction: row-reverse; ">
                
                    <i style="  color: red;  " class="fa-solid fa-bell"></i>
                        <span id="notQtd"></span> 
                  

                </div>
             

            </div>

            <div id="msgLoad" class="msgLoad">
            <img src="assets/images/logo.png">
            <h3>Aguarde </h3>
            <p>Fechando conta ..</p>
            <img src="assets/images/loading.gif">
            <!-- <button>Cancelar</button>  -->
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
                        <div class="flx">
                            <div class="card red"> 
                                <span id="" class="tooltip">..</span>

                                <h6>Contas Fechadas hoje</h6>   
                                <span id="" class="price">..</span>
                            </div>
                            <div class="card" onclick="tabledetails('balcao','balcao')" > 
                            <span id="nSalesBoard" class="tooltip">..</span>


                                <h6>Vendas balcão:</h6>   
                                <span id="nOrdersBoard" class="price">..</span>
                              
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

                        <form id='formNewOrder'>
                            <input id='mesa' onclick='tableValidation()' type='number' placeholder='Numero da Mesa'>
                            <input id='searchInput' onfocus="searched(event, searchInput)" onclick='searched(event, searchInput)' type='name' placeholder='Busque Produtos'>
                            
                            <button class="h-button" id="includOrderbtn" disabled onclick='includOrder(event, mesa)'>
                                Adicionar Pedido
                            </button>
                        </form>

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
 