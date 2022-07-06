const Productos = [
    {id: '01', name:'Samsung Galaxy A21s 64 GB negro 4 GB RAM', price: 79.999, description: 'Mayor rendimiento: Su memoria RAM de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar. Desbloqueo facial y dactilar:Máxima seguridad para que solo vos puedas acceder al equipo. Podrás elegir entre el sensor de huella dactilar para habilitar el teléfono en un toque, o el reconocimiento facial que permite un desbloqueo hasta un 30% más rápido.Batería de duración superior: ¡Desenchufate! Con la súper batería de 5000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas.'},
    {id: '02', name:'Samsung Galaxy A01 32 Gb Azul 2 Gb Ram', price: 56.999, description: 'El Samsung Galaxy A01 es el smartphone más básico de la renovada serie A. Con una pantalla de 5.7 pulgadas a resolución HD+, el Galaxy A01 está potenciado por un procesador de ocho núcleos acompañado 2GB de memoria RAM, con 32GB de almacenamiento interno expandible vía microSD. En cuanto a cámaras, el Samsung Galaxy A01 cuenta con una cámara trasera de 13 MP + 2 MP, mientras que su cámara frontal para selfies es de 5 megapixels. Completando las características del Galaxy A01 encontramos una batería de 3000 mAh, radio FM y One UI 2 basado en Android 10.'},
    // {id: , name: ,price: ,description:},
  ]
  
  export const products = new Promise ((resolve, reject)=>{
    let condition = true;
    setTimeout (()=>{
        condition ? resolve(Productos) : reject('Algo salió mal')
    }, 2000)
  })