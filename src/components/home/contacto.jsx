export default function Contacto(){
    return (
        <section className="w-full flex flex-col sm:flex-row mt-36 pt-20 pb-28 px-7 sm:px-28 bg_contacto" id="contacto">
            <div className="basis-5/5 sm:basis-3/5">
                <h1 className="text-start text-4xl text-gray-500" >Contáctenos</h1>
                <div className="text-stone-900 text-xl mt-8 pr-0 sm:pr-10">
                    <b>Dirección:</b> 
                    <br></br>
                    <a className="text-blue-700" href="https://maps.app.goo.gl/PiovqTbJHzJshu2NA" target="_blank">Capitán Bustos 549, San Antonio de Arredondo</a>
                    <br></br>
                    X5153 - Córdoba - Argentina 
                    <br></br><br></br>
                    <b>Teléfono-WhatsApp:</b>
                    <br></br>
                    <a className="text-blue-700" href="https:///wa.me/send?phone=543515730873&amp;text=Hola%20Complejo%20Bienteveo,%20quiero%20realizar%20una%20reserva..." target="_blank">0351-155730873</a>
                    <br></br>
                </div>
            </div>
            <div className="basis-5/5 sm:basis-2/5">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.9153093825735!2d-64.5347306!3d-31.471515800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d697f8e2d8d25%3A0x8dc93da86bdc2806!2sComplejo%20Bienteveo!5e0!3m2!1ses!2sar!4v1736886683674!5m2!1ses!2sar" 
                    className="mt-8 w-full border border-2"
                    height="300" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">    
                </iframe>
            </div>
        </section>
    )
}