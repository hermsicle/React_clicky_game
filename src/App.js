import React, { Component } from 'react'
import pictures from "./photos.json"
import Main from './components/Main/Main'
import Navigation from './components/Navigation/Navigation'
import Cards from './components/Cards/Cards.js'
import './App.css'

//Shuffle Upon Each Click
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
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
      <div className="container">
        <Navigation />

        <div
          className="showAlert"
          style={{ opacity: this.state.showAlert }}>
          <h1 className="showAlert">You clicked on this already, try again...</h1>
        </div>

        <div
          className="showSuccess"
          style={{ opacity: this.state.showSuccess }}>
          <h1 className="showSuccess">Brilliant, you haven't clicked on duplicates!</h1>
        </div>

        <Main
          title="Rick & Morty Clicky Game"
          score={this.state.score}
          topScore={this.state.topScore}
        />

        <div className="image-container">
          {this.state.pictures.map(picture => (
            <Cards
              key={picture.id}
              id={picture.id}
              title={picture.title}
              image={picture.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </div>
      </div>
    )
  }
}


export default App