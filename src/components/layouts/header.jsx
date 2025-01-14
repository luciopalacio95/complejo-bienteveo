import { Link } from 'react-scroll'
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
    <header className="bg_casa fixed w-full z-50 top-0 border-solid border-slate-950/30 border-b-2">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">
        <div className="flex lg:flex-1">
          <Link
              className="-m-1.5 p-1.5 cursor-pointer"
              to='home'
              spy
              smooth
              offset={-180}
              duration={600}
            >
              <span className="sr-only">COMPLELO BIENTEVEO</span>
              <img 
                src={logo}
                className='img-responsive w-auto h-10 sm:h-12'
                alt='logo'
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
          <Link
            className="text-2xl/6 font-normal text-gray-900 hover:text-gray-500 cursor-pointer"
            to='home'
            spy
            smooth
            offset={-180}
            duration={600}
          >
            Inicio
          </Link>
          <Link
            className="text-2xl/6 font-normal text-gray-900 hover:text-gray-500 cursor-pointer"
            to='servicios'
            spy
            smooth
            offset={-180}
            duration={600}
          >
            Servicios
          </Link>
          <Link
            className="text-2xl/6 font-normal text-gray-900 hover:text-gray-500 cursor-pointer"
            to='galeria'
            spy
            smooth
            offset={-180}
            duration={600}
          >
            Galería
          </Link>
          <Link
            className="text-2xl/6 font-normal text-gray-900 hover:text-gray-500 cursor-pointer"
            to='contacto'
            spy
            smooth
            offset={-180}
            duration={600}
          >
            Contáctenos
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg_casa px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              className="-m-1.5 p-1.5 cursor-pointer"
              to='home'
              onClick={() => setMobileMenuOpen(false)}
              spy
              smooth
              offset={-180}
              duration={600}
            >
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
                <Link
                  className="-mx-3 block my-6 rounded-lg px-3 py-4 text-3xl/7 font-normal text-gray-900 hover:bg-gray-50 cursor-pointer"
                  to='home'
                  onClick={() => setMobileMenuOpen(false)}
                  spy
                  smooth
                  offset={-180}
                  duration={600}
                >
                  Inicio
                </Link>
                <Link
                  className="-mx-3 block my-6 rounded-lg px-3 py-4 text-3xl/7 font-normal text-gray-900 hover:bg-gray-50 cursor-pointer"
                  to='servicios'
                  onClick={() => setMobileMenuOpen(false)}
                  spy
                  smooth
                  offset={-100}
                  duration={600}
                >
                  Servicios
                </Link>
                <Link
                  className="-mx-3 block my-6 rounded-lg px-3 py-4 text-3xl/7 font-normal text-gray-900 hover:bg-gray-50 cursor-pointer"
                  to='galeria'
                  onClick={() => setMobileMenuOpen(false)}
                  spy
                  smooth
                  offset={-180}
                  duration={600}
                >
                  Galería
                </Link>
                <Link
                  className="-mx-3 block my-6 rounded-lg px-3 py-4 text-3xl/7 font-normal text-gray-900 hover:bg-gray-50 cursor-pointer"
                  to='contacto'
                  onClick={() => setMobileMenuOpen(false)}
                  spy
                  smooth
                  offset={-100}
                  duration={600}
                >
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
