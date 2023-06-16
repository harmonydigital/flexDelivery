formcheckout=document.getElementById('checkoutform')
totalfinesh=document.getElementById("totalfinesh") 

inpuMMesa=document.getElementById('inputMesa')

inputLocation=document.getElementById('inputLocation')
locationvalue=""

whatsappId=document.getElementById('whatsappId')
inpuMWhats="" 

 
function showNumber(){  var n=100;  return n+=1 }
getCheckout=()=>{ 
 

    select=document.getElementById('selectValidate')
    text = select.options[select.selectedIndex].text;
    containerCheckout=document.getElementById('checkout')
    containerCheckout.setAttribute("class", "checkout") 
    selectCheck=document.getElementById('selectCheckout')
    optionsCheck=selectCheck.options[selectCheck.selectedIndex].text
    observacaoPedido='Nenhuma observação'
    retiradavalue=0

    
 

    areaObs.addEventListener('change', function(event){ 
        observacaoPedido=event.target.value
        obs=observacaoPedido
        obsData={'observacaoPedido':observacaoPedido} 

    })


    // VALIDA CAMPO HOME
    if(text=="Mesa"){
        mesaCheck=document.getElementById('selectMesaCheckout') 
    }

    // VALIDA CAMPO CHECKOUT 
    if(optionsCheck=="Mesa"){ 
        mesaCheck.parentNode.style.cssText="display:flex"   

    }
 
    // Open Checkout container
    containerCheckout.style.cssText="display:block"




    
}


formaRetirada=()=>{


       
    retiradavalue=document.getElementById('selectCheckout').value
    setMesa=document.getElementById('setMesa') 
    

 

    if(retiradavalue=='mesa'){
        setMesa.style.cssText="display:flex"   
        whatsappId.style.cssText="display:none"  
        // clickpague.style.cssText="display:none"  

    }else if(retiradavalue=='delivery'){

        setMesa.style.cssText="display:none"  
        whatsappId.style.cssText="display:block"   
        inpuMVaue=0
    }else if(retiradavalue=='balcao'){
 
        inpuMVaue=0
        setMesa.style.cssText="display:none" 
        whatsappId.style.cssText="display:none"  

    }


    //Mesa Digitada
    setMesa.addEventListener('focusout', function(e){ 
        inpuMVaue=document.getElementById('inputMesa').value.toString()   
    })

    //whats Digitado
    whatsappId.addEventListener('focusout', function(e){
              inpuMWhats=e.target.value.toString()  
          
    })
    //Endereço Digitado
    inputLocation.addEventListener('focusout', function(e){
        console.log(e.target.value)
        locationvalue=e.target.value
    })
    
    
    
    allordersBuy=[{ 
        idPedido:Math.floor(Math.random() * 1000).toString(),
        data:dataHoraFormat(),
        hora:relogio(),
        itens:prodsSelct,
        location:locationvalue, 
        observacao:obs

    }]
}


window.onload=()=>{
    
    ordersLabDeliveryArr=[] 
    recebePedidos=[]


    const date = new Date();
    // console.log(date)

   
 
}
