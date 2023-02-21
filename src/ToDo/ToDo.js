import "./ToDo.css";
import React ,{ Component }from "react"; 
class ToDo extends Component {
  intial = "";
  constructor(props) {
    super(props);
    this.state = {
      text: this.intial,
      list: []
    };
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };
  handleAdd = () => {
    if (this.state.text.length === 0) {
      return;
    }
    const newToDo = {
      task: this.state.text,
      id: Date.now()
    };
    this.setState((prev) => ({
      text: this.intial,
      list: prev.list.concat(newToDo)
    }));
  };
  handleDelete = (index) => {
    const todos = this.state.list.filter((item) => {
      return item.id !== index;
    });
    this.setState({
      list: [...todos]
    });
  };
  render() {
    console.log(this.state.text);
    console.log(this.state.list);
    return (
      <div className="ToDo">
        <h1>To Do List</h1>
        <DisplayTask items={this.state.list} removeItem={this.handleDelete} />
        <input value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleAdd} className="button">Add</button>
      </div>
    );
  }
}
class DisplayTask extends Component {
  render() {
    console.log(this.props.items);
    return (
      <div>
        <ol>
          {this.props.items.map((item) => {
            return (
              <div key={item.id} className="display">
                <li>{item.task}</li>
                <button onClick={() => this.props.removeItem(item.id)} className="button">
                  delete
                </button>
              </div>
            );
          })}
        </ol>
      </div>
    );
  }
}
export default ToDo;
