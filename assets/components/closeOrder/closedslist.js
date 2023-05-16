 


function accoutsCloseds(closedData){
    let closeddb=closedData
    console.log(closeddb)

    var app=document.getElementById('app')
    app.innerHTML='Ola'

    closeddb.map((accoutsClmap)=>{
     

    app.innerHTML=`
    
    <div class="data_container"> 
        <div class="card" style=" display: flex; align-items: center; color: red; justify-content: space-between;"> 
            <div>
                <h6>`+accoutsClmap.data+`</h6>   
                <span id="nSalesTables" class="price">Total de vendas dia: R$ 2,000,00 </span>
            </div>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
        
    `

        accoutsClmap.contasFechadas.map((CFMap)=>{
            // console.log(CFMap)

        })
    })

}

