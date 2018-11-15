import React, { Component } from "react";
import styled from "styled-components";
import Downshift from "downshift";

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
`;
const items = [
  { value: "apple" },
  { value: "pear" },
  { value: "orange" },
  { value: "grape" },
  { value: "banana" }
];

class Search extends Component {
  state = {
    value: ""
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <SearchBox>
          {/* <Input
            placeholder="type in location name..."
            onChange={this.handleChange}
          /> */}
          <Downshift
            onChange={selection => alert(`You selected ${selection.value}`)}
            itemToString={item => (item ? item.value : "")}
          >
            {({
              getInputProps,
              getItemProps,
              getLabelProps,
              getMenuProps,
              isOpen,
              inputValue,
              highlightedIndex,
              selectedItem
            }) => (
              <div className="combobox">
                <Input
                  {...getInputProps()}
                  placeholder="type in a location name..."
                />
                <ul {...getMenuProps()}>
                  {isOpen
                    ? items
                        .filter(
                          item => !inputValue || item.value.includes(inputValue)
                        )
                        .map((item, index) => (
                          <li
                            {...getItemProps({
                              key: item.value,
                              index,
                              item,
                              style: {
                                backgroundColor:
                                  highlightedIndex === index
                                    ? "lightgray"
                                    : "white",
                                fontWeight:
                                  selectedItem === item ? "bold" : "normal"
                              }
                            })}
                          >
                            {item.value}
                          </li>
                        ))
                    : null}
                </ul>
              </div>
            )}
          </Downshift>
        </SearchBox>
        <Button>search</Button>
      </Form>
    );
  }
}

export default Search;
