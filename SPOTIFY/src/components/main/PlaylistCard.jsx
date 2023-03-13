import React,  {useState} from 'react'
import styles from './mainPage.module.css'



function PlaylistCard() {
    const [songDetails, setSongDetails]  = useState([
            {
                id: 1,
                title: 'priority',
                artist: 'mons def',
                time: '1:25',
                album: 'The Ecstatic'
            },
            {
                id: 2,
                title: 'Last Last',
                artist: 'BurnaBoy',
                time: '1:25',
                album: 'Twice as Tall'
            },
            {
                id: 3,
                title: 'priority',
                artist: 'mons def',
                time: '1:25',
                album: 'The Ecstatic'
            },
            {
                id: 4,
                title: 'Last Last',
                artist: 'BurnaBoy',
                time: '1:25',
                album: 'Twice as Tall'
            },
            {
                id: 5,
                title: 'priority',
                artist: 'mons def',
                time: '1:25',
                album: 'The Ecstatic'
            },

    ])

  return (
    <div className={styles.playlistContainer}>
        <section className={styles.playlistHeader}>
            <h1>My Playlist</h1>
            <p>Show All</p>
        </section>
        <div className={styles.playlistHeader}>
            <span>{'#'}</span>
            <span>TITLE</span>
            <span>ARTIST</span>
            <span>TIME</span>
            <span>ALBUM</span>
        </div>
        {songDetails.map((item, index) => 
        (<div key={index} className={styles.playlistPill}>
            <span>{item.id}</span>
            <span>{item.title}</span>
            <span>{item.artist}</span>
            <span>{item.time}</span>
            <span>{item.album}</span>
        </div>
        ))}
    </div>
  )
}

export default PlaylistCard
