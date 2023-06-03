import { Component } from "react";

class ApiExample extends Component {
  state = {
    data: ["First item", "Second item"],
  };

  render() {
    let url =
      "http://en.wikipedia.org/w/api.php?action=opensearch&search=Harry+Potter&format=json&origin=*";
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({ data: result });
      });

    const list = this.state.data.map((val, index) => {
      // in this return u cant use li  u have to use div ok
      return <div key={index}>{val}</div>;
    });

    return (
      // use u r li in hear in side of ul is the correct way
      <ul>
        <li>
          <p>{list}</p>
        </li>
      </ul>
    );
  }
}

export default ApiExample;
