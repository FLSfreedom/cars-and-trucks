import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({Greetings}) => {

  return (
    <>
      <div className="contenedorPrincipal">
        <h2 className="tituloGreetings">{Greetings}</h2>
      </div>
    </>
  )
}

export default ItemListContainer