import React from "react";

class SearchBar extends React.Component {
  state = { searchString: "Search Videos!" };

  onInputChange = (event) => {
    this.setState({ searchString: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.searchString);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form " action="">
          <div className="field">
            <label htmlFor=""> Video Search </label>
            <input
              type="text"
              value={this.state.searchString}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
