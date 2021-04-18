import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component {

    constructor() {
        super()
        this.state = {
            isRandom: true
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
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    };
};