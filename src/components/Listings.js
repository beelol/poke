import React, { Component } from 'react'
import Listing from './Listing'
import Axios from 'axios'

export default class Listings extends Component {
    constructor(props) {
        super(props)
        this.state = { listings: []};
        // this.handleClick = this.handleClick.bind(this); TODO
      }
    handleAddItem(){
        // console.log({name})
        // console.log({price})
        console.log('done')
    }
    render() {
        return (
            <div id="myListings" >
                {/* <Listing {...{name:"name1 ", info:"inf", imgUrl:"testURL"}}/> */}
                {this.state.listings.map( (card)=> {
                return (
                <div style={{borderStyle: "solid", padding: "2px"}}>
                    <Listing key={card.id} {...{name:card.name, cardURL: card.imageUrl, price:card.nationalPokedexNumber, trigger: this.props.trigger}}/>
                </div>
                )
                })}
            </div>
        )
    }
    componentDidMount(){
        Axios.get('https://api.pokemontcg.io/v1/cards').then((res)=>{
            console.log(res)
            this.setState({
                listings: res.data.cards
              });
            //populate listings
        }).catch((err)=>{
            console.log(err)
        })
        console.log("mounted")
    }
}
