

getPrint=(data)=>{
    console.log(data.getAttribute('class'))


    if(data.getAttribute('class')!='printAll'){

    setor=document.querySelectorAll('.setor')
    cards=document.querySelectorAll('.card')
    dataOrder=document.getElementById('dataOrder')
    controlspage=document.querySelector('div#openTable .controls')
    opeTable=document.getElementById('openTable')

     
    Array.from(cards).map((cardsMap)=>{ 
        cardsMap.style.cssText='display:none;'
        data.parentNode.style.cssText="display:block;" 
   
    })
   
    Array.from(setor).map((setorMap)=>{ 
        setorMap.style.cssText='display:none;'
    })
   


    data.style.cssText='display:block;'
    data.parentNode.cssText='display:block;'
    dataOrder.style.cssText='display:none;'
    controlspage.style.cssText='display:none'


    // console.log(controlspage)

    setTimeout(function(){ 
        dataOrder.style.cssText='display:inherit;'
        controlspage.style.cssText='display:flex'

        tabledetails() 
        
    }, 2000);
window.print()

}else{
    window.print()

    console.log(dataOrder.childNodes) 
}

}