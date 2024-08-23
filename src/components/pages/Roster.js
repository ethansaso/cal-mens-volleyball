import { Card, CardBody, CardImg } from "reactstrap";
import teamMembers from '../../data/teamMembers.json';
import Reveal from "../util/Reveal";
import { useEffect, useMemo, useState } from "react";
import TeamMemberSearchBar from "../baubles/TeamMemberSearchBar";

const Roster = () => {
    const [teamMemberName, setTeamMemberName] = useState('');
    const [teamMemberPosition, setTeamMemberPosition] = useState('All');
    const [teamMemberYear, setTeamMemberYear] = useState('All');

    const [filteredPlayers, setFilteredPlayers] = useState('');
    const [staffMembers, setStaffMembers] = useState('');

    const ignoredPositions = useMemo(() => ['coach', 'photographer'], []);

    useEffect(() => {
        const filtered = Object.keys(teamMembers).filter((key) => {
            const teamMember = teamMembers[key];
            console.log(teamMember);
            console.log(ignoredPositions);
            // TODO: players with missing positions should end up in recruits
            return (
                (teamMemberName === '' || teamMember.name.toLowerCase().includes(teamMemberName.toLowerCase())) &&
                (!teamMember.positions?.every(position => ignoredPositions.includes(position.toLowerCase())) ?? true) &&
                (teamMemberPosition === 'All' || teamMember.positions.includes(teamMemberPosition)) &&
                (teamMemberYear === 'All' || teamMember.year === teamMemberYear)
            );
        }).reduce((acc, key) => {
            acc[key] = teamMembers[key];
            return acc;
        }, {});

        const staff = Object.keys(teamMembers).filter((key) => {
            const teamMember = teamMembers[key];
            return teamMember.positions?.every(position => ignoredPositions.includes(position.toLowerCase())) ?? false;
        }).reduce((acc, key) => {
            acc[key] = teamMembers[key];
            return acc;
        }, {});
    
        setFilteredPlayers(filtered);
        setStaffMembers(staff);
    }, [teamMemberName, teamMemberPosition, teamMemberYear, ignoredPositions]);

    const handleSearch = (name, position, year) => {
        setTeamMemberName(name);
        setTeamMemberPosition(position);
        setTeamMemberYear(year);
    };

    return (
        <div className="roster main">
            <h1>Players</h1>
            <TeamMemberSearchBar onSearch={handleSearch} teamMembers={teamMembers} ignoredPositions={ignoredPositions}/>
            <p className="search-result-count">{Object.keys(filteredPlayers).length} results</p>

            <div className=""></div>
            {Object.keys(filteredPlayers).map((filename) => {
                const imagePath = require(`../../assets/img/team-members/${filename}`);

                return (
                    <Reveal width="100%">
                        <Card className="team-member-card" key={filename}>
                            <CardImg className="team-member-img" src={imagePath} alt={filename.replace(/\.[^/.]+$/, "")}/>
                            <CardBody className="team-member-details">
                                <p className="team-member-positions">{teamMembers[filename].positions?.join(' / ') ?? 'Position unknown -- please contact staff'}</p>
                                <h4 className="team-member-name">{teamMembers[filename].name ?? 'Name unknown -- please contact staff'}</h4>
                                <h6 className="team-member-year">{teamMembers[filename].year ?? 'Year unknown -- please contact staff'}</h6>
                            </CardBody>
                        </Card>
                    </Reveal>
                );
            })}
            <h1>Staff</h1>
            {Object.keys(staffMembers).map((filename) => {
                const imagePath = require(`../../assets/img/team-members/${filename}`);

                return (
                    <Reveal width="100%">
                        <Card className="team-member-card" key={filename}>
                            <CardImg className="team-member-img" src={imagePath} alt={filename.replace(/\.[^/.]+$/, "")}/>
                            <CardBody className="team-member-details">
                                <p className="team-member-positions">{teamMembers[filename].positions.join(' / ')}</p>
                                <h4 className="team-member-name">{teamMembers[filename].name}</h4>
                            </CardBody>
                        </Card>
                    </Reveal>
                );
            })}
        </div>
    )
}

export default Roster;