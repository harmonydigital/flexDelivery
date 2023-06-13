let containerCloseds=document.getElementById('closedsContainer') 
let closeddb; 

getDetailsCloseAccounts=(dataid)=>{ 

    var containerDetails=document.getElementById('detailsAccounts') 
    var contentdata=document.getElementById('contentdata')
       
    if(containerDetails){

        containerDetails.classList.toggle('show')

        closeddb.map((acountsMap)=>{  

            if(parseInt(acountsMap.id)===dataid){ 
                acountsMap.contasFechadas.map((closedMap)=>{ 
                        
                        contentdata.innerHTML+=`
                        
                            <table>
                                <tr>
                                    <th>DATA</th>
                                    <th>ID</th>
                                    <th>PAGAMENTO</th>
                                </tr>
                                <tr>
                                    <th>`+closedMap.fechamento+`</th>
                                    <th>`+closedMap.idConta+`</th>
                                    <th>`+closedMap.formadePagamento+`</th>
                                </tr>
                            </table>
                        
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

    console.log(containerReports)

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