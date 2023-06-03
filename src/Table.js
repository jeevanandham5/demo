const { Component } = require("react");

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>profile</th>
        <th>Name</th>
        <th>Job</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const { charactersData, removeCharacter } = props;

  const datas = charactersData.map((character, index) => {
    return (
      // added some randome img as profile
      <tr key={index}>
        <td>
          <img
            src={"https://i.pravatar.cc/80?img=3" + index}
            alt="profile"
            className="profile"
          ></img>
        </td>
        <td>{character.name}</td>
        <td>{character.job}</td>
        <td>
          <button onClick={() => removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{datas}</tbody>;
};

class Table extends Component {
  render() {
    const { charactersData, removeCharacter } = this.props;
    return (
      <div className="my-table">
        <table>
          <TableHeader />
          <TableBody
            removeCharacter={removeCharacter}
            charactersData={charactersData}
          />
        </table>
      </div>
    );
  }
}

export default Table;
