import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import axios from 'axios'


import styles from './mainPage.module.css'




function SearchComponent({token, searchArtists, setSearchKey}) {

  return (
    <div className={styles.searchContainer}>
      <p className={styles.arrow}>&#8592; &#8594;</p>
      <span className={styles.search} >
        <BsSearch/><input 
        type="text" 
        placeholder='Search for artist, songs, and ...' 
        onChange={e => setSearchKey(e.target.value)}
        onSubmit={searchArtists}
        />
     </span>
    </div>
  )
}

export default SearchComponent
