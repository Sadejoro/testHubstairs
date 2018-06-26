import React, { Component } from 'react';
import '../../App.css';
import { playlist, tracks } from'./apiMusic';
import PlayList from './Playlist';
import Track from './Track';

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = playlist;
        
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }


    add (newTrack) {
        console.log(' morceau ajouté', newTrack);
      if (this.state.playlist.filter(track => track.id === newTrack.id).length === 0) {
        this.setState({
            ...this.state,
            playlist: [
              ...this.state.playlist,
              newTrack
            ]
        });
      }
    }
    
    remove (trackToRemove) {
        console.log('morceau supprimé', trackToRemove);
      this.setState({
          ...this.state,
        playlist: this.state.playlist.filter(track => track.id !== trackToRemove.id)
      });
    }

  
  render() {
    return (
      <div className="Music container">
            <h1>Playlist :</h1>
    	    <PlayList 
    	    listType="playlist" 
    	    playlist={this.state.playlist} 
    	    clickHandler={this.remove}
            />
            <h1>Morceaux :</h1>
            <PlayList 
            playlist={tracks.playlist}
            clickHandler={this.add} />
      </div>
    );
  }
}

export default Music;
