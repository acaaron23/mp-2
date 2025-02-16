import { useEffect, useState } from 'react';
import styled from "styled-components";
import { Job } from "./interfaces/Jobs.ts";
import JobFinder from "./components/JobInfo.tsx";

const ParentDiv = styled.div`
    width: 90vw;
    margin: auto;
    border: 5px lightslategray solid;
`;

export default function App() {
    const [data, setData] = useState<Job[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://jobicy.com/api/v2/remote-jobs?&geo=usa");
            const {jobs}: {jobs: Job[]} = await rawData.json();
            setData(jobs);
        }

        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was an error: " + e));
    }, [data.length]);

    return (
        <ParentDiv>
            <JobFinder data = {data}/>
        </ParentDiv>
  )
}
