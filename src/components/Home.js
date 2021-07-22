import React, { Component } from 'react'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {data:'',}
    }
    
    
    // get player summary
    // http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=B9D7B8759C0EA46E770FE3F9E3250924&steamids=76561197960435530

    // get owned games 
    // http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=B9D7B8759C0EA46E770FE3F9E3250924&steamid=76561197972495328&format=json

    // get friends list
    // http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=440&key=B9D7B8759C0EA46E770FE3F9E3250924&steamid=76561197972495328
    componentDidMount() {
        fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=B9D7B8759C0EA46E770FE3F9E3250924&steamids=76561197960435530`, {mode: 'no-cors', header: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}})
        .then(res => res.json)
        .then(res2 => this.setState({data: res2}))
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>hello world!</h1>
            </div>
        )
    }
}
