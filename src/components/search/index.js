import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import "./style.scss";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import Button from "../button"

const Form = styled.form`
  display: flex;
`;
const SearchBox = styled.div`
  min-width: 420px;
`;

const Loader = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
`;

const InputContainer = styled.div`
  position: relative;
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
  transition: all 0.30s ease-in-out;
  border: 1px solid transparent;
  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }
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
              <div className={suggestions.length ? "combobox open": "combobox"} >
                <InputContainer>
                <Input
                  {...getInputProps({
                    placeholder: "Search Places ...",
                    className: "location-search-input"
                  })}
                />
                {loading && <Loader>Loading...</Loader>}
                </InputContainer>
                <ul>
                  
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
