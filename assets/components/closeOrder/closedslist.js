
getDetailsCloseAccounts=()=>{
    console.log('getDetailsCloseAccounts')

    var containerDetails=document.getElementById('detailsAccounts')
    if(containerDetails){
        containerDetails.classList.toggle('show')
    }
}
function accoutsCloseds(closedData){
    let closeddb=closedData 
    let containerCloseds=document.getElementById('closedsContainer') 


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
            <h5>Detalhe de contas</h5>
        </div>
    
    `;
   
    closeddb.map((acountsMap)=>{
        console.log(acountsMap)
        containerCloseds.innerHTML+=`

            <div class='card'>
                <div>
                <h6>Data: </h6><strong>`+acountsMap.data+`</strong>
                </div>

                <button class="getDatails" onclick='getDetailsCloseAccounts()'>
                    <i class="fa-solid fa-arrow-right"></i> 
                </button>
            </div>
        
        `;
    })

    
}

