//construccion de 
//endpoint: ruta en un proyecto REST orientado a servicios
//          responder como mensajes en formato JSON 
import {  addDios, 
          getDioses, 
          getDiosById, 
          deleteDios, 
          updateDios} from "../controladores/DiosController.js";

const rutas = function(app){
       app.route('/Dioses') 
            .get( getDioses  )   
            .post( addDios  )
       app.route('/Dioses/:Diosid')  
            .get(getDiosById)
            .put( updateDios)
            .delete( deleteDios)      
}

export default rutas;

