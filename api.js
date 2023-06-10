tabledatatest=[]
data=[]
prodsArray=[]

// data = [{ 
//     id:'0C',
//     name:'Para Comer', 
//     key:'Comer', 
//     image:'assets/images/IconComida-White.png',
//     image2:'assets/images/IconComida-Orange.png',
//         itens:[{ 
//             id:'1SC',
//             name:'Porções', 
//             products:[{
//                 id:'175',
//                 name:'Porção Camarão Rosa Paulista', 
//                 price:150, 
//                 img:'assets/images/produtos/camaraorosapaulista.png',
//                 quantidade:0,
//             },{
//                 id:'180',
//                 name:'Porção Camarão Rosa Dorê', 
//                 price:130, 
//                 img:'assets/images/produtos/camaraorosadore.png',
//                 quantidade:0,
//             },{
//                 id:'150',
//                 name:'Porção Camarão Paulista', 
//                 price:100, 
//                 img:'assets/images/produtos/camaraopaulista.png',
//                 quantidade:0,
//             },{
//                 id:'151',
//                 name:'Porção Camarão a Dorê', 
//                 price:80, 
//                 img:'assets/images/produtos/camaraodore.png',
//                 quantidade:0,


                
//             },{
//                 id:'152',
//                 name:'Porção Lula Dorê', 
//                 price:80,
//                 img:'assets/images/produtos/luladore.png',
//                 quantidade:0,


//             },{
//                 id:'153',
//                 name:'Porção Peixe Tilápia', 
//                 img:'assets/images/produtos/tilapia.png',

//                 price:70,
//                 quantidade:0,


//             },{
//                 id:'154',
//                 name:'Porção Peixe Cação', 
//                 img:'assets/images/produtos/cacao.png',

//                 price:70,
//                 quantidade:0,


//             },{
//                 id:'155',
//                 name:'Porção Peixe Pescada', 
//                 img:'assets/images/produtos/pescada.png', 
//                 price:70,
//                 quantidade:0,


//             },{
//                 id:'156',
//                 name:'Porção Peixe Merluza', 
//                 img:'assets/images/produtos/merluza.png', 
//                 price:70,
//                 quantidade:0,


//             },{
//                 id:'158',
//                 name:'Porção Peixe Porquinho', 
//                 img:'assets/images/produtos/porquinho.png', 
//                 price:70,
//                 quantidade:0,


//             },{
//                 id:'159',
//                 name:'Fritas', 
//                 img:'assets/images/produtos/fritas.png', 

//                 price:40,
//                 quantidade:0,


//             },{
//                 id:'160',
//                 name:'Fritas com Queijo', 
//                 img:'assets/images/produtos/fritasqueijo.png', 

//                 price:45,
//                 quantidade:0,


//             },{
//                 id:'161',
//                 name:'Porção Mandioca', 
//                 img:'assets/images/produtos/mandioca.png', 

//                 price:40,
//                 quantidade:0,


//             },{
//                 id:'162',
//                 name:'Porção Mandioca com Queijo', 
//                 img:'assets/images/produtos/mandiocaqueijo.png', 

//                 price:45,
//                 quantidade:0,


//             },{
//                 id:'164',
//                 name:'Porção Calabresa', 
//                 img:'assets/images/produtos/calabresa.png', 

//                 price:55,
//                 quantidade:0,


//             },{
//                 id:'171',
//                 name:'Molho Extra', 
//                 img:'assets/images/produtos/molhoextra.png', 

//                 price:3, 
//                 quantidade:0,


//             },{
//                 id:'172',
//                 name:'Pão Extra', 
//                 img:'assets/images/produtos/paoextra.png', 

//                 price:4, 
//                 quantidade:0,


//             }]
        
//         },{ 
//             id:'2',
//             name:'Lanches',
//             products:[{
//                 id:'112',
//                 name:'Hot Dog', 
//                 img:'assets/images/produtos/hotdog.png',  
//                 price:20,
//                 quantidade:0, 
//             }]
       
        
//         },{ 
//             id:'3',
//             name:'Pastéis',
//             products:[{
//                 id:'90',
//                 name:'Pastel Carne ', 
//                 img:'assets/images/produtos/pastelcarne.png',  

//                 price:14,
//                 quantidade:0,
//             },{
//                 id:'91',
//                 name:'Pastel Queijo', 
//                 img:'assets/images/produtos/pastelqueijo.png',  

//                 price:14,
//                 quantidade:0,
//             },{
//                 id:'92',
//                 name:'Pastel Bauru', 
//                 img:'assets/images/produtos/pastelbauru.png',  

