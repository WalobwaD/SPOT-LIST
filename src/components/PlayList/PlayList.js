import React from "react"

import TrackList from "../TrackList/TrackList"
import "./PlayList.css"

export default class PlayList extends React.Component{
    constructor(props){
        super(props)
        this.handleChangeName = this.handleChangeName.bind(this)
    }

    handleChangeName(e){
        let newName = e.target.value
        this.props.onNameChange(newName)
    }
    render(){
        return(
            <div className="Playlist">
                <input 
                onChange = {this.handleChangeName}
                placeholder="PlayList Name"/>
                    <TrackList
                        isRemoval = {true}
                        tracks={this.props.playlistTracks}
                        onRemove={this.props.onRemove}

                    />
                <button 
                onClick = {this.props.onSave}
                className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}