let listaVehiculos = [
    {id: '1' , categoria: 'Automóviles', tipo: 'Grandes' , nombre: 'Volkswagen Passat', precio: '', imagen: '/volkswagen-passat.jpg'},
    {id: '2' , categoria: 'Automóviles', tipo: 'Grandes' , nombre: 'Honda Accord', precio: '', imagen: ''},
    {id: '3' , categoria: 'Automóviles', tipo: 'Medianos' , nombre: 'Toyota Corolla', precio: '', imagen: ''},
    {id: '4' , categoria: 'Automóviles', tipo: 'Medianos' , nombre: 'Honda Civic', precio: '', imagen: ''},
    {id: '5' , categoria: 'Automóviles', tipo: 'Pequenios' , nombre: 'Fiat Uno', precio: '', imagen: '/fiat-uno.jpg'},
    {id: '6' , categoria: 'Automóviles', tipo: 'Pequenios' , nombre: 'Renault Twingo', precio: '', imagen: ''},
    {id: '7' , categoria: 'Camionetas', tipo: 'Grandes' , nombre: 'Ford Raptor F-150', precio: '', imagen: ''},
    {id: '8' , categoria: 'Camionetas', tipo: 'Grandes' , nombre: 'Dodge Ram 2500', precio: '', imagen: ''},
    {id: '9' , categoria: 'Camionetas', tipo: 'Medianas' , nombre: 'Chevrolet S-10', precio: '', imagen: ''},
    {id: '10' , categoria: 'Camionetas', tipo: 'Medianas' , nombre: 'Ford Ranger Cd 3.0', precio: '', imagen: ''},
    {id: '11' , categoria: 'Camiones', tipo: 'Semiremolques' , nombre: 'Mercedes Benz 1118', precio: '', imagen: ''},
    {id: '12' , categoria: 'Camiones', tipo: 'Semiremolques' , nombre: 'Iveco 610', precio: '', imagen: ''},
    {id: '13' , categoria: 'Camiones', tipo: 'Volcadores' , nombre: 'Bedford', precio: '', imagen: ''},
    {id: '14' , categoria: 'Camiones', tipo: 'Volcadores' , nombre: 'Ford 7000', precio: '', imagen: ''},
    {id: '15' , categoria: 'Camiones', tipo: 'Medianos' , nombre: 'Grosspal', precio: '', imagen: ''},
    {id: '16' , categoria: 'Camiones', tipo: 'Medianos' , nombre: 'Mercedes Benz 910', precio: '', imagen: ''},
    {id: '17' , categoria: 'Otros', tipo: 'Maquinaria' , nombre: 'Excavadora Caterpillar', precio: '', imagen: ''},
    {id: '18' , categoria: 'Otros', tipo: 'Maquinaria' , nombre: 'Tractor John Deere', precio: '', imagen: ''},
    {id: '19' , categoria: 'Otros', tipo: 'Motos' , nombre: 'Honda CBR 600', precio: '', imagen: ''},
    {id: '20' , categoria: 'Otros', tipo: 'Motos' , nombre: 'Suzuki Bandit 400', precio: '', imagen: ''}
]

export const gFetch = () => {
  return new Promise((res, rej)=>{
    setTimeout(()=>{
        res( listaVehiculos )
    }, 2000)
  })
}
