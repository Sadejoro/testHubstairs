import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//liste des morceaux
const Track = (props) => {

	const displayIcons = (type, action) => {
    const adding = type === 'add';
    const lire = action ==='play';
    
  	return (
        <tbody>
          <td className="btn-sm btn-primary">
            {adding ? '+' : 'X'}
          </td>
          <td>{` ${props.track.title}`}</td>
          <td className="btn-sm btn-primary">
            {lire ? ' ►' : '■ '}
          </td>
		</tbody>
  	)
  };
  
	return (
  	<span onClick={() => props.clickHandler(props.track)}>
      {displayIcons(props.type, props.action)}
    </span>
  )
}

export default Track;
