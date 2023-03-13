import React from 'react'
import TrendingCard from './TrendingCard'
import PlaylistCard from './PlaylistCard'
import MusicPlayerCard from './MusicPlayerCard'
import styles from './mainPage.module.css'
import SearchComponent from './SearchComponent'

function MainPage() {
  return (
    <div className={styles.mainContainer}>
        <SearchComponent/>
        <TrendingCard/>
        <PlaylistCard/>
        <MusicPlayerCard/>
    </div>
  )
}

export default MainPage
