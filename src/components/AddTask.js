import React from "react";

class AddTask extends React.Component {
  state = {
    task: ""
  };

  render() {
    const { task } = this.state;
    return (
      <div className="addTask__container">
        <h2 className="addTask__title">
          <form
            onSubmit={e => {
              e.preventDefault();
              this.props.handleSubmit(task);
              this.setState({ task: "" });
            }}
          >
            <label htmlFor="addTask">Adicione uma nova tarefa</label>
            <input
              type="text"
              id="addTask"
              placeholder="Ex: Comprar sorvete"
              value={task}
              onChange={e => this.setState({ task: e.target.value })}
            />
          </form>
        </h2>
      </div>
    );
  }
}

export default AddTask;
