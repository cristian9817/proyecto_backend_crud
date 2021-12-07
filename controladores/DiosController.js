import mongoose from 'mongoose'
import DiosSchema from '../modelos/DiosModel.js'

//objet creado a partir del Schema de Dios
const Dios = mongoose.model('Dios' , DiosSchema)

//accion de añadir nuevo Dios
export const addDios = (request, response) => {
    //nuevo objeto basado en el DAO
    let nuevoDios = new Dios(   request.body )
    //grabar Dios en mongo
    nuevoDios.save( (error , Dios )=>{
           if(error){
               response.send(`Error detectado: ${error}`)
           }else{
               response.json(Dios)
           } 

    })
}
//accion para obetener todas los Dioses
export const getDioses = (r , s ) =>{
    Dios.find(  {} , (error , dioses ) => {
        if(error){
            s.send(error)
        }else{
            s.json(dioses)
        }
    })
}

//accion detalles de Dios
export const getDiosById = (request , response )=> {
    Dios.findById( request.params.Diosid , (error , Dios ) => {
        if(error){
            response.send(error)
        }else{
            response.json(Dios)
        }
    }  )
}

//accion para borrar Dios
export const deleteDios = (request , response ) => {
    Dios.deleteOne ({ _id: request.params.Diosid} , (error , Dios_borrado )=>{
                if(error ) { response.send(error) }
                else {  response.json(  { "mensaje" : "borrado exitoso"     }    )   }
    })
}

//accion para actualizar Dios
export const updateDios = (request , response ) => {
    Dios.findOneAndUpdate ({ _id:request.params.Diosid } 
                                , request.body
                                , {
                                    new:true
                                }
                                , (error , Dios_actualizado) => {
                                       if(error){ response.send(error) }
                                       else{   response.json(Dios_actualizado)  }
                                }   )
}


