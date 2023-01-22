import "../Greetings/Greetings.css"

const Greetings = props => {
  return (
    <h2>¡Hola {props.name}!</h2>
  )
}

Greetings.propTypes = {}

export default Greetings