//                 price:14,
//                 quantidade:0,
//             },{
//                 id:'93',
//                 name:'Pastel Calabresa', 
//                 img:'assets/images/produtos/pastelcalabresa.png',  

//                 price:14,
//                 quantidade:0,
//             },{
//                 id:'94',
//                 name:'Pastel Frango', 
//                 img:'assets/images/produtos/pastelfrango.png',  

//                 price:14,
//                 quantidade:0,
//             },{
//                 id:'95',
//                 name:'Pastel Pizza', 
//                 img:'assets/images/produtos/pastelpizza.png',  

//                 price:14,
//                 quantidade:0,
//             },{
//                 id:'96',
//                 name:'Pastel Brócolis', 
//                 img:'assets/images/produtos/pastelbrocolis.png',  

//                 price:14,
//                 quantidade:0,
//             },{
//                 id:'98',
//                 name:'Pastel Carne com Queijo', 
//                 img:'assets/images/produtos/pastelcarnequeijo.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'99',
//                 name:'Pastel Brócolis com Queijo', 
//                 img:'assets/images/produtos/pastelbrocolisqueijo.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'100',
//                 name:'Pastel Frango com Catupiry', 
//                 img:'assets/images/produtos/pastelfrangocatupiry.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'101',
//                 name:'Pastel Palmito', 
//                 img:'assets/images/produtos/pastelpalmito.png',  

//                 price:14,
//                 quantidade:0,
//             },{
//                 id:'102',
//                 name:'Pastel Camarão', 
//                 img:'assets/images/produtos/pastelcamarao.png',  

//                 price:16,
//                 quantidade:0,
//             }]
        
        
//         },{  
//             id:'4',
//             name:'Pastéis Doces',
//             products:[{
//                 id:'103',
//                 name:'Pastel Prestigio', 
//                 img:'assets/images/produtos/pastelprestigio.png',  

//                 price:15,
//                 quantidade:0,
//             },{
//                 id:'104',
//                 name:'Pastel Chocolate ou Nutella', 
//                 img:'assets/images/produtos/pastelchocolatenutella.png',  

//                 price:15,
//                 quantidade:0,
//             },{
//                 id:'105',
//                 name:'Pastel Chocolate com Banana', 
//                 img:'assets/images/produtos/pastelchocolatebanana.png',  

//                 price:15,
//                 quantidade:0,
//             },{
//                 id:'106',
//                 name:'Pastel Chocolate com Morango', 
//                 img:'assets/images/produtos/pastelchocolatemorango.png',  

//                 price:15,
//                 quantidade:0,
//             },{
//                 id:'107',
//                 name:'Pastel Leite Condensado c/ Coco', 
//                 img:'assets/images/produtos/pastelleitecondensadococo.png',  

//                 price:15,
//                 quantidade:0,
//             },{
//                 id:'108',
//                 name:'Pastel Nutella com Morango', 
//                 img:'assets/images/produtos/pastelchocolatemorango.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'109',
//                 name:'Pastel Nutella com Banana', 
//                 img:'assets/images/produtos/pastelchocolatebanana.png',  

//                 price:16,
//                 quantidade:0,
//             }  ]     
        

//         },{  
//             id:'5',
//             name:'Tapiocas',
//             products:[{
//                 id:'60',
//                 name:'Tapioca Carne', 
//                 img:'assets/images/produtos/tapiocacarne.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'61',
//                 name:'Tapioca Queijo', 
//                 img:'assets/images/produtos/tapiocaqueijo.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'62',
//                 name:'Tapioca Bauru', 
//                 img:'assets/images/produtos/tapiocabauru.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'63',
//                 name:'Tapioca Frango', 
//                 img:'assets/images/produtos/tapiocafrango.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'64',
//                 name:'Tapioca Pizza', 
//                 img:'assets/images/produtos/tapiocapizza.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'65',
//                 name:'Tapioca Brócolis', 
//                 img:'assets/images/produtos/tapiocabrocolis.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'67',
//                 name:'Tapioca Carne com Queijo', 
//                 img:'assets/images/produtos/tapiocacarnequeijo.png',  

//                 price:18,
//                 quantidade:0,
//             },{
//                 id:'68',
//                 name:'Tapioca Brócolis com Queijo', 
//                 img:'assets/images/produtos/tapiocabrocolisqueijo.png',  

//                 price:18,
//                 quantidade:0,
//             },{
//                 id:'69',
//                 name:'Tapioca Frango com Queijo', 
//                 img:'assets/images/produtos/tapiocafrangoqueijo.png',  

