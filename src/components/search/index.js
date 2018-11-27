import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const Form = styled.form``;
const SearchBox = styled.div``;

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
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }
`;

const Combobox = styled.div`
  position: relative;
  &.open {
    ul {
      opacity: 1;
    }
  }
`;

const SugestionsList = styled.ul`
  position: absolute;
  left: 0;
  width: 100%;
  border-bottom: honeydew;
  border-left: honeydew;
  border-right: honeydew;
  border-top: 1px solid #e6e6e6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 2px 2px;
  opacity: 0;
`;

const SugestionItem = styled.li`
  border-bottom: 1px solid #dcdcdc;
  padding: 5px 15px;
  cursor: pointer;
  background-color: #fff;
  &:hover {
    background-color: #fafafa;
  }
  &:last-child {
    border-bottom: none;
  }
`;
class Search extends Component {
  state = { address: "" };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.value);
    // perform an ajax call
  };

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    console.log(address, "address");
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng)) // perform an ajax call
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
              <Combobox
                className={suggestions.length ? "combobox open" : "combobox"}
              >
                <InputContainer>
                  <Input
                    {...getInputProps({
                      placeholder: "Search Places ...",
                      className: "location-search-input"
                    })}
                    title="search box"
                  />
                  {loading && <Loader>Loading...</Loader>}
                </InputContainer>
                <SugestionsList>
                  {suggestions.map(suggestion => {
                    return (
                      <SugestionItem {...getSuggestionItemProps(suggestion)}>
                        <span>{suggestion.description}</span>
                      </SugestionItem>
                    );
                  })}
                </SugestionsList>
              </Combobox>
            )}
          </PlacesAutocomplete>
        </SearchBox>
      </Form>
    );
  }
}

export default connect(null)(Search);