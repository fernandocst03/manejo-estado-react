import React from "react"

function Deleted(props){
   const onToReturn = () => {
      props.setDeleted(false)
      props.setConfirmed(false)
      props.setValue("")
   }
   return (
      <>
         <p>Eliminado</p>
         <button
            onClick= {onToReturn}
         >Volver</button>
      </>
   )
}

export {Deleted}