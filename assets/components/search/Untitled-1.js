<form  data-gtm-form-interact-id="1">
          <div style="
          width: 100%;
      ">
            <label style="
              width: 100%;
              height: auto;
              ">
            Forma de retirada:
            </label> 
            <div class="mylabel select">
              <label>
              <img src="assets/images/inputs/archive.png">
              </label>
              <select onchange="formaRetirada()" id="selectCheckout" data-gtm-form-interact-field-id="2">
                <option value="1">Selecione a forma de retirada</option>
                <option value="balcao">Delivery</option>
                <option value="mesa">Mesa</option>
              </select>
            </div>
            <div id="setMesa" class="mylabel" style="display: none;">
              <label style="height:48px;"> 
              <img src="assets/images/inputs/mesa.png">  
              </label>
              <input id="inputMesa" type="number" placeholder="Digite o numero da mesa">
            </div>
            <div id="whatsappId" style="display: block;">
              <!-- <span>Receba notificação via whatsapp </span> -->
              <div id="setPhone" class="mylabel">
                <label style="height:48px;">   
                <svg class="svg-inline--fa fa-location-dot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"></path></svg><!-- <i class="fa-solid fa-location-dot"></i> Font Awesome fontawesome.com -->
                </label>
                <input id="inputLocation" type="text" placeholder="Endereço de entrega...">
              </div>

              <div id="setEnd" class="mylabel">
                <label style="height:48px;">  
                <img src="assets/images/inputs/whats.png">  
                </label>
                <input id="inputMesa" type="number" placeholder="Numero celular whatsapp">
              </div>
            </div>
            
          </div>
          <div style="position: relative;">
                <label> 
                Observações do Pedido:
                </label>
                <textarea id="areaObs" placeholder="Digite observações do seu pedido"></textarea>
              </div>
              <div id="mgg"></div>
              <div class="total" id="totalfinesh"> 
                <button type="submit" id="submitCheck">ENVIAR MEU PEDIDO <svg class="svg-inline--fa fa-paper-plane" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L277.3 424.9l-40.1 74.5c-5.2 9.7-16.3 14.6-27 11.9S192 499 192 488V392c0-5.3 1.8-10.5 5.1-14.7L362.4 164.7c2.5-7.1-6.5-14.3-13-8.4L170.4 318.2l-32 28.9 0 0c-9.2 8.3-22.3 10.6-33.8 5.8l-85-35.4C8.4 312.8 .8 302.2 .1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path></svg><!-- <i class="fa-solid fa-paper-plane"></i> Font Awesome fontawesome.com --> </button>
              
        <div class="total" id="fineshPay" style=" z-index: 99;"> 
            Total da compra
            R$&nbsp;90,00 

            <span id="clickpague" onclick="animatedCheckOut()" style="display: block;">clique e pague</span>
            
            <div id="rrcode" style="
            background: white;
            padding: 0 7px 6px; display:none;
        ">
                <img style="
                position: relative;
                width: 195px;
                left:0;
            " src="https://lidneyr.github.io/adm/assets/components/impressao/andd.png"> 

           <span> Pague com QR CODE </span>
        <span style="
        text-align: center;
        display: inline-flex;
        margin: 20px auto;
        font-weight: 300;
    ">CHAVE <br>  12996218661 </span>
           </div>
        
             <button type="submit" id="submitCheck">ENVIAR MEU PEDIDO 
             <svg class="svg-inline--fa fa-paper-plane" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L277.3 424.9l-40.1 74.5c-5.2 9.7-16.3 14.6-27 11.9S192 499 192 488V392c0-5.3 1.8-10.5 5.1-14.7L362.4 164.7c2.5-7.1-6.5-14.3-13-8.4L170.4 318.2l-32 28.9 0 0c-9.2 8.3-22.3 10.6-33.8 5.8l-85-35.4C8.4 312.8 .8 302.2 .1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path></svg><!-- <i class="fa-solid fa-paper-plane"></i> Font Awesome fontawesome.com -->
             </button>
        </div> 
        </div>
          </form>