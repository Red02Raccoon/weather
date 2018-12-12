import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

import { fetchRequest as weatherFetch } from "../../actions/weather-data";
import { fetchRequest as forecastDaysFetch } from "../../actions/forecast-days";
import { setData as setDateLocation } from "../../actions/location";

import Preloader from "../preloader";

const Form = styled.form``;
const SearchBox = styled.div``;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 18px;
  padding: 8px 16px;
  padding-right: 40px;
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
      z-index: 2;
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
  background-color: ${p => (p.active ? "#ececec" : "#fff")};

  &:last-child {
    border-bottom: none;
  }
`;

class Search extends Component {
  state = { address: "" };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.setState({ address });

    geocodeByAddress(address)
      .then(results => {
        return getLatLng(results[0]);
      })
      .then(latLng => {
        const { weatherFetch, forecastDaysFetch, setDateLocation } = this.props;

        weatherFetch(latLng);
        forecastDaysFetch(latLng);

        setDateLocation(latLng);
        this.setState({ address: "" });
      })
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
                  {loading && <Preloader position="rc" right="16px" />}
                </InputContainer>
                <SugestionsList>
                  {suggestions.map(suggestion => {
                    return (
                      <SugestionItem
                        {...getSuggestionItemProps(suggestion)}
                        active={suggestion.active && "active"}
                      >
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

export default connect(
  null,
  { weatherFetch, forecastDaysFetch, setDateLocation }
)(Search);
