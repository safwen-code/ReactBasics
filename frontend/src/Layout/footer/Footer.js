import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return (
            <div class="bg-light mt-5">
                <div class="container">
                    <div class="row pt-3 pb-3">
                        <div class="col">
                            <ul class="list-inline text-center">
                                <li class="list-inline-item"><Link to="#">À propos</Link></li>
                                <li class="list-inline-item">&middot;</li>
                                <li class="list-inline-item"><Link to="#">Vie privée</Link></li>
                                <li class="list-inline-item">&middot;</li>
                                <li class="list-inline-item"><Link to="#">Conditions d'utilisations</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer