
function accoutsCloseds(closedData){
    let closeddb=closedData 
    let containerCloseds=document.getElementById('closedsContainer') 


    containerCloseds.innerHTML=`

        <div>
            <a class="btnhome" href="index.html"><i class="fa-solid fa-house"></i></a>
            <h5>Relatório de Contas</h5>
        </div>
    
    `;
   
    closeddb.map((acountsMap)=>{
        console.log(acountsMap)
        containerCloseds.innerHTML+=`

            <div class='card'>
                <h6>Data: </h6><strong>`+acountsMap.data+`</strong>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        
        `;
    })
}

