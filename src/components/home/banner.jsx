import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import sl1 from '../../assets/images/slider_panoramico.jpg'
import slm1 from '../../assets/images/slider_panoramico_m.jpg'
import sl2 from '../../assets/images/slider_pileta.jpg'
import slm2 from '../../assets/images/slider_pileta_m.jpg'

export default function Banner(){
    return (
        <section className='top-10' id='home'>
          <Carousel
            showArrows={false}
            emulateTouch
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            swipeable={false} 
            useKeyboardArrows
            margin={0}
            padding={0}
            autoPlay={true}
            interval={6000}
            transitionTime={900}
          >    
            <div>
              <picture>
                <source media='(max-width: 600px)' srcSet={slm1} />
                <img src={sl1} alt='slider 1' className='filter blur-sm brightness-50'/>
              </picture>
              <div className='absolute left-0 top-0 z-10 mt-36 w-12/12 sm:w-7/12 p-4 sm:p-6 pl-8 sm:pl-16 text-start fade-in-text'>
                <h1 className='text-white leading-10 text-5xl sm:text-6xl mb-3 sm:mb-4'>Complejo Bienteveo</h1>
                <p className='text-2xl sm:text-3xl mb-10 sm:mb-12 leading-7 sm:leading-10 text-white text-pretty'>Tu lugar de descanso, en las sierras cordobesas.</p>
                <a className="bg_inferior hover:opacity-80 text-white text-2xl font-medium px-4 py-2 border rounded-md" target='_blank' href="https://api.whatsapp.com/send?phone=543515730873&amp;text=Hola%20Complejo%20Bienteveo,%20quiero%20realizar%20una%20reserva...">Reservar Ahora</a>
              </div>
            </div>

            <div>
              <picture>
                <source media='(max-width: 600px)' srcSet={slm2} />
                <img src={sl2} alt='slider 2' className='filter blur-sm brightness-50' />
              </picture>
              <div className='absolute left-0 top-0 z-10 mt-36 w-12/12 sm:w-7/12 p-4 sm:p-6 pl-8 sm:pl-16 text-start fade-in-text'>
                <h1 className='text-white leading-10 text-5xl sm:text-6xl mb-3 sm:mb-4'>Complejo Bienteveo</h1>
                <p className='text-2xl sm:text-3xl mb-10 sm:mb-12 leading-7 sm:leading-10 text-white text-pretty'>Relájate y disfruta con quienes más queres.</p>
                <a className="bg_inferior hover:opacity-80 text-white text-2xl font-medium px-4 py-2 border rounded-md" target='_blank' href="https://api.whatsapp.com/send?phone=543515730873&amp;text=Hola%20Complejo%20Bienteveo,%20quiero%20realizar%20una%20reserva...">Reservar Ahora</a>
              </div>
            </div>
          </Carousel>
        </section>
      )
}