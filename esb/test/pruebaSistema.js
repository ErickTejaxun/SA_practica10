var Request = require("request");
var PORTRESTAURANTE = 5000;
var PORTREPARTIDOR  = 5600;
var PORTCLIENTE     = 5800;
var PORTEBS         = 6000;
//bd16cc09f40830b9a32b4ba8bbec3f4511993663
                       


describe("Category resources", () => {

    it("GET /pedido/1 - statusCode", (done) => 
    {         
         Request.get("http://localhost:"+PORTEBS+"/pedido/1", (error, response, body) => 
         {                       
            if(response.statusCode==200)
            {
                done();
            }
            else
            {
                done(new Error("Error en petición "+"http://localhost:"+PORTEBS+"/pedido/1"));
            }                 
         })
    });

    it("GET /pedido/1 - Operación correcta", (done) => 
    {         
         Request.get("http://localhost:"+PORTEBS+"/pedido/1", (error, response, body) => 
         {                       
            if(response.body=="Su pedido ha sido enviado al restaurante.")
            {
                done();
            }
            else
            {
                done(new Error("Error en petición "+"http://localhost:"+PORTEBS+"/pedido/1"));
            }             
         })
    });    


    it("GET /cliente/notificacion/1 - statusCode", (done) => 
    {         
         Request.get("http://localhost:"+PORTEBS+"/cliente/notificacion/1", (error, response, body) => 
         {                       
            if(response.statusCode==200)
            {
                done();
            }
            else
            {
                done(new Error("Error en petición "+"http://localhost:"+PORTEBS+"/cliente/notificacion/1"));
            }            
         })
    });  


    it("GET /cliente/notificacion/1 - statusCode", (done) => 
    {         
         Request.get("http://localhost:"+PORTEBS+"/cliente/notificacion/1", (error, response, body) => 
         {                       
            if(response.statusCode==200)
            {
                done();
            }
            else
            {
                done(new Error("Error en petición "+"http://localhost:"+PORTEBS+"/cliente/notificacion/1"));
            }            
         })
    });    

    it("GET /cliente/notificacion/1 - Operación correcta", (done) => 
    {         
         Request.get("http://localhost:"+PORTEBS+"/cliente/notificacion/1", (error, response, body) => 
         {                       
            if(response.body=="Confirmación de pedido 1 recibido.")
            {
                done();
            }
            else
            {
                done(new Error("Error en petición "+"http://localhost:"+PORTEBS+"/cliente/notificacion/1"));
            }             
         })
    });    

    
    
    it("GET /restaurante/pedido/1 - statusCode", (done) => 
    {         
         Request.get("http://localhost:"+PORTEBS+"/restaurante/pedido/1", (error, response, body) => 
         {                       
            if(response.statusCode==200)
            {
                done();
            }
            else
            {
                done(new Error("Error en petición "+"http://localhost:"+PORTEBS+"/restaurante/pedido/1"));
            }            
         })
    }); 


    it("GET /cliente/notificacion/1 - Operación correcta", (done) => 
    {         
         Request.get("http://localhost:"+PORTEBS+"/cliente/notificacion/1 ", (error, response, body) => 
         {                       
            if(response.body=="Confirmación de pedido 1 recibido.")
            {
                done();
            }
            else
            {
                done(new Error("Error en petición "+"http://localhost:"+PORTEBS+"/cliente/notificacion/1 "));
            }             
         })
    });      


    it("GET /restaurante/pedido/status/close/1 - statusCode", (done) => 
    {         
         Request.get("http://localhost:"+PORTEBS+"/restaurante/pedido/status/close/1", (error, response, body) => 
         {                       
            if(response.statusCode==200)
            {
                done();
            }
            else
            {
                done(new Error("Error en petición "+"http://localhost:"+PORTEBS+"/restaurante/pedido/status/close/1"));
            }            
         })
    });   
    
    
    it("GET /restaurante/pedido/status/close/1 - Operación correcta", (done) => 
    {         
         Request.get("http://localhost:"+PORTEBS+"/restaurante/pedido/status/close/1 ", (error, response, body) => 
         {                       
            if(response.body=="Confirmación de entrega de confirmación de entrega del pedido  1 al restaurante.")
            {
                done();
            }
            else
            {
                done(new Error("Error en petición "+"http://localhost:"+PORTEBS+"/restaurante/pedido/status/close/1"));
            }             
         })
    });    


    it("GET /restaurante/pedido/status/close/1 - statusCode", (done) => 
    {         
         Request.get("http://localhost:"+PORTEBS+"/restaurante/pedido/status/close/1", (error, response, body) => 
         {                       
            if(response.statusCode==200)
            {
                done();
            }
            else
            {
                done(new Error("Error en petición "+"http://localhost:"+PORTEBS+"/restaurante/pedido/status/close/1"));
            }            
         })
    });



    it("POST /repartidor/pedido/recoger - statusCode", (done) => 
    {         
         Request.post("http://localhost:"+PORTEBS+"/repartidor/pedido/recoger", (error, response, body) => 
         {                       
            if(response.statusCode==200)
            {
                done();
            }
            else
            {
                done(new Error("Error en petición "+"http://localhost:"+PORTEBS+"/repartidor/pedido/recoger"));
            }            
         })
    });


    it("POST /pedido/recoger - statusCode", (done) => 
    {         
         Request.post("http://localhost:"+PORTEBS+"/pedido/recoger", (error, response, body) => 
         {                       
            if(response.statusCode==200)
            {
                done();
            }
            else
            {
                done(new Error("Error en petición "+"http://localhost:"+PORTEBS+"/pedido/recoger"));
            }            
         })
    });    


});
