import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Workday = (props) => (
  <tr>
    <td>{props.workday.name}</td>
    <td>{props.workday.jobsite}</td>
    <td>{props.workday.description}</td>
    <td>{props.workday.duration}</td>
    <td>{props.workday.date.substring(0, 10)}</td>
    <td>{props.workday.wage}</td>
    <td>
      <Link to={"/edit/" + props.workday._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteWorkday(props.workday._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class WorkdayList extends Component {
  constructor(props) {
    super(props);

    this.deleteWorkday = this.deleteWorkday.bind(this);

    this.state = { workdays: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/workday/")
      .then((response) => {
        this.setState({ workdays: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteWorkday(id) {
    axios.delete("http://localhost:5000/workday/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      exercises: this.state.workdays.filter((el) => el._id !== id),
    });
  }

  workdayList() {
    return this.state.workdays.map((currentworkday) => {
      return (
        <Workday
          workday={currentworkday}
          deleteWorkday={this.deleteWorkday}
          key={currentworkday._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Kirjatut työpäivät</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Työntekijä</th>
              <th>Työmaa</th>
              <th>Työnkuva</th>
              <th>Työpäivän pituus(min)</th>
              <th>pvm</th>
              <th>Palkka euroina</th>
            </tr>
          </thead>
          <tbody>{this.workdayList()}</tbody>
        </table>
      </div>
    );
  }
}
