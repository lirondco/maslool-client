import React, { Component } from "react";

const AllTrailsContext = React.createContext({
  allTrails: [],
  searchResult: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setAllTrails: () => {},
  setSearchResult: () => {},
  clearSearchResult: () => {},
});

export default AllTrailsContext;

export class AllTrailsProvider extends Component {
  state = {
    allTrails: [],
    searchResult: [],
    error: null,
  };

  setAllTrails = (allTrails) => {
    this.setState({ allTrails });
  };

  setSearchResult = (searchResult) => {
    this.setState({ searchResult });
  };

  clearSearchResult = () => {
    this.setSearchResult(null);
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      allTrails: this.state.allTrails,
      searchResult: this.state.searchResult,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setAllTrails: this.setAllTrails,
      setSearchResult: this.setSearchResult,
      clearSearchResult: this.clearSearchResult,
    };

    return (
      <AllTrailsContext.Provider value={value}>
        {this.props.children}
      </AllTrailsContext.Provider>
    );
  }
}
