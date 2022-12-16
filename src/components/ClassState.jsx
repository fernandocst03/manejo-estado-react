import React from "react"

const SECURITY_CODE = "contraseña"
class ClassStric extends React.Component {
   constructor (props){
      super(props);
      this.state = {
         error: false,
         loading: false,
         value: ""
      }
   }

   /* UNSAFE_componentWillMount() {
      console.log("componentWillMount")
   }

   componentWillUnmount(){
      console.log("componentWillUnmount")
   }

   componentDidMount() {
      console.log("componentDidMount")
   } */

   componentDidUpdate() {
      if(this.state.loading) {
         setTimeout(()=>{
            if(this.state.value === SECURITY_CODE) {
               this.setState({loading: false, error: false})
            } else{
               this.setState({
                  loading: false, 
                  error: true
               })
            }
         }, 2000)
      }
   }

   render() {
      const {loading, error, value} = this.state;
      return (
         <div>
            <h1>{this.props.name}</h1>
            <p>Este es el componente ClassStric</p>
            {(error && !loading) && <p>Error: El codigo de seguridad es incorrecto</p>}
            {loading && <p>Cargando...</p>}
            <input 
               placeholder="codigo de seguridad"
               value = {value}
               onChange = {(event) => {
                  this.setState({value: event.target.value})
               }}
            ></input>
            <button
               onClick={() => {
                  this.setState({loading: true})
               }}
            >Comprobar</button>
         </div>
      )
   }
}

export {ClassStric}