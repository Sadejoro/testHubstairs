import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Track from './Track';

//liste de morceaux dans la playlist
const Playlist = (props) => {
	const listType = props.listType;
	return (
  	<div>
      {props.playlist.length === 0 ?
        ( <strong>Pas encore de morceaux dans la playlist.</strong> ) :
        ( <table className="table-dark">
        {/* Mapper tous les morceaux */}
          { props.playlist.map((track) => 
          	(
              <tr key={track.id} >
                { listType === 'playlist' ? 
                  <Track 
                    clickHandler={props.clickHandler} 
                    type="remove" 
                    action="stop"
                    track={track} /> : 
                  <Track 
                    clickHandler={props.clickHandler} 
                    type="add" 
                    action="play"
                    track={track} /> }
              </tr>
            )
          )}
        </table> )
      }
    </div>
  )
}

export default Playlist;