let listaVehiculos = [
    {id: '1' , categoria: 'Automoviles', stock: 2, nombre: 'Volkswagen Passat', precio: 15000, imagen: '/volkswagen-passat.jpg', moneda: 'USD'},
    {id: '2' , categoria: 'Automoviles', stock: 2, nombre: 'BMW 318i E30', precio: 12000, imagen: '/bmw-318i.jpg', moneda: 'USD'},
    {id: '3' , categoria: 'Automoviles', stock: 3, nombre: 'BMW 320i', precio: 23000, imagen: '/bmw-320i.jpg', moneda: 'USD'},
    {id: '4' , categoria: 'Automoviles', stock: 2, nombre: 'Opel Corsa 2023', precio: 12000, imagen: '/opel-corsa2023.jpg', moneda: 'USD'},
    {id: '5' , categoria: 'Automoviles', stock: 3, nombre: 'Fiat Uno Cubo', precio: 2500, imagen: '/fiat-uno.jpg', moneda: 'USD'},
    {id: '6' , categoria: 'Automoviles', stock: 2, nombre: 'Volkswagen Beetle', precio: 19000, imagen: '/volkswagen-beetle.jpg', moneda: 'USD'},
    {id: '7' , categoria: 'Camionetas', stock: 5, nombre: 'Mitsubishi L200', precio: 8000, imagen: '/mitsubishi-l200.jpg', moneda: 'USD'},
    {id: '8' , categoria: 'Camionetas', stock: 3, nombre: 'Toyota Hilux', precio: 4000, imagen: '/toyota-hilux.jpg', moneda: 'USD'},
    {id: '9' , categoria: 'Camionetas', stock: 3, nombre: 'Chevrolet Cheyenne', precio: 9000, imagen: '/chevrolet-cheyenne.jpg', moneda: 'USD'},
    {id: '10' , categoria: 'Camionetas', stock: 3, nombre: 'Ford Ranger', precio: 12000, imagen: '/ford-ranger.jpg', moneda: 'USD'},
    {id: '11' , categoria: 'Camiones', stock: 2, nombre: 'Camión antiguo restaurado', precio: 3500, imagen: '/camion-antiguo.jpg', moneda: 'USD'},
    {id: '12' , categoria: 'Camiones', stock: 5, nombre: 'Camión Kenworth', precio: 60000, imagen: '/camion-kenworth.jpg', moneda: 'USD'},
    {id: '13' , categoria: 'Camiones', stock: 4, nombre: 'Mercedes Benz', precio: 150000, imagen: '/camion-mercedesbenz.jpg', moneda: 'USD'},
    {id: '14' , categoria: 'Camiones', stock: 2, nombre: 'Volvo FH16', precio: 40000, imagen: '/volvo-fh16.jpg', moneda: 'USD'},
    {id: '15' , categoria: 'Camiones', stock: 2, nombre: 'Scania 114c', precio: 95000, imagen: '/scania-114c.jpg', moneda: 'USD'},
    {id: '16' , categoria: 'Camiones', stock: 3, nombre: 'Mercedes Benz L4500', precio: 2500, imagen: '/mercedes-benz4500.jpg', moneda: 'USD'},
    {id: '17' , categoria: 'Otros', stock: 3, nombre: 'Excavadora Caterpillar', precio: 140000, imagen: '/excavadora-caterpillar.jpg', moneda: 'USD'},
    {id: '18' , categoria: 'Otros', stock: 2, nombre: 'Tractor John Deere', precio: 50000, imagen: '/tractor-johndeere.jpg', moneda: 'USD'},
    {id: '19' , categoria: 'Otros', stock: 3, nombre: 'Honda CBR 600', precio: 10000, imagen: '/honda-cbr.jpg', moneda: 'USD'},
    {id: '20' , categoria: 'Otros', stock: 4, nombre: 'Suzuki Bandit 400', precio: 6000, imagen: '/suzuki-bandit.jpg', moneda: 'USD'}
]

export const gFetchCategoria = () => {
  return new Promise((res)=>{
    setTimeout(()=>{
        res( listaVehiculos )
    }, 1000)
  })
}

export const gFetchDetalle = (id) => {
  return new Promise((res)=>{    
      setTimeout(()=>{
          res( listaVehiculos.find(vehiculo => vehiculo.id === id) )
      }, 1000) 
  })  
} 

