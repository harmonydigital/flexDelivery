// console.log('backstage init..')

import {notyfier} from './notfyer.js'
const notfyapp ={
    async start(){ 
       try{
        await notyfier.init() 

        notyfier.notify({
            title:'Flex Notificação',
            body:'Notificação de novos pedidos'
        })
       }catch (err){ 
        console.log(err.message)
        }
    }
}

export { notfyapp }