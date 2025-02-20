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
    max-width: 23%;
    padding: 2%; 
    margin: 3%;
    img{
        max-width: 100%;
        height: auto;
        margin: 20px;
    }
    background-color: ${(props)=>(props.jobType[0] === "full-time" ? 'lightgoldenrodyellow' : '')};
    background-color: ${(props)=>(props.jobType[0] === "part-time" ? 'mistyrose' : '')};
    background-color: ${(props)=>(props.jobType[0] === "contract" ? 'lightgrey' : '')};
    background-color: ${(props)=>(props.jobType[0] === "internship" ? 'mediumpurple' : '')};

    color: black;
    border: 3px red solid;
    font: small-caps bold calc(2px + 1vw) Helvetica; 
    text-align: center;
`;

export default function JobInfo(props: { data:Job[] }){
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