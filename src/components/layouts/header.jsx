import { Link } from 'react-router-dom';
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import logo from '../../assets/images/logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-slate-200 fixed w-full z-50 top-0 border-solid border-slate-950/30 border-b-2">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">COMPLELO BIENTEVEO</span>
                <img 
                  src={logo}
                  className='img-responsive w-auto h-16'
                  alt='logo'
                  width={400}
                  height={600}
                />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-2xl/6 font-normal text-gray-900 hover:text-gray-500">
            Inicio
          </Link>
          <Link to="/#servicios" className="text-2xl/6 font-normal text-gray-900 hover:text-gray-500">
            Servicios
          </Link>
          <Link to="/#galeria" className="text-2xl/6 font-normal text-gray-900 hover:text-gray-500">
            Galeria
          </Link>
          <Link to="/#contacto" className="text-2xl/6 font-normal text-gray-900 hover:text-gray-500">
            Contáctenos
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Complejo Bienteveo</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Cerrar menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-14 flow-root text-center">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block my-6 rounded-lg px-3 py-2 text-2xl/7 font-normal text-gray-900 hover:bg-gray-50">
                    Inicio
                </Link>
                <Link to="/#servicios" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block my-6 rounded-lg px-3 py-2 text-2xl/7 font-normal text-gray-900 hover:bg-gray-50">
                    Servicios
                </Link>
                <Link to="/#galeria" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block my-6 rounded-lg px-3 py-2 text-2xl/7 font-normal text-gray-900 hover:bg-gray-50">
                    Galeria
                </Link>
                <Link to="/#contacto" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block my-6 rounded-lg px-3 py-2 text-2xl/7 font-normal text-gray-900 hover:bg-gray-50">
                    Contáctenos
                </Link>

              </div>
              <div className="py-6">
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
