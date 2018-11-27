import styled from "styled-components";

export const PageTitle = styled.div`
	font-size: 32px;
	font-weight: bold;
	color: #222222;
  margin-bottom: ${props => props.mB ? props.mB : "35px"};
`;