//                 price:18,
//                 quantidade:0,
//             },{
//                 id:'70',
//                 name:'Tapioca Palmito', 
//                 img:'assets/images/produtos/tapiocapalmito.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'71',
//                 name:'Tapioca Camarão', 
//                 img:'assets/images/produtos/tapiocacamarao.png',  

//                 price:18,
//                 quantidade:0,
//             } ]      
        
//         },{  
//             id:'6',
//             name:'Tapiocas Doces',
//             products:[{
//                 id:'72',
//                 name:'Tapioca Prestigio', 
//                 img:'assets/images/produtos/tapiocaprestigio.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'73',
//                 name:'Tapioca Chocolate ou Nutella', 
//                 img:'assets/images/produtos/tapiocachocolatenutella.png',  
//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'74',
//                 name:'Tapioca Chocolate com Banana', 
//                 img:'assets/images/produtos/tapiocachocolatebanana.png',  
//                 price:17,
//                 quantidade:0,
//             },{
//                 id:'75',
//                 name:'Tapioca Chocolate com Morango', 
//                 img:'assets/images/produtos/tapiocachocolatemorango.png',  
//                 price:17,
//                 quantidade:0,
//             },{
//                 id:'76',
//                 name:'Tapioca Leite Condensado c/ Coco', 
//                 img:'assets/images/produtos/tapiocaleitecoco.png',  
//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'77',
//                 name:'Tapioca Nutella com Morango', 
//                 img:'assets/images/produtos/tapiocanutellamorango.png',  
//                 price:18,
//                 quantidade:0,
//             },{
//                 id:'78',
//                 name:'Tapioca Nutella com Banana', 
//                 img:'assets/images/produtos/tapiocanutellabanana.png',  
//                 price:18,
//                 quantidade:0,
//             }       
//         ]       
        
//         },{  
//             id:'7',
//             name:'Panquecas',
//             products:[{
//                 id:'30',
//                 name:'Panqueca Carne', 
//                 img:'assets/images/produtos/panquecacarne.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'31',
//                 name:'Panqueca Queijo', 
//                 img:'assets/images/produtos/panquecaqueijo.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'32',
//                 name:'Panqueca Bauru', 
//                 img:'assets/images/produtos/panquecabauru.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'33',
//                 name:'Panqueca Frango', 
//                 img:'assets/images/produtos/panquecafrango.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'34',
//                 name:'Panqueca Pizza', 
//                 img:'assets/images/produtos/panquecapizza.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'35',
//                 name:'Panqueca Brócolis', 
//                 img:'assets/images/produtos/panquecabrocolis.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'37',
//                 name:'Panqueca Carne com Queijo', 
//                 img:'assets/images/produtos/panquecacarnequeijo.png',  

//                 price:18,
//                 quantidade:0,
//             },{
//                 id:'38',
//                 name:'Panqueca Brócolis com Queijo', 
//                 img:'assets/images/produtos/panquecabrocolisqueijo.png',  

//                 price:18,
//                 quantidade:0,
//             },{
//                 id:'39',
//                 name:'Panqueca Frango com Catupiry', 
//                 img:'assets/images/produtos/panquecafrangocatupiry.png',  

//                 price:18,
//                 quantidade:0,
//             },{
//                 id:'40',
//                 name:'Panqueca Palmito', 
//                 img:'assets/images/produtos/panquecapalmito.png',  

//                 price:16,
//                 quantidade:0,
//             },{
//                 id:'41',
//                 name:'Panqueca Camarão', 
//                 img:'assets/images/produtos/panquecacamarao.png',  

//                 price:18,
//                 quantidade:0,
//             }       
//         ]    
     
//         },{  
//             id:'8Cm',
//             name:'Mini Pizzas',
//             products:[{
//                 id:'176',
//                 name:'Pizza Mini Mussarela', 
//                 img:'assets/images/produtos/minimussarela.png',  

//                 price:15,
//                 quantidade:0,
//             },{
//                 id:'177',
//                 name:'Pizza Mini Presunto e Queijo', 
//                 img:'assets/images/produtos/minipresuntomussarela.png',  

//                 price:15,
//                 quantidade:0,
//             },{
//                 id:'178',
//                 name:'Pizza Mini Calabresa', 
//                 img:'assets/images/produtos/minicalabresa.png',  

//                 price:15,
//                 quantidade:0,
//             },{
//                 id:'179',
//                 name:'Pizza Mini Brócolis', 
//                 img:'assets/images/produtos/minibrocolis.png',  

