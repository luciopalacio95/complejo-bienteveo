import { MdPool, MdOutlineWifi, MdOutlineMicrowave } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { GiBarbecue, GiClothesline } from "react-icons/gi";
import { RiSafeLine } from "react-icons/ri";
import { PiTelevision } from "react-icons/pi";
import { BiSolidCarGarage } from "react-icons/bi";
import { LuRefrigerator } from "react-icons/lu";

export default function Servicios(){
    return (
        <section className="mt-28 px-6 sm:px-28" id='servicios'>
            <h1 className="text-center text-4xl text-stone-900">Servicios</h1>
            <p className="text-stone-900 text-2xl text-pretty mt-8 mb-5">
                Bienvenidos a Complejo Bienteveo, su hogar lejos de casa en el corazón de las sierras cordobesas, a solo 50mts del río. 
                <br></br>
                Ofrecemos un espacio de descanso, acompañado de comodidad y tranquilidad, en un entorno natural incomparable.
                <br></br>
                Contamos con capacidad para 4/5 personas, por departamento.
                <br></br><br></br>
            </p>
            <div className='w-full flex flex-wrap gap-y-10 text-base sm:text-2xl'>
                <div className="basis-1/2 sm:basis-1/4 text-pretty flex justify-stretch sm:items-center">
                    <TbAirConditioning className="mr-2 text-3xl"/> Aire Acondicionado
                </div>
                <div className="basis-1/2 sm:basis-1/4 text-pretty flex justify-stretch sm:items-center">
                <PiTelevision className="mr-2 text-3xl"/> Televisores por Cable
                </div>
                <div className="basis-1/2 sm:basis-1/4 text-pretty flex justify-stretch sm:items-center">
                    <MdOutlineWifi className="mr-2 text-2xl"/> Wi-fi
                </div>
                <div className="basis-1/2 sm:basis-1/4 text-pretty flex justify-stretch sm:items-center">
                    <MdOutlineMicrowave className="mr-2 text-3xl"/> Microondas
                </div>                
                <div className="basis-1/2 sm:basis-1/4 text-pretty flex justify-stretch sm:items-center">
                    <LuRefrigerator className="mr-2 text-3xl"/> Heladera con Frezzer
                </div> 
                <div className="basis-1/2 sm:basis-1/4 text-pretty flex justify-stretch sm:items-center">
                    <MdPool className="mr-2 text-3xl"/> Sector con Pileta y Jacuzzi
                </div>
                <div className="basis-1/2 sm:basis-1/4 text-pretty flex justify-stretch sm:items-center">
                    <BiSolidCarGarage className="mr-2 text-3xl"/> Cochera Cubierta
                </div>
                <div className="basis-1/2 sm:basis-1/4 text-pretty flex justify-stretch sm:items-center">
                    <GiBarbecue className="mr-2 text-3xl"/> Asador Individual
                </div>
                <div className="basis-1/2 sm:basis-1/4 text-pretty flex justify-stretch sm:items-center">
                    <GiClothesline className="mr-2 text-3xl"/> Tender de Ropa
                </div>     
                <div className="basis-1/2 sm:basis-1/4 text-pretty flex justify-stretch sm:items-center">
                    <RiSafeLine className="mr-2 text-3xl"/> Caja Fuerte
                </div>  
            </div>
            <div className="text-center mt-20">
                <a className="bg_inferior btn_calltoaction hover:opacity-80 text-white text-xl sm:text-2xl font-medium px-4 sm:px-6 py-3 border rounded-md" target='_blank' href="https://api.whatsapp.com/send?phone=543515730873&amp;text=Hola%20Complejo%20Bienteveo,%20quiero%20realizar%20una%20reserva...">Reserva tu estadía ahora</a>
            </div>
        </section>
    )
}