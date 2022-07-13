const Productos = [
  { productoId: '01', name: 'Samsung Galaxy A21s', price: 79.999, description: 'blablablabla', category: 'celulares', stock: 5, img:"/img/a21s.png"},
  { productoId: '02', name: 'Samsung Galaxy A01', price: 56.999, description: 'sasasasasa', category: 'celulares', stock: 3, img:"/img/A01.png"},
  { productoId: '03', name: 'iPhone 8 Plus 256 GB', price: 150.001, description: 'claclalcla.', category: 'celulares', stock: 8, img:"/img/8plus.png"},
  { productoId: '04', name: 'Apple Macbook Air 2020, 256GB SSD', price: 270.999, description: 'fiufiufiu', category: 'computadoras', stock: 2, img:"/img/pc4.png"},
  { productoId: '05', name: "Hp Elitebook 840 G8 512gbssd", price: 244.999, description: 'piumpium', category: 'computadoras', stock: 1, img:"/img/pc5.png"},

  //{productoId: , name: ,price: ,description: ,category: ,stock, img: },
]

export const getProducts = new Promise((resolve, reject) => {
  let condition = true;
  setTimeout(() => {
    condition ? resolve(Productos) : reject('Algo salió mal')
  }, 2000)
})





/*    {id: '01', name:'Samsung Galaxy A21s 64 GB negro 4 GB RAM', price: 79.999, description: 'Mayor rendimiento: Su memoria RAM de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar. Desbloqueo facial y dactilar:Máxima seguridad para que solo vos puedas acceder al equipo. Podrás elegir entre el sensor de huella dactilar para habilitar el teléfono en un toque, o el reconocimiento facial que permite un desbloqueo hasta un 30% más rápido.Batería de duración superior: ¡Desenchufate! Con la súper batería de 5000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas.' ,category:'celulares', stock:5},
  // {id: '02', name:'Samsung Galaxy A01 32 Gb Azul 2 Gb Ram', price: 56.999, description: 'El Samsung Galaxy A01 es el smartphone más básico de la renovada serie A. Con una pantalla de 5.7 pulgadas a resolución HD+, el Galaxy A01 está potenciado por un procesador de ocho núcleos acompañado 2GB de memoria RAM, con 32GB de almacenamiento interno expandible vía microSD. En cuanto a cámaras, el Samsung Galaxy A01 cuenta con una cámara trasera de 13 MP + 2 MP, mientras que su cámara frontal para selfies es de 5 megapixels. Completando las características del Galaxy A01 encontramos una batería de 3000 mAh, radio FM y One UI 2 basado en Android 10.' ,category:'celulares', stock:3 , },
  // {id: '03', name:'iPhone 8 Plus 256 GB' ,price: 150.000 ,description:'Más para ver. Con su pantalla IPS de 5.5", disfrutá de colores intensos y mayor nitidez en todos tus contenidos. Mayor rendimiento. Su memoria RAM de 3 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar. Desbloqueo veloz con tu huella dactilar. Con el sensor de huella dactilar, el acceso es seguro y podrás desbloquearlo automáticamente con un toque.' ,category:'celulares', stock:8},
  {id: '04', name:'Apple Macbook Air 2020, 256GB SSD' ,price: 270.000 ,description:'a notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos.' ,category:'computadoras', stock:2},
  // {id: '05', name:"Hp Elitebook 840 G8 14' I7-1165g7 8gb 512gbssd" ,price: 244.999 ,description:'GENERACION Notebook HP 800 G8. SISTEMA OPERATIVO Windows 10 Pro. MICROPROCESADOR Intel® Core™ i7-1165G7 (hasta 4,7 GHz con tecnología Intel® Turbo Boost, 12 MB de caché L3 y 4 núcleos)6,71. CHIPSET Integrado / Gráficos Intel® Iris® Xe. MEMORIA 8 GB de RAM DDR4-3200 MHz (1 x 8 GB). MEMORIA MAXIMA 32 gb' ,category:'computadoras', stock:1},*/