//                 price:15,
//                 quantidade:0,
//             }]    
     
//         }

//         ]
//     },{ 
//     id:'1C',
//     name:'Para Beber', 
//     key:'Beber',
//     image:'assets/images/IconBebidas-White.png',
//     image2:'assets/images/IconBebidas-Orange.png',

//         itens:[{ 
//             id:'4c',
//             name:'Bebidas', 
//             products:[{
//                 id:'1',
//                 key:'',
//                 name:'Água sem Gás', 
//                 img:'assets/images/produtos/bebidaaguasgas.png',  
//                 price:4,
//                 quantidade:0, 
//             },{
//                 id:'2',
//                 key:'',
//                 name:'Água com Gás', 
//                 img:'assets/images/produtos/bebidaaguacgas.png',  
//                 price:5,
//                 quantidade:0, 
//             },{
//                 id:'3',
//                 key:'',
//                 name:'H20 Limão', 
//                 img:'assets/images/produtos/bebidah2o.png',  
//                 price:8,
//                 quantidade:0, 
//             },{
//                 id:'5',
//                 key:'',
//                 name:'Refrigerante lata', 
//                 img:'assets/images/produtos/bebidarefrilata.png',  
//                 price:7,
//                 quantidade:0, 
//             },{
//                 id:'6',
//                 key:'',
//                 name:'Refrigerante Zero lata ', 
//                 img:'assets/images/produtos/bebidarefrizerolata.png',  
//                 price:7,
//                 quantidade:0, 
//             },{
//                 id:'7',
//                 key:'',
//                 name:'Schweppes', 
//                 img:'assets/images/produtos/bebidasweppeslata.png',  
//                 price:8,
//                 quantidade:0, 
//             },{
//                 id:'8',
//                 key:'',
//                 name:'Tônica', 
//                 img:'assets/images/produtos/bebidatonicalata.png',  
//                 price:8,
//                 quantidade:0, 
//             },{
//                 id:'9',
//                 key:'',
//                 name:'Copo c/ Gelo', 
//                 img:'assets/images/produtos/bebidacopogelo.png',  
//                 price:5,
//                 quantidade:0, 
//             },{
//                 id:'10',
//                 key:'',
//                 name:'Copo c/ Gelo e Limão', 
//                 img:'assets/images/produtos/bebidacopogelolimao.png',  
//                 price:5,
//                 quantidade:0, 
//             },{
//                 id:'11',
//                 key:'',
//                 name:'Copo Limão e Sal', 
//                 img:'assets/images/produtos/bebidacopolimaosal.png',  
//                 price:5,
//                 quantidade:0, 
//             },{
//                 id:'20',
//                 key:'',
//                 name:'Suco Natural', 
//                 img:'assets/images/produtos/bebidasuconatural.png',  
//                 price:15,
//                 quantidade:0, 
//             },{
//                 id:'21',
//                 key:'',
//                 name:'Suco natural com 2 Frutas', 
//                 img:'assets/images/produtos/bebidasucoduasfrutas.png',  
//                 price:18,
//                 quantidade:0, 
//             },{
//                 id:'22',
//                 key:'',
//                 name:'Suco Natural com Leite Condensado', 
//                 img:'assets/images/produtos/bebidasuconaturalleitec.png',  
//                 price:18,
//                 quantidade:0, 
//             },{
//                 id:'25',
//                 key:'',
//                 name:'Suco de Polpa', 
//                 img:'assets/images/produtos/bebidasucopolpa.png',  
//                 price:12,
//                 quantidade:0, 
//             },{
//                 id:'26',
//                 key:'',
//                 name:'Suco de Polpa com Leite condensado', 
//                 img:'assets/images/produtos/bebidasucopolpaleitec.png',  
//                 price:14,
//                 quantidade:0, 
//             },{
//                 id:'27',
//                 key:'',
//                 name:'Coco Gelado', 
//                 img:'assets/images/produtos/bebidascocogelado.png',  
//                 price:10,
//                 quantidade:0, 
//             }]
        
//         },{ 
//             id:'5c',
//             name:'Cervejas', 
//             products:[{
//                 id:'130',
//                 name:'Cerveja Skol / Brahma Lata', 
//                 img:'assets/images/produtos/cervejalatas.png',  
//                 price:7, 
//                 quantidade:0,
//             },{
//                 id:'131',
//                 name:'Cerveja Brahma Duplo / Original / Petra Lata', 
//                 img:'assets/images/produtos/cervejaduplolata.png',  
//                 price:8, 
//                 quantidade:0,

