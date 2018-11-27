import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 310px;
  padding: 20px;
	font-size: 14px;	
`;

const Title = styled.div`
	display: flex;
	justify-content: space-between;
	font-weight: 500;
	margin-bottom: 5px;
`;

const Day = styled.div`
	text-transform: uppercase;
`;

const Temp = styled.div`
	font-size: 20px;
`;

const Date = styled.div`
	margin-bottom: 25px;
  color: #9a9a9a;
`;

const Feature = styled.div`
	padding-bottom: 25px;
	margin-bottom: 20px;
	border-bottom: 1px solid #dcdcdc;
	display: flex;
	align-items: center;
`;

const FeatureImg = styled.img`
	width: ${props => props.widthIcon ? props.widthIcon : "24px"};
	height: ${props => props.heightIcon ? props.heightIcon : "24px"};
	margin-right: ${props => props.mR};
	display: block;
`;

const FeatureName = styled.div`
	font-size: 18px;
`;

const Details = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Detail = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Time = styled.div`
	margin: 8px 0;
`;
const TempSmall = styled.div`
 color: #9a9a9a;
`;

export default ({info}) => {
  return <Card>
		<Title>
				<Day>{info.day}</Day>
				<Temp>{info.temp}</Temp>
		</Title>
		<Date>{info.date}</Date>
		<Feature>
			<FeatureImg src={info.icon} widthIcon="40px" heightIcon="40px" mR="20px"/>
			<FeatureName>{info.feature}</FeatureName>
		</Feature>
		<Details>
		{
			info.timesOfDay.map((item, index)=>{
				return (
					<Detail key={index}>
						<FeatureImg src={item.icon}/>
						<Time>{item.time}</Time>
						<TempSmall>{item.temp}</TempSmall>
					</Detail>
				)			
			})
		}
		</Details>
	</Card>;
};
