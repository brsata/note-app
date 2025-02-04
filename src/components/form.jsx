import React, { Component } from 'react';

class Form extends Component {
  state = {
    form: {
      text: '',
      source: '',
      category: '',
    },
    errors: {},
  };

  validate = () => {
    return { text: 'Text is required' };
  };

  handleSubmit = event => {
    event.preventDefault();

    // const errors = this.validate();
    // this.setState({ errors });
    // if (errors) return;

    const newNote = {
      id: Date.now(),
      text: this.state.form.text,
      source: this.state.form.source,
      category: this.state.form.category,
    };

    this.props.addData(newNote);
  };

  handleInputChange = e => {
    const updatedForm = { ...this.state.form };
    updatedForm[e.target.name] = e.target.value;
    this.setState({
      form: updatedForm,
    });
  };
  render() {
    const { categories } = this.props;
    return (
      <form className="note-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a new note..."
          value={this.state.text}
          onChange={this.handleInputChange}
          name="text"
        />
        <span>{200 - this.state.form.text.length}</span>
        <input
          type="text"
          placeholder="Source(http://)"
          value={this.state.source}
          onChange={this.handleInputChange}
          name="source"
        />
        <select
          value={this.state.category}
          onChange={this.handleInputChange}
          name="category"
        >
          <option value="">Choose category:</option>
          {categories.map(category => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button className="btn btn-large" type="submit">
          ADD
        </button>
      </form>
    );
  }
}

export default Form;