//             },{
//                 id:'132',
//                 name:'Cerveja Heineken / Bud / Stella Lata', 
//                 img:'assets/images/produtos/cervejabudlata.png',  
//                 price:10,
//                 quantidade:0, 

//             },{
//                 id:'133',
//                 name:'Cerveja Corona / Heineken Long Neck', 
//                 img:'assets/images/produtos/cervejalong.png',  
//                 price:12.99,
//                 quantidade:0, 

//             },{
//                 id:'134',
//                 name:'Cerveja Bud / Stella Long Neck', 
//                 img:'assets/images/produtos/cervejabudestellalongneck.png',  
//                 price:12,
//                 quantidade:0, 

//             },{
//                 id:'135',
//                 name:'Cerveja sem alcool Long Neck ', 
//                 img:'assets/images/produtos/cervejaheinekensalcoollongneck.png',  
//                 price:12.99,
//                 quantidade:0, 

//             },{
//                 id:'191',
//                 name:'Red Bull Energético', 
//                 img:'assets/images/produtos/cervejaredbull.png',  
//                 price:15,
//                 quantidade:0, 

//             },{
//                 id:'192',
//                 name:'Monster Energético', 
//                 img:'assets/images/produtos/cervejamonster.png',  
//                 price:15,
//                 quantidade:0, 

//             }]
//         },{ 
//             id:'6c',
//             name:'Caipirinhas', 
//             products:[{
//                 id:'140',
//                 name:'Caipirinha Pinga', 
//                 img:'assets/images/produtos/caipirinhapinga.png',  
//                 price:22, 
//                 quantidade:0,
//             },{
//                 id:'141',
//                 name:'Caipirinha Vodka Orloff', 
//                 img:'assets/images/produtos/caipirinhaorloff.png',  
//                 price:26, 
//                 quantidade:0,

//             },{
//                 id:'142',
//                 name:'Caipirinha Vodka Smirnoff', 
//                 img:'assets/images/produtos/caipirinhasmirnoff.png',  
//                 price:28,
//                 quantidade:0, 

//             },{
//                 id:'143',
//                 name:'Caipirinha Rum', 
//                 img:'assets/images/produtos/caipirinharum.png',  
//                 price:25,
//                 quantidade:0, 

//             },{
//                 id:'145',
//                 name:'Caipirinha Cachaça', 
//                 img:'assets/images/produtos/caipirinhacachaca.png',  
//                 price:23,
//                 quantidade:0, 

//             },{
//                 id:'146',
//                 name:'Caipirinha com Duas Frutas', 
//                 img:'assets/images/produtos/caipirinhaduasfrutas.png',  
//                 price:28,
//                 quantidade:0, 

//             },{
//                 id:'147',
//                 name:'Caipirinha com Pimenta', 
//                 img:'assets/images/produtos/caipirinhapimenta.png',  
//                 price:26,
//                 quantidade:0, 

//             },{
//                 id:'149',
//                 name:'Caipirinha Saque', 
//                 img:'assets/images/produtos/caipirinhasaque.png',  
//                 price:22,
//                 quantidade:0, 

//             }]
//         },{ 
//             id:'7c',
//             name:'Batidas', 
//             products:[{
//                 id:'185',
//                 name:'Batida Pinga', 
//                 img:'assets/images/produtos/batidapinga.png',  
//                 price:20, 
//                 quantidade:0,
//             },{
//                 id:'107C',
//                 name:'Batida Cachaça', 
//                 img:'assets/images/produtos/batidacachaca.png',  
//                 price:23, 
//                 quantidade:0,

//             },{
//                 id:'186',
//                 name:'Batida Vodka Orloff', 
//                 img:'assets/images/produtos/batidaorloff.png',  
//                 price:25,
//                 quantidade:0, 

//             },{
//                 id:'110',
//                 name:'Batida Vodka Smirnoff', 
//                 img:'assets/images/produtos/batidasmirnoff.png',  
//                 price:28,
//                 quantidade:0, 

//             },{
//                 id:'221',
//                 name:'Batida Espanhola', 
//                 img:'assets/images/produtos/batidaespanhola.png',  
//                 price:22,
//                 quantidade:0, 

//             }]
//         },{ 
//             id:'8c',
//             name:'Doses', 
//             products:[{
//                 id:'201',
//                 name:'Dose Pinga', 
//                 img:'assets/images/produtos/dosepinga.png',  
//                 price:5, 
//                 quantidade:0,
//             },{
//                 id:'202',
//                 name:'Dose Ypioca', 
//                 img:'assets/images/produtos/doseypioca.png',  
//                 price:8, 
//                 quantidade:0,

