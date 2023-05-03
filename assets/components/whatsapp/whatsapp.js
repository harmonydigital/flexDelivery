sendMsgWhats=(number)=>{ 
whatsCli=number

url=`https://wa.me/`+whatsCli+`?text=Canoas Praia Bar: Para confirmar seu pedido, responda está mensagem com o comprovante de pagamento!`
location.href = url

}