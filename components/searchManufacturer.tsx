"use client";

import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react';

export default function SearchManufacturer({manufacturer, setManufacturer} : SearchManufacturerProps) {
    const [query, setQuery] = useState('')
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>
                <Combobox.Button className='absolute top-[14px]'>
                    <Image 
                    src='/car-logo.svg'
                    width={20}
                    height={20}
                    className='ml-4'
                    alt='car logo'/>
                </Combobox.Button>

                <Combobox.Input className='search-manufacturer__input'
                placeholder='Nasi Lemak'
                displayValue={(manufacturer: string) => manufacturer}
                onChange={(e) => setQuery(e.target.value)}/>
            </div>
        </Combobox>
    </div>
  )
}
