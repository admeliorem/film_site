import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            className="validate"
            placeholder="search"
            type="search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
            className="btn waves-effect waves-teal search-btn"
          >
            Search
          </button>
        </div>
        <div>
          <label>
            <input
              className="search-radio"
              className="group1"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Movie</span>
          </label>

          <label>
            <input
              className="search-radio"
              className="group1"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Serials</span>
          </label>

          <label>
            <input
              className="search-radio"
              className="group1"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
