import { useCarritoStore } from '@/store/useCarritoStore'
import React from 'react'
import { CiHome } from 'react-icons/ci'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { totalProductos } from '../helpers/totalProductos'
import rotiseria from '../../rotiseria.config'

export const Footer = () => {

  const {productos, abierto, abrir} = useCarritoStore();

  return (
    <footer className="flex justify-center gap-15  bottom-0  w-full absolute bg-[#0f172a] " style={{backgroundColor: rotiseria.colorPrimario}}>
        <div className={`flex justify-center flex-col items-center gap-1 cursor-pointer`}>
          <CiHome size={20} className={`${!abierto ? 'text-yellow-400' : 'text-gray-500'}`}/>
          <p className={`${!abierto ? 'text-yellow-400' : 'text-gray-500'}`}>Sabor Urbano</p> 
        </div>
        <div className="flex justify-center flex-col items-center gap-1 cursor-pointer" onClick={abrir}>
          {productos.length > 0 && <p className='ml-5 p-1 text-black text-center bg-yellow-400 rounded-full'>{totalProductos(productos)}</p>}
          <MdOutlineShoppingCart size={20} className={`${abierto ? 'text-yellow-400' : 'text-gray-500'}`}/>
          <p className={`${abierto ? 'text-yellow-400' : 'text-gray-500'}`}>{totalProductos(productos)}</p>
        </div>
      </footer>
  )
}
