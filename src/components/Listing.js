import React, { Component } from "react";
import { ListGroup, ListGroupItem, Media } from 'reactstrap';
import PlayMusic from './PlayMusic.js';
import './listing.css';
import { Row } from 'reactstrap';
import { Button } from "reactstrap";




class Listing extends Component {
  state = {
    listitems: []
  }

  componentDidMount() {
    fetch('https://dev-racer-252811.appspot.com/ads/get-all')
      .then(res => res.json())
      .then((data) => {
        this.setState({ listitems: data })
      })
      .catch(console.log)
  }

  // state = {
  //   listitems: [
  //     {
  //       "title": "abc 1",
  //       "voice_title_url": "https://storage.googleapis.com/sugar-maroon/records/402c8360-fc90-11e9-a051-2ff539329425",
  //       "description": "description ne",
  //       "voice_description_url": "https://storage.googleapis.com/sugar-maroon/records/402c8360-fc90-11e9-a051-2ff539329425",
  //       "images": [
  //         // "https://storage.cloud.google.com/sugar-maroon/images/de7b96a0-fc77-11e9-bc49-730fdec8461d?folder=true&organizationId=true"
  //       // "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704"
  //       ],
  //       "category": 5010,
  //       "created_date": "2019-11-02T07:55:30.694Z",
  //       "updated_date": "2019-11-02T07:55:30.694Z"
  //     },
  //     {
  //       "title": "abc 2",
  //       "voice_title_url": "https://storage.googleapis.com/sugar-maroon/records/402c8360-fc90-11e9-a051-2ff539329425",
  //       "description": "description ne",
  //       "voice_description_url": "https://storage.googleapis.com/sugar-maroon/records/402c8360-fc90-11e9-a051-2ff539329425",
  //       "images": [
  //         "https://storage.cloud.google.com/sugar-maroon/images/de7b96a0-fc77-11e9-bc49-730fdec8461d?folder=true&organizationId=true"
  //       ],
  //       "category": 5010,
  //       "created_date": "2019-11-02T07:55:30.694Z",
  //       "updated_date": "2019-11-02T07:55:30.694Z"
  //     },
  //     {
  //       "title": "abc 3",
  //       "voice_title_url": "https://storage.googleapis.com/sugar-maroon/records/402c8360-fc90-11e9-a051-2ff539329425",
  //       "description": "description ne",
  //       "voice_description_url": "https://storage.googleapis.com/sugar-maroon/records/402c8360-fc90-11e9-a051-2ff539329425",
  //       "images": [
  //         "https://storage.cloud.google.com/sugar-maroon/images/de7b96a0-fc77-11e9-bc49-730fdec8461d?folder=true&organizationId=true"
  //       ],
  //       "category": 5010,
  //       "created_date": "2019-11-02T07:55:30.694Z",
  //       "updated_date": "2019-11-02T07:55:30.694Z"
  //     },
  //     {
  //       "title": "abc 4",
  //       "voice_title_url": "https://storage.googleapis.com/sugar-maroon/records/402c8360-fc90-11e9-a051-2ff539329425",
  //       "description": "description ne",
  //       "voice_description_url": "https://storage.googleapis.com/sugar-maroon/records/402c8360-fc90-11e9-a051-2ff539329425",
  //       "images": [
  //         "https://storage.cloud.google.com/sugar-maroon/images/de7b96a0-fc77-11e9-bc49-730fdec8461d?folder=true&organizationId=true"
  //       ],
  //       "category": 5010,
  //       "created_date": "2019-11-02T07:55:30.694Z",
  //       "updated_date": "2019-11-02T07:55:30.694Z"
  //     },
  //     {
  //       "title": "abc 5",
  //       "voice_title_url": "https://storage.googleapis.com/sugar-maroon/records/402c8360-fc90-11e9-a051-2ff539329425",
  //       "description": "description ne",
  //       "voice_description_url": "https://storage.googleapis.com/sugar-maroon/records/402c8360-fc90-11e9-a051-2ff539329425",
  //       "images": [
  //         "https://storage.cloud.google.com/sugar-maroon/images/de7b96a0-fc77-11e9-bc49-730fdec8461d?folder=true&organizationId=true"
  //       ],
  //       "category": 5010,
  //       "created_date": "2019-11-02T07:55:30.694Z",
  //       "updated_date": "2019-11-02T07:55:30.694Z"
  //     }
  //   ]
  // };

  render() {
    return (
      <div className="Listing">
        <div className="play__list">
          <Row>
            <Button color="link">Previ</Button>
            <PlayMusic url={"http://streaming.tdiradio.com:8000/house.mp3"} />
            <Button color="link">Next</Button>
          </Row>
        </div>
        <br />
        <ListGroup>
          {this.state.listitems.map((listitem, index) => (
            <ListGroupItem className="listing__group" key={index}>
              <Media>
                <div className="listing__image">
                  <Media left href="#">
                    <img className="image" alt="abc" src={listitem.images[0]} />
                    <PlayMusic styles={"play__button"} url={listitem.voice_description_url} />
                  </Media>
                </div>
                <div className="listing__body">
                  <Media body>
                    <Media heading>
                      {listitem.title}
                    </Media>
                    {listitem.description}
                  </Media>
                </div>
              </Media>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    )
  }
}

export default Listing;