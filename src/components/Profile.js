import React, { Component } from 'react';

class Profile extends Component{
    render() {
        console.log(this.props);
        const {
            playerName,
            teamCity,
            teamName,
            height,
            weight,
            pts,
            reb,
            ast,
            pie
        } = this.props.playerInfo;
        return (
            <div className="profile">
                <div className="player-name">{playerName}</div>
                <div className="profile-entry">
                    <div className="profile-entry-left">Team</div>
                    <div className="profile-entry-right">{`${teamCity} ${teamName}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">Height</div>
                    <div className="profile-entry-right">{height}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">Weight</div>
                    <div className="profile-entry-right">{weight}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">PTS</div>
                    <div className="profile-entry-right">{pts}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">AST</div>
                    <div className="profile-entry-right">{ast}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">PIE</div>
                    <div className="profile-entry-right">{pie}</div>
                </div>
            </div>
        )
    }
}

export default Profile;