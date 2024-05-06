import { useEffect, useState } from "react";
import SingleTeam from "./SingleTeam";


const MeetOurTeam = () => {
    const [teams, setTeams] = useState();
    console.log(teams);
    useEffect(() => {
        fetch('engeeniars.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])
    return (
        <div>
            <div className="text-center space-y-4">
                <h1 className="text-2xl font-bold text-[#FF3811]">Team</h1>
                <h1 className="text-5xl font-bold">Meet Our Team</h1>
                <p className="">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    teams?.map(t => <SingleTeam key={t.name} t={t}></SingleTeam>)
                }
            </div>
        </div>
    );
};

export default MeetOurTeam;