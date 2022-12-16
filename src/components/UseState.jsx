import React from "react"
import { Confirmed } from "./Confirmed"
import { Deleted } from "./Deleted"

const SECURITY_CODE = "a"

function UseState({name}) {
   const [value, setValue] = React.useState("")
   const [error, setError] = React.useState(false)
   const [loading, setLoading] = React.useState(false)
   const [deleted, setDeleted] = React.useState(false)
   const [confirmed, setConfirmed] = React.useState(false)


   const onConfirmed = () => {
      setError(false)
      setLoading(false)
      setConfirmed(true)
   }

   const onerror = () => {
      setError(true)
      setLoading(false)
   }

   const onchangeValue = (newValue) => {
      setValue(newValue)
   }

   const oncheck = () => {
      setLoading(true)
   }

   // React.useEfect(funcion , [cuando se ejecuta])
   React.useEffect(()=>{

      if(loading) {
         setError(false)
         setTimeout(()=>{
            if(value === SECURITY_CODE) {
               onConfirmed()
            } else{
               onerror()
            }

         }, 1200)
      }
   }, [loading, value])

   if (!deleted && !confirmed) {
      return (
         <div>
            <h1>{name}</h1>
            <p>Este es el componente UseState</p>
            {error && <p>Error: El codigo de seguridad es incorrecto</p>}
            {loading && <p>Cargando...</p>}
            <input 
               placeholder="codigo de seguridad"
               value = {value}
               onChange = {(event) => {
                  onchangeValue(event.target.value)
               }}
            ></input>
            <button
            onClick={() => {
               oncheck()
            }}
            >
               Comprobar
            </button>
         </div>
      )
   } else if (confirmed && !deleted) {
      return (
         <>
            <Confirmed 
               setValue = {setValue}
               setDeleted = {setDeleted}
               setConfirmed = {setConfirmed}
            />
         </>
      )
   } else {
      return (
         <>
            <Deleted 
               setValue = {setValue}
               setDeleted = {setDeleted}
               setConfirmed = {setConfirmed}
            />
         </>
      )
   }
}

export {UseState}