const notyfier={

    async init(){

        const permition=await Notification.requestPermission()
        console.log(permition) 

        if(permition!=='granted'){
            throw new Error('Permissão negada')
        }

    },
    notify({title,body,icon}){

        new Notification(title,{
            body,
            icon 
        })
    }
}

export {notyfier}