import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './Layout/navbar/Navbar'
import Container from './Layout/container/Container'
import Footer from './Layout/footer/Footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.tab = [{
      id: 1,
      image: 'https://www.softfluent.fr/wp-content/uploads/2019/10/css-3.png',
      titel: 'Créez des animations CS',
      text: 'Vous allez plonger dans le monde des animations CSS pour donner vie à vos pages web !',
    },
    {
      id: 2,
      image: 'https://image.shutterstock.com/image-vector/js-brush-stroke-letter-logo-260nw-715073761.jpg',
      titel: 'Programmer avec JavaScript',
      text: 'Ce cours est conçu pour vous enseigner les bases du langage de programmation JavaScript.',
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiEe5bnInvmPZ48XsszQpzAY1VEpHMbNkU7Q&usqp=CAU',
      titel: 'Les fondamentaux de Swift',
      text: 'Découvrez le développement iOS et réalisez des applications taillées pour liPad !',
    },

    ]
  }

  render() {
    console.log('le tableau contient :' + JSON.stringify(this.tab))
    return (
      <Router>
        <div>
          <Navbar />
          <Container MyTab={this.tab} />
          <Footer />
        </div>
      </Router>

    )
  }
}
export default App