import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class EditWorkday extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeJobsite = this.onChangeJobsite.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeWage = this.onChangeWage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      jobsite: "",
      description: "",
      duration: 0,
      date: new Date(),
      wages: 0,
      users: [],
      jobsites: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/workday/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          jobsite: response.data.jobsite,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date),
          wage: response.data.wage,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/worker/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            names: response.data.map((worker) => worker.name),
            name: response.data[0].name,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:5000/jobsite/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            jobsites: response.data.map((jobsite) => jobsite.jobsite),
            jobsite: response.data[0].jobsite,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeJobsite(e) {
    this.setState({
      jobsite: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onChangeWage(e) {
    this.setState({
      wage: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const workday = {
      name: this.state.name,
      jobsite: this.state.jobsite,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
      wage: this.state.wage,
    };

    console.log(workday);

    axios
      .post(
        "http://localhost:5000/workday/update/" + this.props.match.params.id,
        workday
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Muokkaa työpäivää</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Työnkuva: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Työajan pituus: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>pvm: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Palkka: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.wage}
              onChange={this.onChangeWage}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Muokkaa" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
