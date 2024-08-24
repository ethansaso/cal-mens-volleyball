import { Card, CardBody, CardImg } from "reactstrap";
import teamMembers from '../../data/teamMembers.json';
import Reveal from "../util/Reveal";
import { useEffect, useMemo, useState } from "react";
import TeamMemberSearchBar from "../baubles/TeamMemberSearchBar";

const Roster = () => {
    const [searchedTeamMemberName, setSearchedTeamMemberName] = useState('');
    const [selectedTeamMemberPosition, setSelectedTeamMemberPosition] = useState('All');
    const [selectedTeamMemberYear, setSelectedTeamMemberYear] = useState('All');

    const [filteredPlayers, setFilteredPlayers] = useState('');
    const [staffMembers, setStaffMembers] = useState('');

    const ignoredPositions = useMemo(() => ['coach', 'head coach', 'photographer'], []);

    useEffect(() => {
        const filtered = Object.keys(teamMembers).filter((key) => {
            const teamMember = teamMembers[key];
            // TODO: players with missing positions should end up in recruits
            return (
                (searchedTeamMemberName === '' || (teamMember.name?.toLowerCase().includes(searchedTeamMemberName.toLowerCase()) ?? false)) &&
                (!teamMember.positions?.every(position => ignoredPositions.includes(position.toLowerCase())) ?? true) &&
                (selectedTeamMemberPosition === 'All' || (teamMember.positions?.includes(selectedTeamMemberPosition) ?? false)) &&
                (selectedTeamMemberYear === 'All' || teamMember.year === selectedTeamMemberYear)
            );
        });

        // Sort the filtered players by their number
        const sortedFiltered = filtered.sort((a, b) => {
            return (teamMembers[a].number ?? 0) - (teamMembers[b].number ?? 0);
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
    
        setFilteredPlayers(sortedFiltered);
        setStaffMembers(staff);
    }, [searchedTeamMemberName, selectedTeamMemberPosition, selectedTeamMemberYear, ignoredPositions]);

    const handleSearch = (name, position, year) => {
        setSearchedTeamMemberName(name);
        setSelectedTeamMemberPosition(position);
        setSelectedTeamMemberYear(year);
    };

    return (
        <div className="roster main">
            <h1>Players</h1>
            <TeamMemberSearchBar onSearch={handleSearch} teamMembers={teamMembers} ignoredPositions={ignoredPositions}/>
            <p className="search-result-count">{Object.keys(filteredPlayers).length} results</p>
            {Object.keys(filteredPlayers).map((filename) => {
                const imagePath = require(`../../assets/img/team-members/${filename}`);

                return (
                    <Reveal width="100%">
                        <Card className="team-member-card" key={filename}>
                            <CardImg className="team-member-img" src={imagePath} alt={filename.replace(/\.[^/.]+$/, "")}/>
                            <CardBody className="team-member-details">
                                <div className="team-member-left">
                                    <div className="team-member-primary">
                                        <div className="team-member-text">
                                            <p style={{fontWeight: '700', marginBottom: '5px'}}>{teamMembers[filename].positions?.join('/') ?? 'Position unknown -- please contact staff'}</p>
                                            <p style={{marginLeft: '5px', marginBottom: 0}}>{teamMembers[filename].height ? " | " + teamMembers[filename].height : ""}</p>
                                        </div>
                                        <div className="team-member-text">
                                            <h2 className="roster-number">{teamMembers[filename].number}</h2>
                                            <h2 style={{fontWeight: 'bold'}}>{teamMembers[filename].name ?? 'Name unknown -- please contact staff'}</h2>
                                        </div>
                                    </div>
                                    <div className="team-member-personal">
                                        <p className="team-member-text">{teamMembers[filename].hometown}</p>
                                        <p className="team-member-text" style={{marginBottom: 0}}>{teamMembers[filename].highschool}</p>
                                    </div>
                                </div>
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
                                <div className="team-member-left">
                                    <div className="team-member-primary">
                                        <div className="team-member-text">
                                            <p style={{fontWeight: '700', marginBottom: '5px'}}>{teamMembers[filename].positions?.join('/') ?? 'Position unknown -- please contact staff'}</p>
                                        </div>
                                        <div className="team-member-text">
                                            <h2 style={{fontWeight: 'bold'}}>{teamMembers[filename].name ?? 'Name unknown -- please contact staff'}</h2>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Reveal>
                );
            })}
        </div>
    )
}

export default Roster;
