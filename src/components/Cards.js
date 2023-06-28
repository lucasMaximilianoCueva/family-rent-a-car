import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
            <h1 id='flota' style={{marginBottom:30}}>Quienes somos</h1>

      <div className='cards__container' style={{marginBottom:40}}>
<p style={{textAlign:"center"}}>Somos una empresa especializada en alquiler de autos (Rent a Car) en Ushuaia, Tierra del Fuego. Con nuestra experiencia, nos gustaría invitarlo a repensar y a construir un nuevo significado para la movilidad en su visita a nuestra provincia. Ofrecemos servicios únicos que aseguran el éxito de su viaje. Porque, para nosotros, movilidad tiene todo que ver con libertad, poder llegar adonde quiere de la manera más práctica y segura posible. Es la suma perfecta entre descubrir un nuevo destino y con la mayor comodidad y traquilidad.</p>
      </div>
      <h1 id='flota'>Nuestras tarifas</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://mobi.fiat.com.ar/content/dam/fiat/products/341/ac1/0/2023/page/360/806/29.png.thumb.1280.1280.png'
              text='Fiat Mobi'
              label='Desde $12900'
              path='/services'
            />
            <CardItem
              src='https://media.toyota.com.ar/51ed4eb8-2ea0-4717-9eb8-853a171535e5.png'
              text='Toyota Etios'
              label='Desde $14900'
              path='/services'
            />
              <CardItem
              src='https://cronos.fiat.com.ar/assets/images/img-version-cronos-precision-13-at.png'
              text='Fiat Cronos'
              label='Desde $16900'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.chevrolet.cl/content/dam/chevrolet/south-america/chile/espanol/index/suv-and-crossovers/2021-nueva-tracker-turbo/02-intro/colorizer/3-gan.png?imwidth=960'
              text='Chevrolet Tracker'
              label='Desde $18900'
              path='/services'
            />
            <CardItem
              src='https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/2021-spin-activ/01-images/colorizer/spin-activ-2021-branco-summit.png?imwidth=960'
              text='Chevrolet Spin'
              label='Desde $20900'
              path='/products'
            />
            <CardItem
              src='https://s3-us-west-2.amazonaws.com/my-car-mexico/modelos/9d9fe5c7/1366_2000%20(1).webp'
              text='Toyota Hilux'
              label='Desde $22900'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      <h1 id='servicios'>Servicios</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn-icons-png.flaticon.com/512/6615/6615039.png'
              text='Contá con el servicio de Sistema de Posicionamiento Global para que tu experiencia sea perfecta.'
              label='GPS'
              path='/services'
            />
            <CardItem
              src='https://static.vecteezy.com/system/resources/previews/004/223/638/original/baby-sitting-in-car-seat-silhouette-icon-infant-safety-seat-child-restraint-system-isolated-illustration-vector.jpg'
              text='Porque la seguridad es lo primero, contamos con sillas adaptadas para todos los modelos.'
              label='Sillas para bebes'
              path='/services'
            />
              <CardItem
              src='https://pixlok.com/wp-content/uploads/2021/10/ic_Charge_icon-0s9mdf.png'
              text='Sabemos que tenés que estar siempre contectado, nosotros te damos los cargadores sin costo.'
              label='Cargadores de celular'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn-icons-png.flaticon.com/512/2808/2808382.png'
              text='Para los fanáticos de los deportes invernales, podés solicitar porta esquíes para poder transportarlos.'
              label='Porta Esquies'
              path='/services'
            />
            <CardItem
              src='https://t3.ftcdn.net/jpg/01/71/13/24/360_F_171132449_uK0OO5XHrjjaqx5JUbJOIoCC3GZP84Mt.jpg'
              text='Contamos con una flota actualizada, donde dependiendo tu necesidad brindamos la solución.'
              label='Ultimos Modelos'
              path='/products'
            />
            <CardItem
              src='https://img.freepik.com/premium-vector/customer-service-icon-vector-full-customer-care-service-hand-with-persons-vector-illustration_399089-2810.jpg?w=2000'
              text='Nos caracterizamos por brindar un servicio de calidad y excelencia.'
              label='Atención Personalizada'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
