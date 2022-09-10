import { useState } from "react"

const ItemCounts = ({cont,stockproductos,agregar}) => {
  const [contador,setContador] = useState(cont)
  const [stock,setStock] = useState(stockproductos)


  const suma = () => {
    if (stock > 0){
      setContador(contador + 1);
      setStock(stock - 1);
    }else {
      //alert(`Se acabo el Stock, escogiste {stock} productos`)
      alert('Se acabo el Stock, escogiste ' +  contador  + ' productos');
    }
  }


  //const agregados = () => {
  //  alert(contador + ' Productos agregados al carrito')
  //}

  const resta = () => {
    if (stock < 6){
    setContador(contador - 1);
    setStock(stock + 1);
    }
  }

  return (

    <div className="item-counts"> 
      <div>
        <h1 style={{backgroundColor:'blue'}}>STOCK <span>{stock}</span></h1>
      </div>
      <div>
        <button onClick={resta}> - </button>
        <h2 >{contador}</h2>
        <button onClick={suma}> + </button>
        <div>
          <button onClick={() => agregar(contador)}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ItemCounts