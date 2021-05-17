import React, { Component } from "react";
import axios from "axios";

export default class CreateJobsite extends Component {
  constructor(props) {
    super(props);

    this.onChangejobsite = this.onChangejobsite.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      jobsite: "",
    };
  }

  onChangejobsite(e) {
    this.setState({
      jobsite: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const jobsite = {
      jobsite: this.state.jobsite,
    };

    console.log(jobsite);

    axios
      .post("http://localhost:5000/jobsite/add", jobsite)
      .then((res) => console.log(res.data));

    this.setState({
      jobsite: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Lisää uusi työmaa</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>työmaan nimi: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.jobsite}
              onChange={this.onChangejobsite}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Lisää työmaa"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
