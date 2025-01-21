import complejo from '../../assets/images/banner_complejo.jpg'
import pileta from '../../assets/images/banner_pileta.jpg'
import rio from '../../assets/images/banner_rio.jpg'
import { fotos } from '../../utils/constants';
import ModalGallery from "../layouts/modalGallery";

export default function Galeria(){

    return (
        <section className="mt-36 px-6 sm:px-28" id='galeria'>
            <h1 className="text-center text-4xl text-stone-900">Galería</h1>
            <div className='w-full flex flex-wrap gap-y-10 text-base sm:text-2xl mt-8 mb-5'>
                <div className="basis-2/2 sm:basis-1/3 text-pretty flex justify-stretch sm:items-center p-0 sm:p-4 mt-6">
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow bg_casa">
                        <a href="#">
                            <img className="rounded-t-lg hover:brightness-75" src={complejo} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">Complejo Bienteveo</h5>
                            </a>
                            <p className="mb-3 font-normal text-xl sm:text-2xl text-gray-900 min-h-52 sm:min-h-60">
                                El Complejo Bienteveo te invita a disfrutar de su incomparable belleza natural y la comodidad de sus instalaciones. Con una ubicación privilegiada, es el lugar perfecto para relajarse y desconectar.
                            </p>
                            <ModalGallery fotos={fotos.complejo}/>
                        </div>
                    </div>
                </div>
                <div className="basis-2/2 sm:basis-1/3 text-pretty flex justify-stretch sm:items-center p-0 sm:p-4 mt-6">
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow bg_casa">
                        <a href="#">
                            <img className="rounded-t-lg hover:brightness-75" src={pileta} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">Pileta y Jacuzzi</h5>
                            </a>
                            <p className="mb-3 font-normal text-xl sm:text-2xl text-gray-900 min-h-52 sm:min-h-60">
                                Nuestro complejo ofrece una experiencia de relajación total, con una amplia pileta y un jacuzzi perfectos para su disfrute. Sumérgete y déjate llevar por el confort y la serenidad que te esperan.
                            </p>
                            <ModalGallery fotos={fotos.pileta}/>
                        </div>
                    </div>
                </div>
                <div className="basis-2/2 sm:basis-1/3 text-pretty flex justify-stretch sm:items-center p-0 sm:p-4 mt-6">
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow bg_casa">
                        <a href="#">
                            <img className="rounded-t-lg hover:brightness-75" src={rio} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">Rio San Antonio</h5>
                            </a>
                            <p className="mb-3 font-normal text-xl sm:text-2xl text-gray-900 min-h-52 sm:min-h-60">
                                El río de las sierras cordobesas es un paraíso acompañado de paisajes verdes que invitan a la calma y la contemplación en cada rincón. Además, está a tan solo 50 metros del complejo.
                            </p>
                            <ModalGallery fotos={fotos.rio}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}