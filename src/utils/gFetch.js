let listaVehiculos = [
    {id: '1' , categoria: 'Automoviles', nombre: 'Volkswagen Passat', precio: '15000 USD', imagen: '/volkswagen-passat.jpg'},
    {id: '2' , categoria: 'Automoviles', nombre: 'BMW 318i E30', precio: '12000 USD', imagen: '/bmw-318i.jpg'},
    {id: '3' , categoria: 'Automoviles', nombre: 'BMW 320i', precio: '23000 USD', imagen: '/bmw-320i.jpg'},
    {id: '4' , categoria: 'Automoviles', nombre: 'Opel Corsa 2023', precio: '12000 USD', imagen: '/opel-corsa2023.jpg'},
    {id: '5' , categoria: 'Automoviles', nombre: 'Fiat Uno', precio: '2500 USD', imagen: '/fiat-uno.jpg'},
    {id: '6' , categoria: 'Automoviles', nombre: 'Volkswagen Beetle', precio: '19000 USD', imagen: '/volkswagen-beetle.jpg'},
    {id: '7' , categoria: 'Camionetas', nombre: 'Mitsubishi L200', precio: '8000 USD', imagen: '/mitsubishi-l200.jpg'},
    {id: '8' , categoria: 'Camionetas', nombre: 'Toyota Hilux', precio: '4000 USD', imagen: '/toyota-hilux.jpg'},
    {id: '9' , categoria: 'Camionetas', nombre: 'Chevrolet Cheyenne', precio: '9000 USD', imagen: '/chevrolet-cheyenne.jpg'},
    {id: '10' , categoria: 'Camionetas', nombre: 'Ford Ranger', precio: '12000 USD', imagen: '/ford-ranger.jpg'},
    {id: '11' , categoria: 'Camiones', nombre: 'Camión antiguo restaurado', precio: '3500 USD', imagen: '/camion-antiguo.jpg'},
    {id: '12' , categoria: 'Camiones', nombre: 'Kenworth', precio: '60000 USD', imagen: '/camion-kenworth.jpg'},
    {id: '13' , categoria: 'Camiones', nombre: 'Mercedes Benz', precio: '150000 USD', imagen: '/camion-mercedesbenz.jpg'},
    {id: '14' , categoria: 'Camiones', nombre: 'Volvo FH16', precio: '40000 USD', imagen: '/volvo-fh16.jpg'},
    {id: '15' , categoria: 'Camiones', nombre: 'Scania 114c', precio: '95000 USD', imagen: '/scania-114c.jpg'},
    {id: '16' , categoria: 'Camiones', nombre: 'Mercedes Benz L4500', precio: '2500 USD', imagen: '/mercedes-benz4500.jpg'},
    {id: '17' , categoria: 'Otros', nombre: 'Excavadora Caterpillar', precio: '140000 USD', imagen: '/excavadora-caterpillar.jpg'},
    {id: '18' , categoria: 'Otros', nombre: 'Tractor John Deere', precio: '50000 USD', imagen: '/tractor-johndeere.jpg'},
    {id: '19' , categoria: 'Otros', nombre: 'Honda CBR 600', precio: '10000 USD', imagen: '/honda-cbr.jpg'},
    {id: '20' , categoria: 'Otros', nombre: 'Suzuki Bandit 400', precio: '6000 USD', imagen: '/suzuki-bandit.jpg'}
]

export const gFetch = () => {
  return new Promise((res, rej)=>{
    setTimeout(()=>{
        res( listaVehiculos )
    }, 2000)
  })
}
