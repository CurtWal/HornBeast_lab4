import React, { Component } from 'react'
import { Card } from 'react-bootstrap'


export default class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numbers: this.props.data,
    }
  }
  // Make away to filter the json data to search by the amount of horns
  handleChange = (e) => {
    // target the user value
    const selectedHorn = e.target.value;
    let updatedHorn;
    // filter the amount of horns by 1
    if (selectedHorn === '1') {
      updatedHorn = this.props.data.filter(horn => horn.horns === 1);
      // update the state to only the data with one horn
      this.setState({
        numbers: updatedHorn
      }) // filter the amount the horns by 2
    } else if (selectedHorn === '2') {
      updatedHorn = this.props.data.filter(horn => horn.horns === 2);
      this.setState({
        numbers: updatedHorn
      }) //filter by 3
    } else if (selectedHorn === '3') {
      updatedHorn = this.props.data.filter(horn => horn.horns === 3);
      this.setState({
        numbers: updatedHorn
      }) // filter by 100
    } else if (selectedHorn === '100') {
      updatedHorn = this.props.data.filter(horn => horn.horns === 100);
      this.setState({
        numbers: updatedHorn
      }) // reset filter
    } else if (selectedHorn === 'none') {
      updatedHorn = this.props.data;
      this.setState({
        numbers: updatedHorn
      })
    }
  }

  render() {
    return (
      <div>
        <form>
          <select onChange={this.handleChange}>
            <option value="none">Unfiltered</option>
            <option value="1">1 Horn</option>
            <option value="2">2 Horns</option>
            <option value="3">3 Horns</option>
            <option value="100">100 Horns</option>
          </select>
        </form>
        {this.state.numbers.map((obj) => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={obj.image_url} alt={obj.keyword} />
              <Card.Body>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Text>
                  {obj.description}<br></br>
                  Amount of horns: {obj.horns}
                </Card.Text>
              </Card.Body>
            </Card>
          )
        })}

      </div>
    )
  }
}
