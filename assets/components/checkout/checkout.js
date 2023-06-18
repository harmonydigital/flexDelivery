formcheckout=document.getElementById('checkoutform')
totalfinesh=document.getElementById("totalfinesh") 

inpuMMesa=document.getElementById('inputMesa')

inputLocation=document.getElementById('inputLocation')
locationvalue=""

whatsappId=document.getElementById('whatsappId')
inpuMWhats="" 
retiradavalue=false
var inpuMVaue=0
 
function showNumber(){  var n=100;  return n+=1 }
getCheckout=()=>{ 
 

    select=document.getElementById('selectValidate')
    text = select.options[select.selectedIndex].text;
    containerCheckout=document.getElementById('checkout')
    containerCheckout.setAttribute("class", "checkout") 
    selectCheck=document.getElementById('selectCheckout')
    optionsCheck=selectCheck.options[selectCheck.selectedIndex].text
    observacaoPedido='Nenhuma observação'

    
 

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
    selectCheck=document.getElementById('selectCheckout')


    

    if(retiradavalue=='mesa'){
        setMesa.style.cssText="display:flex"   
        whatsappId.style.cssText="display:none"  
        // clickpague.style.cssText="display:none"  

    }else if(retiradavalue=='delivery'){

        setMesa.style.cssText="display:none"  
        whatsappId.style.cssText="display:block"   
       
    }else if(retiradavalue=='balcao'){
 
     
        setMesa.style.cssText="display:none" 
        whatsappId.style.cssText="display:none"  

    }



    selectCheck.addEventListener('focusout', function(e){ 
       console.log(    retiradavalue=document.getElementById('selectCheckout').value
       )
    })
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
        // console.log(e.target.value)
        locationvalue=e.target.value
    })
    
    

}


window.onload=()=>{
    
    ordersLabDeliveryArr=[] 
    recebePedidos=[]


    const date = new Date();
    // console.log(date)

   
 
}
