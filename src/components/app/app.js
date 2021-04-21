import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from "../characterPage";

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            isRandom: true,
            error: false
        }

        this.randomToogle = this.randomToogle.bind(this)
    }

    randomToogle() {
        this.setState({
            isRandom: !this.state.isRandom,
        })
    }

    render() {
        const randomShow = this.state.isRandom ? <RandomChar/> : null;
        return(
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomShow}
                            <button onClick={this.randomToogle}>RandomChar Toogle</button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        )
    };
};