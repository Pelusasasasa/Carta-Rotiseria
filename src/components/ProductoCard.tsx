import React, { useEffect } from 'react'
import Image from 'next/image'
import { IoMdAdd } from 'react-icons/io'
import { Producto } from '@/interface/Producto'
import { useCarritoStore } from '@/store/useCarritoStore'

const ProductoCard = ({_id, img, precio, descripcion, seccion}: Producto) => {
    const { agregarProducto } = useCarritoStore();

    const addProducto = () => {
        agregarProducto({
            cantidad: 1,
            producto: {_id, precio, descripcion, seccion: seccion }
        })
    };

  return (
    <div className='h-[235px]'>
        <div className='flex flex-col items-center bg-slate-700 h-full rounded-sm py-5'>
            <div className='bg-white h-16 w-16 rounded-sm'>
                {/* <Image src={`${ip}/${_id}.png`} alt={descripcion} width={20} height={20}/> */}
            </div>

            <div>
                <h2 className='font-bold mt-2 text-md text-center text-white'>{descripcion}</h2>

                <p className='text-center  text-gray-400'>{seccion?.nombre}</p>

                <p className='text-center text-yellow-400 text-xl font-bold'>${precio.toFixed(2)}</p>
            </div>

            <div onClick={addProducto} className='flex mt-auto bg-yellow-400 w-[90%] py-1 rounded-sm hover:bg-yellow-500 justify-center mx-10 items-center gap-5 cursor-pointer'>
                <IoMdAdd color='black' size={20}/>
                <button className='text-black'>Agregar</button>
            </div>
        </div>
    </div>
  )
}

export default ProductoCard