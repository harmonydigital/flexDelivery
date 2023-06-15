let containerCloseds=document.getElementById('closedsContainer') 
let closeddb; 


innerMoreDatails=(event)=>{
    console.log(event.target.getAttribute('key'))
    var key=event.target.getAttribute('key')

    //imprime total
    var totalOrders=document.getElementById('totaltable'+key)
    var viewDetails=document.getElementById('detailsOrders'+key)
    var icon=document.getElementById('icon'+key)

    viewDetails.classList.toggle('show')
    
    // var idTotalCloused=document.getElementById()
    closeddb.map((acountsMap)=>{  


         
            acountsMap.contasFechadas.map((closedMap)=>{ 
                if(closedMap.idConta==key){
                    console.log(closedMap.idConta)
                   

                    closedMap.pedidosfeitos.map((pedidosMap)=>{
                      
                        pedidosMap.itens.map((itensMap)=>{
                            viewDetails.innerHTML=`
                        
                                    
                            <table>
                                <tr> 
                                    <th>ID</th>
                                    <th>HORA</th> 
                                </tr>
                                <tr> 
                                    <th>`+pedidosMap.idPedido+`</th>
                                    <th>`+pedidosMap.hora+`</th> 
                                </tr>
                                <tr>
                                    <th>NOME</th>
                                    <th>PREÇO</th> 
                                </tr>
                                <tr>
                                    <th>`+itensMap.name+`</th>
                                    <th>`+itensMap.price+`</th> 
                                </tr>

                            </table>
                    
                    `

                        })
                      
                    })
 
                }

            })

    

    })
}

getDetailsCloseAccounts=(dataid)=>{ 

    var containerDetails=document.getElementById('detailsAccounts') 
    var contentdata=document.getElementById('contentdata')
       
    if(containerDetails){

        containerDetails.classList.toggle('show')

        closeddb.map((acountsMap)=>{  

            if(parseInt(acountsMap.id)===dataid){ 

                // console.log(dataid)
                // console.log(parseInt(acountsMap.id))
                // console.log(acountsMap.contasFechadas)

                acountsMap.contasFechadas.map((closedMap)=>{ 
                // console.log(closedMap)

                        contentdata.innerHTML+=`
                    
                        <div class="card">

                            <div style="
                            width: 100%;
                        ">
                            <table >
                                <tr> 
                                    <th>HORA</th>
                                    <th>ID</th>
                                    <th>TOTAL</th>
                                </tr>
                                <tr>
                                    <th>`+closedMap.fechamento+`</th>
                                    <th>`+closedMap.idConta+`</th>
                                    <th><div id='totaltable`+closedMap.idConta+`'></div></th>
                                </tr>
                               
                                

                            </table>
                            <div/>
                            
                                    <button key='`+closedMap.idConta+`'  class='btn-inline-datails'  onclick='innerMoreDatails(event, `+closedMap.idConta+`)'>   
                                        
                                        Detalhe de pedidos 

                                        <span id="icon`+closedMap.idConta+`" class="down">
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </span>

                                    </button>

                                    <div class="viewDetails" id='detailsOrders`+closedMap.idConta+`'></div>
                            

                        </div>
                        `
                       
                })


            }
        })

        

    }
}

function accoutsCloseds(closedData){
    closeddb=closedData 
    let containerReports=document.getElementById('containerReportsCloseds')
    containerReports.innerHTML=' '

    

    closeddb.map((acountsMap)=>{
       
        containerReports.innerHTML+=`

            <div class='card'>
                <div>
                <h6>Data: </h6><strong>`+acountsMap.data+`</strong>
                </div>

                <button class="getDatails" onclick='getDetailsCloseAccounts(`+acountsMap.id+`)'>
                    <i class="fa-solid fa-arrow-right"></i> 
                </button>
            </div>
        
        `;
    })

    // containerCloseds.innerHTML=`
        
    //     <div>
    //         <a class="btnhome" href="index.html"><i class="fa-solid fa-house"></i></a>
    //         <h5>Relatório de contas</h5>
    //     </div>


    //     <!-- VIEW DETAILS ACCOUTNS -->

    //     <div id='detailsAccounts' class="view detailsAccounts"> 
    //         <div class="controls">
    //             <button onclick='getDetailsCloseAccounts()'>
    //                 <i class="fa-solid fa-chevron-left"></i>  
    //             </button>
    //             <button onclick='getDetailsCloseAccounts()'>
    //                 <i class="fa-solid fa-xmark"></i>  
    //             </button>
    //         </div>
    //         <h5>Detalhe de contas</h5>
    //     </div>
    
    // `;
   
    // closeddb.map((acountsMap)=>{
    //     console.log(acountsMap)
    //     containerCloseds.innerHTML+=`

    //         <div class='card'>
    //             <div>
    //             <h6>Data: </h6><strong>`+acountsMap.data+`</strong>
    //             </div>

    //             <button class="getDatails" onclick='getDetailsCloseAccounts()'>
    //                 <i class="fa-solid fa-arrow-right"></i> 
    //             </button>
    //         </div>
        
    //     `;
    // })

    
}



containerCloseds.innerHTML=`
        
<div>
    <a class="btnhome" href="index.html"><i class="fa-solid fa-house"></i></a>
    <h5>Relatório de contas</h5>
</div>


<!-- VIEW DETAILS ACCOUTNS -->

<div id='detailsAccounts' class="view detailsAccounts"> 
    <div class="controls">
        <button onclick='getDetailsCloseAccounts()'>
            <i class="fa-solid fa-chevron-left"></i>  
        </button>
        <button onclick='getDetailsCloseAccounts()'>
            <i class="fa-solid fa-xmark"></i>  
        </button>
    </div>
    <h6>Detalhe de contas fechadas</h6>
    
    <div id='contentdata'></div>

    
</div>

<div id='containerReportsCloseds'>
<p>Nenhum relatório encontrado..</p>
 
<div>

`;