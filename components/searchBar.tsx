"use client";

import { manufacturers } from '@/constants'
import React, { useState } from 'react'
import SearchManufacturer from './searchManufacturer'

export default function SearchBar() {
    const [manufacturer, setManufacturer] = useState('');

    const handleSearch = () => {}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer 
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}/>
        </div>
    </form>
  )
}
