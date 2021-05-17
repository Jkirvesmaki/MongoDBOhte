import React, { Component } from "react";
import axios from "axios";

export default class CreateWorker extends Component {
  constructor(props) {
    super(props);

    this.onChangename = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const worker = {
      name: this.state.name,
    };

    console.log(worker);

    axios
      .post("http://localhost:5000/worker/add", worker)
      .then((res) => console.log(res.data));

    this.setState({
      name: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Lisää uusi työntekijä</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>nimi: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangename}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Lisää työntekijä"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
