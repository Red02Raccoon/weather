import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import "./style.scss";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const Form = styled.form`
  display: flex;
`;
const SearchBox = styled.div`
  min-width: 420px;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin-left: 10px;
  padding: 0.25em 1em;
  cursor: pointer;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 18px;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  background-color: #4b525c;
  color: #fff;
  outline: none;
`;

class Search extends Component {
  state = { address: "" };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.value);
  };

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    console.log(address, "address");
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <SearchBox>
          <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
            searchOptions={{ types: ["(cities)"] }}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading
            }) => (
              <div className="combobox">
                <Input
                  {...getInputProps({
                    placeholder: "Search Places ...",
                    className: "location-search-input"
                  })}
                />
                <ul className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <li
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </PlacesAutocomplete>
        </SearchBox>
        <Button>search</Button>
      </Form>
    );
  }
}

export default connect(null)(Search);