//             },{
//                 id:'203',
//                 name:'Dose Cinar', 
//                 img:'assets/images/produtos/dosecinar.png',  
//                 price:10,
//                 quantidade:0, 

//             },{
//                 id:'204',
//                 name:'Dose Cachaça', 
//                 img:'assets/images/produtos/dosecachaca.png',  
//                 price:8,
//                 quantidade:0, 

//             },{
//                 id:'205',
//                 name:'Dose Vodka Smirnoff / Orloff', 
//                 img:'assets/images/produtos/dosevodka.png',  
//                 price:14,
//                 quantidade:0, 

//             },{
//                 id:'206',
//                 name:'Dose Campare', 
//                 img:'assets/images/produtos/dosecampare.png',  
//                 price:18,
//                 quantidade:0, 

//             },{
//                 id:'207',
//                 name:'Dose Martini', 
//                 img:'assets/images/produtos/dosemartini.png',  
//                 price:14,
//                 quantidade:0, 

//             },{
//                 id:'208',
//                 name:'Dose Contine', 
//                 img:'assets/images/produtos/dosecontine.png',  
//                 price:14,
//                 quantidade:0, 

//             },{
//                 id:'209',
//                 name:'Dose Jurupinga', 
//                 img:'assets/images/produtos/dosejurupinga.png',  
//                 price:12,
//                 quantidade:0, 

//             },{
//                 id:'210',
//                 name:'Dose Conhaque', 
//                 img:'assets/images/produtos/doseconhaque.png',  
//                 price:8,
//                 quantidade:0, 

//             },{
//                 id:'211',
//                 name:'Drink Cuba libre', 
//                 img:'assets/images/produtos/dosecubralibre.png',  
//                 price:20,
//                 quantidade:0, 

//             },{
//                 id:'212',
//                 name:'Drink Gin Tônica', 
//                 img:'assets/images/produtos/dosegintonica.png',  
//                 price:20,
//                 quantidade:0, 

//             },{
//                 id:'213',
//                 name:'Dose Rum', 
//                 img:'assets/images/produtos/doserum.png',  
//                 price:14,
//                 quantidade:0, 

//             },{
//                 id:'214',
//                 name:'Dose Gin', 
//                 img:'assets/images/produtos/dosegin.png',  
//                 price:14,
//                 quantidade:0, 

//             },{
//                 id:'224',
//                 name:'Drink Pina Colada', 
//                 img:'assets/images/produtos/dosepinacolada.png',  
//                 price:22,
//                 quantidade:0, 

//             },{
//                 id:'227',
//                 name:'Drink Canoa Beat', 
//                 img:'assets/images/produtos/dosecanoasbeat.png',  
//                 price:28,
//                 quantidade:0, 

//             },{
//                 id:'241',
//                 name:'Dose Whisky Passport', 
//                 img:'assets/images/produtos/dosepassport.png',  
//                 price:18,
//                 quantidade:0, 

//             }]
//         }  
//         ]
//     }


// ]

requestMenuRest=(dataMenuRes)=>{

    dataMenuRes.map((apiData)=>{ 
   
        apiData.dataProd.map((mapDataProd)=>{ 
            // console.log(mapDataProd)
            data.push(mapDataProd)
        })

    })  
        
    data.map((apiData)=>{  
        apiData.itens.map((itensMap)=>{  
            itensMap.products.map((productsMap)=>{  
                prodsArray.push(productsMap)

            }) 
        }) 

    }) 

    console.log(prodsArray)
    
} 


