'use client'
import styled from 'styled-components';

export const Wrapper=styled.div`
margin: 50px 90px 0 90px;
/* height: 100vh; */
/* border:1px solid white; */
`;


export const MovieInfoWrapper=styled.div`
/* border: 1px solid red; */
display:flex;
justify-content:center;
gap:100px;`;

export const PosterStar=styled.div`
width: fit-content;
display:flex;
flex-direction: column;
/* border:1px solid white; */
text-align:center;
gap:40px;`;

export const PosterImg=styled.img`
width:350px;
height:auto;
border-radius:20px;`

export const MyStar=styled.div``;

export const MovieInfo=styled.div`
/* border: 1px solid white; */
position: relative;
`;

export const Title=styled.h1`
letter-spacing:2px;
font-size:40px ;
`;

export const DetailWrapper=styled.div`
margin-top: 40px;
display:flex;
flex-direction:column;
gap:10px;
`;

export const DateAndCountry=styled.div``;

export const Genre=styled.div``;

export const RunningTime=styled.div``;

export const StarAvg=styled.div`
width:100px;
height:100px;
background-color:#9EA9D8;
position:absolute;
right:0;
display:flex;
gap:10px;
flex-direction:column;
justify-content:center;
align-items:center;`;

export const avNum=styled.div`
font-size:30px;
color: #01123D;
font-weight:bold;`;

export const avText=styled.div`
color: #01123D;
font-size: 14px;
`;

export const Summary=styled.div`
border-top:1px solid #283A6D;
padding-top: 40px;
margin-top: 40px;
width:600px;
line-height: 1.5em;
text-align: justify;
`;

export const ToWatchBtn=styled.button`
display: flex;
gap: 10px;
justify-content: center;
align-items: center;
height:40px;
padding: 10px;
width: 200px;
background-color: #283A6D;
border: 2px solid #5973B6;
border-radius:5px;
color: #ffffff;
cursor: pointer;
font-weight: 400;
&:hover{
    background-color:#5973B6 ;
    border: 2px solid #283A6D; 
}`;

export const WatchedBtn=styled(ToWatchBtn)``;

export const BtnWrapper=styled.div`
margin-top: 50px;
/* border:1px solid red; */
display:flex;
/* justify-content:center; */
gap:20px;
`;

export const StaffListWrapper=styled.div`
margin-top: 40px;
border-top: 1px solid #466093;
padding-top: 40px;
height:500px;`;

export const StaffList=styled.div``;
