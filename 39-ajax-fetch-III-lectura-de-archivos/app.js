/*
Vamos a ver como leer archivos con fetch()
blob()-> Binary Long Object
*/
const buttonImg = document.getElementById('buttonImage');
const buttonPdf = document.getElementById('buttonPdf');

// Al hacer click vamos a ver la imagen a traves de fetch:
buttonImg.addEventListener('click', () => {
  fetch('./assets/img/dog.jpg')
    .then((resp) => {
      console.log(resp)
      resp.blob()
        .then((img) => {
          // Para transformar el .blob() que se pueda ver usaremos el URL.createObjectURL():
          document.getElementById('img').src = URL.createObjectURL(img);
        })
    })
})

// Al hacer click vamos a ver la pdf a traves de fetch:
buttonPdf.addEventListener('click', () => {
  fetch('./assets/pdf/demo.pdf')
    .then((resp) => {
      console.log(resp)
      resp.blob()
        .then((pdf) => {
          // Para transformar el .blob() que se pueda ver usaremos el URL.createObjectURL():
          document.getElementById('pdf').href = URL.createObjectURL(pdf);
          // damos click a descargar: Para leer el pdf:
        })
    })
})