var apiContainer=document.getElementById('api') 
var categoriesContainer=document.getElementById('categories') 
ii=0

 getApi=(container)=>{
    container.innerHTML =` <div class="tab"> </div>`;
    prods=""
    data.map((apiData)=>{ 
         
        container.childNodes[1].innerHTML += ` 

            <button key="`+apiData.id+`" class="tablinks" onclick="openCity(event, '`+apiData.id +`')">
                <img class="img1" src=" `+apiData.image +`" alt="">
                <img class="img2"  src=" `+apiData.image2 +`" alt="">
                `+apiData.name +`
            </button>
          
        `;
        container.innerHTML += ` 

            <div id="`+apiData.id +`" class="tabcontent">  
            </div>
      
        `; 
        document.getElementById(apiData.id.toString()).innerHTML+= `  
        <div class="tab sub"  >
            <div class="swiper mySwiperTabs">
            <div class="swiper-wrapper" id="`+apiData.key +`" >
                
           
            
            </div>
            
            </div>
        </div>
          `; 
          
        var subs=document.getElementById(apiData.key)
       
        apiData.itens.map((itensMap)=>{        

            ii+=itensMap
            subs.innerHTML+= ` 
                 <div class="swiper-slide"> 
                    <button class="tablinks" onclick="openCity(event, '`+itensMap.id +`', '`+apiData.id +`')">`+itensMap.name +`</button> 
                 </div>
            `;
           
          
        }) 
        apiData.itens.map((tabContentMap)=>{ 
           
           
            document.getElementById(apiData.id.toString()).innerHTML+= ` 
               
                <div id="`+tabContentMap.id +`" class="tabcontent">  
                </div>
            `;
            var Contentsubs=document.getElementById(tabContentMap.id)
           
          innitProd=  tabContentMap.products.map((productsMap)=>{  
            prods+=productsMap
                    Contentsubs.innerHTML+= `  
                        <div class="produto">
                                <img src="`+productsMap.img +`" alt="" s></img>
                            <div class="prod-val">
                                <h3 class="title-prod">`+productsMap.name +`</h3> 
                                <span class="valor">`+productsMap.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+`</span>
                            </div>
                            <div class="quantidade">
                                <button key="`+productsMap.id +`" onclick="addProd(this,`+productsMap.id +`); ">+</button>
                                <input  id="`+productsMap.id +`" value="`+productsMap.quantidade +`" type="text" placeholder="0">
                                <button key="`+productsMap.id +`" onclick="removeProd(this,`+productsMap.id +`); ">-</button>
              
                            </div>
                        </div> 
                        </div>
                    `;


                if(productsMap.price==undefined){
                  

                }
   
                }) 
        }) 
     }) 
 }
  
 categoriesContainer ? getApi(categoriesContainer) : console.log("..");


 var value = 0

 removeProd=(ProdThis, inputProd)=>{ 
 
    var key=ProdThis.getAttribute('key')
    input=document.getElementById(inputProd)
    
    data.map((apiData)=>{   
        apiData.itens.map((itensMap)=>{     
             itensMap.products.map((productsMap)=>{ 
              

              if(productsMap.id===key && productsMap.quantidade>0){

         
                productsMap.quantidade-- 
                value=productsMap.quantidade  
    
                document.getElementById(key+'search').setAttribute('value',value)
                
                refrashCart(inputProd)

              }
             }) 
        }) 

     }) 

    

    
  }

    
 addProd=(ProdThis, inputProd)=>{ 
    event.preventDefault
    var key=ProdThis.getAttribute('key')
     

      input=document.getElementById(key)
      inputSearch=document.getElementById(key+'search')
      
 
    data.map((apiData)=>{   
        apiData.itens.map((itensMap)=>{     
             itensMap.products.map((productsMap)=>{ 
        
              if(productsMap.id===key ){

                productsMap.quantidade++
                value=productsMap.quantidade 
  

                document.getElementById(key+'search').setAttribute('value',key)
                if(inputSearch){
                    inputSearch.setAttribute('value',value)

                }
              }
             }) 
        }) 

     }) 

    
     refrashCart(inputProd)

    
  }

     
 refrashCart=(inputProd)=>{ 
     

  var cartContainer = document.getElementById('cartList')
  cartContainer.innerHTML=''
//   var cartPreview = document.getElementById('cartList')
  input =document.getElementById(inputProd)

  cartQtd=0
  totalCart=0
  itensTotal=0
  list=null

  data.map((apiData)=>{   
    apiData.itens.map((itensMap)=>{     
         itensMap.products.map((productsMap)=>{ 
           

          if(productsMap.quantidade>0){
            cartQtd+=productsMap.quantidade
            itensTotal+=productsMap.quantidade
            prodMultiply=productsMap.price*productsMap.quantidade
            totalCart+=prodMultiply
            list+=productsMap.name 
           
     
              cartContainer.innerHTML+= `  
                <div class='listprod'>
                    <div class="qtd-prod"> `+productsMap.quantidade +` </div>   
                    <div class="title-prod"> `+productsMap.name +` </div>   
                    <div class="title-prod"> `+productsMap.price +` </div>   
                </div>  

                             
                `;  
                


         }
        
         
         }) 

        
    }) 

 }) 

//    cartPreview.innerHTML= `<div><button id="cartPreview" onclick="showCart()"><img src="assets/images/shopping-cart.png" alt=""></button>      </div>`;  
//    cartContainer.innerHTML= `<div class="content"><h2>Pedido</h2><p ><span id="itensTotal"></span>  Itens na Cesta</p></div>`; 
   
   
 
  

        document.getElementById("itensTotal").innerHTML+=  itensTotal
        cartContainer.innerHTML+= ` 

            <div class="controls"  > 
                <button onclick="showCart()"><i class="fa-solid fa-chevron-left"></i></button>
                <button onclick="showCart()"><i class="fa-solid fa-xmark"></i></button>  
            </div> 
             <div class="total"> 
                Total da compra
                `+totalCart.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +` 
                <button onclick="getCheckout()">Finalizar Pedido <i class="fa-regular fa-rectangle-list"></i></button> 
            </div> 
        `; 
  }

    getCheckout=()=>{ 
        select=document.getElementById('selectValidate')
        text = select.options[select.selectedIndex].text;
        containerCheckout=document.getElementById('checkout')
        containerCheckout.setAttribute("class", "checkout")
        containerCheckout.innerHTML= ` 
        <div class="controls"> 
                <button onclick="closeCheckout()"><svg class="svg-inline--fa fa-chevron-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg><!-- <i class="fa-solid fa-chevron-left"></i> Font Awesome fontawesome.com --></button>
                <button onclick="closeCheckout()"><svg class="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path></svg><!-- <i class="fa-solid fa-xmark"></i> Font Awesome fontawesome.com --></button>  
            </div>
        <div class="content"><h2>Finalizar Pedido </h2> </div>
        <form>
        <div>
            <label>
            Forma de retirada:
            </label>
            

            <div class="select">
            <img src="assets/images/inputs/archive.png" style="margin-top: 16px;"/>

                <select onchange="formaRetirada()" id="selectCheckout" > 

                    <option value="1">Selecione a forma de retirada</option>
                    <option value="balcao">Balcão</option>
                    <option value="mesa">Mesa</option>
                </select>
            </div>
            <div class="select"  style="display:none;">
            <img src="assets/images/inputs/mesa.png" style="margin-top: 16px;"/ >

            <select  id="selectMesaCheckout" > 

                <option value="0">Selecione a Mesa</option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
              
            </select>
        </div>
        </div>
        <div style="position: relative;">
            <label> 
                Observações do Pedido:
            </label>
            <img src="assets/images/inputs/chat.png" style="margin-top: 38px;">

            <textarea id="areaObs" placeholder="Digite observações do seu pedido"></textarea>
            
        </div>
        <div id="mgg"></div>
        <form>

        <div class="total"> 
        Total da compra
            `+totalCart.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +` 
            <button onclick="sendOrder(event)">Enviar Pedido  <i class="fa-brands fa-whatsapp"></i> </button> 
        </div> 

                           
        
        `;
        selectCheck=document.getElementById('selectCheckout')
        optionsCheck=selectCheck.options[selectCheck.selectedIndex].text
        retiradavalue=0
        // VALIDA CAMPO HOME
        if(text=="Mesa"){
            mesaCheck=document.getElementById('selectMesaCheckout')
            mesaCheck.parentNode.style.cssText="display:block"
        }

        // VALIDA CAMPO CHECKOUT 
        if(optionsCheck=="Mesa"){
            
            mesaCheck.parentNode.style.cssText="display:block"

        }
        containerCheckout.style.cssText="display:block"
    }

    formaRetirada=()=>{
       
        retiradavalue=document.getElementById('selectCheckout').value
        mesaCheck=document.getElementById('selectMesaCheckout')

        if(retiradavalue=='mesa'){
            mesaCheck.parentNode.style.cssText="display:block"

        }else if(retiradavalue=='balcao'){
            mesaCheck.parentNode.style.cssText="display:none"

        }

   }
 
    sendOrder=(event)=>{
        event.preventDefault() 
    
        mesaCheck=document.getElementById('selectMesaCheckout').value

      if(retiradavalue=='mesa'){
              
            retirada=retiradavalue+" N* "+mesaCheck
            send()
        }else if(retiradavalue=='balcao'){
           
            retirada=retiradavalue 
            send()
        }else{
            alert('Preencha os Campos')

        }

        function send(){
            comments=document.getElementById("areaObs").value
            url+=""
            + "*Forma de Retirada*: " + retirada+ "%0a" // Dados do formulário
            +"%0a" 
            + "*Observações do Pedido*"
            + "%0a" // Quebra de linhas 
            +comments
    
            location.href = url
        }
    }

    closeCheckout=()=>{ 
        containerCheckout.classList.toggle("hide");
    }



   
 