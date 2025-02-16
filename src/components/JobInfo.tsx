import { Job } from "../interfaces/Jobs.ts";
import styled from "styled-components";

const AllCharsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: lightskyblue;
`;

const SingleCharDiv = styled.div<{jobType: string}>`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    max-width: 20%;
    padding: 2%; 
    margin: 3%;
    
    //ASK ABOUT WHAT'S WRONG WITH THIS LINE
    background-color: ${(props)=>(props.jobType === "full-time" ? 'red' : 'lightpink')};
    color: ${(props)=>(props.jobType === "full-time" ? 'white' : 'black')};
    //ASK ABOUT WHAT'S WRONG WITH THIS LINE
    
    border: 3px red solid;
    font: small-caps bold calc(1px + 1vw) Helvetica; 
    text-align: center;
`;

export default function JobFinder(props: { data:Job[] }){
    return (
        <AllCharsDiv>
            {
                props.data.map((char: Job) =>
                    <SingleCharDiv key = {char.id} jobType = {char.jobType}>
                        <h1>{char.companyName}</h1>
                        <h2>{char.jobTitle}</h2>
                        <p>{char.jobIndustry}</p>
                        <img src = {char.companyLogo} alt = {`image of ${char.companyName}`} />
                        <p>{char.jobType}</p>
                        <p><a href = {char.url} target = "_blank"> Link to Application </a></p>
                        <p>Job ID = {char.id}</p>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    )
}