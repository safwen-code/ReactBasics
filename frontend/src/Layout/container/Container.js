import React from 'react'

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.search = ''
    }
    OnChangeHundler = (text) => {
        this.search = text
        console.log('la search est :' + JSON.stringify(this.search))
    }

    render() {

        const MyTab = this.props.MyTab
        console.log('mon tableau ' + JSON.stringify(MyTab))
        return (
            <div class="container">
                <div class="row my-3">
                    <div class="col">
                        <h1 class="text-secondary">Cours</h1>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col">
                        <input class="form-control" id="searchInput" type="text" name='search'
                            placeholder="Search.."
                            onChange={(text) => this.OnChangeHundler(text)}
                        />
                    </div>
                </div>
                <div class="row" id="lessonList">
                    {
                        MyTab.map(item => <div class="col-12 col-lg-4" key={item.id}>
                            <div class="card mb-4 mb-lg-0 border border-dark shadow">
                                <img src={item.image} alt="Animations CSS modernes" class="card-img-top" />
                                <div class="card-body font-italic">
                                    <h5 class="card-title">{item.titel}</h5>
                                    <p class="card-text">{item.text}</p>
                                    <a href="lesson-1.html" class="btn btn-primary stretched-link">Démarrer l'apprentissage</a>
                                </div>
                            </div>
                        </div>

                        )}
                </div>
            </div>
        )
    }
}
export default Container