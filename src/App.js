import React, { Component } from 'react'
import pictures from "./photos.json"
import Main from './components/Main/Main'
import Navigation from './components/Navigation/Navigation'

//Shuffle Upon Each Click
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    [array[i], array[j] = array[j], array[i]]
  }
  return array
}


class App extends Component {
  state = {
    pictures,
    score: 0,
    topScore: 0,
    showAlert: 0,
    clickedPicture: []
  }

  clickedImage = id => {
    //Assign the state of the empty array to a let to be updated
    let clickedPicture = this.state.clickedPicture;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0
    })

    //If the clicked image has an id of the indexed pictures
    if (clickedPicture.indexOf(id) === -1) {
      //Push the id into that empty array of clickedPicture
      clickedPicture.push(id);
      console.log("clicked Image");
      //Run the score function
      this.handleIncrement();
      //run the reshuffle function after each click
      this.makeShuffle();
    }
    else if (this.state.score === 12) {
      //Alert player wins
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedPicture: []
      })
    } else {
      //alert player loss
      this.setState({
        score: 0,
        clickedPicture: []
      })
      console.log("diplicate");
      this.setState({
        showAlert: 1
      })
    }
    if (score > topScore) {
      this.setState({
        topScore: score
      })
    }
  }

  //HandleIncrement will increase this.state.score by 1
  handleIncrement = () => {
    //setState updates a components state
    this.setState({ score: this.state.score + 1 })
  }

  //Shuffle up images
  makeShuffle = () => {
    this.setState({ pictures: shuffle(pictures) });
  }


  render() {
    return (
      <div>
        <Navigation />
        <Main />
      </div>
    )
  }
}


export default App