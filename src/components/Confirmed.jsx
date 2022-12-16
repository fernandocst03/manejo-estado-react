import React from "react";

function Confirmed(props){

   const onDelete = () => {
      props.setDeleted(true)
   }

   const onReturn = () => {
      props.setConfirmed(false)
      props.setValue("")
   }

   return (
      <>
         <p>Pedimos confirmacion, ¿Quieres borrarlo?</p>
         <div>
            <button
               onClick = {onDelete}
            >Si, eliminar</button>
            <button
               onClick= {onReturn}
                  
            >No, volver</button>
         </div>
      </>
   )
}

export {Confirmed}