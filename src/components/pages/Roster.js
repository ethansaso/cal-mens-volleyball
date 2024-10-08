import { Card, CardBody, CardImg } from "reactstrap";
import teamMembers from '../../data/teamMembers.json';
import Reveal from "../util/Reveal";
import { useEffect, useMemo, useState } from "react";
import TeamMemberSearchBar from "../baubles/TeamMemberSearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTreeCity, faSchool } from "@fortawesome/free-solid-svg-icons";

const Roster = () => {
    const [searchedTeamMemberName, setSearchedTeamMemberName] = useState('');
    const [selectedTeamMemberPosition, setSelectedTeamMemberPosition] = useState('All');
    const [selectedTeamMemberYear, setSelectedTeamMemberYear] = useState('All');

    const [filteredPlayers, setFilteredPlayers] = useState('');
    const [staffMembers, setStaffMembers] = useState('');

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const ignoredPositions = useMemo(() => ['head coach', 'coach', 'photographer'], []);
    const shortenedPositions = useMemo(() => ({"Libero": "L", "Outside Hitter": "OH", "Middle": "M", "Opposite Hitter": "OPP", "Setter": "S", "Middle Blocker": "MB", "Defensive Specialist": "DS"}), []);
    const shortenedYears = useMemo(() => ({"Freshman": "Fr.", "Sophomore": "So.", "Junior": "Jr.", "Senior": "Sr.", "Graduate Student": "Gr."}), []);

    // Attach listener to watch for resize and set in state
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

        // Sort staff by ordering of ignoredPositions (so coaches appear first)
        const staff = Object.keys(teamMembers).filter((key) => {
            const teamMember = teamMembers[key];
            return teamMember.positions?.every(position => ignoredPositions.includes(position.toLowerCase())) ?? false;
        }).sort((a, b) => {
            const positionA = teamMembers[a].positions[0].toLowerCase();
            const positionB = teamMembers[b].positions[0].toLowerCase();
            return ignoredPositions.indexOf(positionA) - ignoredPositions.indexOf(positionB);
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
    
    const filteredLength = Object.keys(filteredPlayers).length;
    const staffLength = Object.keys(staffMembers).length

    return (
        <>
            <header className="roster-header-container header-container">
                <h1 className="header-banner-content display-1">
                    Team Roster
                </h1>
            </header>
            <main className="main">
                <div className="player-container">
                    <div className="search-card">
                        <h1 className="search-title">Players</h1>
                        <TeamMemberSearchBar onSearch={handleSearch} teamMembers={teamMembers} ignoredPositions={ignoredPositions}/>
                    </div>
                    <div style={{backgroundColor: '#eee', borderRadius: '0.375rem'}}>
                        {Object.keys(filteredPlayers).length > 0 ? (
                            Object.keys(filteredPlayers).map((filename, index) => {
                                const imagePath = require(`../../assets/img/team-members/${filename}`);

                                let adjustedPlayerPositions = null;
                                let adjustedYear = null;

                                if (teamMembers[filename].positions) {
                                    adjustedPlayerPositions = teamMembers[filename].positions;
                                    adjustedPlayerPositions = adjustedPlayerPositions.map((position) => (windowWidth > 767 ? position : shortenedPositions[position] ?? position)).join('/');
                                    console.log(adjustedPlayerPositions, teamMembers[filename].name)
                                } else {
                                    adjustedPlayerPositions = 'Position unknown -- please contact staff'
                                }
                                
                                if (teamMembers[filename].year) {
                                    adjustedYear = windowWidth > 767 ? teamMembers[filename].year : shortenedYears[teamMembers[filename].year] ?? teamMembers[filename].year
                                } else {
                                    adjustedYear = 'Year unknown -- please contact staff'
                                };

                                return (
                                    <Reveal width='100%'>
                                    <Card className="team-member-card" key={filename} style={{borderRadius: ((index + 1) === filteredLength) ? '0 0 0.375rem 0.375rem' : '0', backgroundColor: (index % 2) ? '#eee' : '#fff'}}>
                                        <CardImg className="team-member-img" src={imagePath} alt={filename.replace(/\.[^/.]+$/, "")}/>
                                        <CardBody className="team-member-details">
                                            <div className="team-member-top">
                                                <div className="team-member-ul">
                                                    <div className="team-member-primary">
                                                        <div className="team-member-primary-top">
                                                            <p style={{fontWeight: '700', marginBottom: '5px'}}>{adjustedPlayerPositions}</p>
                                                            <p style={{marginLeft: '5px', marginBottom: '5px', marginRight: '-2px'}}>{teamMembers[filename].height ? "| " + teamMembers[filename].height : ""}</p>
                                                            <p className="team-member-year" style={{marginLeft: '5px', marginBottom: '5px', color: 'gray'}}>{windowWidth <= 767 && ("| " + adjustedYear)}</p>
                                                        </div>
                                                        <div className="team-member-primary-bottom">
                                                            <h2>
                                                                <span className="roster-number">{teamMembers[filename].number}</span>
                                                                <span className="player-name" style={{fontWeight: 'bold'}}>{teamMembers[filename].name ?? 'Name unknown -- please contact staff'}</span>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team-member-year">{windowWidth > 767 && (adjustedYear)}</div>
                                            </div>
                                            <div className="team-member-personal">
                                                {teamMembers[filename].hometown && (
                                                    <p className="team-member-personal-entry">
                                                        <FontAwesomeIcon icon={faTreeCity} fixedWidth style={{marginRight: '5px'}}/>
                                                        {teamMembers[filename].hometown}
                                                    </p>
                                                )}
                                                {teamMembers[filename].highschool && (
                                                    <p className="team-member-personal-entry" style={{marginBottom: 0}}>
                                                        <FontAwesomeIcon icon={faSchool} fixedWidth style={{marginRight: '5px'}}/>
                                                        {teamMembers[filename].highschool}
                                                    </p>
                                                )}
                                            </div>
                                        </CardBody>
                                    </Card>
                                    </Reveal>
                                );
                            })
                        ) : (
                            <h4 style={{marginTop: '10px', marginBottom: '60px'}}>No players found for these criteria.</h4>
                        )}
                    </div>
                </div>
                <div className="staff-card">
                    <h1 className="staff-title">Staff</h1>
                </div>
                {Object.keys(staffMembers).map((filename, index) => {
                    const imagePath = require(`../../assets/img/team-members/${filename}`);

                    return (
                        <Reveal width="100%">
                            <Card className="team-member-card" key={filename} style={{borderRadius: ((index + 1) === staffLength) ? '0 0 0.375rem 0.375rem' : '0', backgroundColor: ((index + filteredLength) % 2) ? '#eee' : '#fff'}}>
                                <CardImg className="team-member-img" src={imagePath} alt={filename.replace(/\.[^/.]+$/, "")}/>
                                <CardBody className="team-member-details">
                                    <div className="team-member-ul">
                                        <div className="team-member-primary">
                                            <p style={{fontWeight: '700', marginBottom: '5px'}}>{teamMembers[filename].positions?.join('/') ?? 'Position unknown -- please contact staff'}</p>
                                            <h2 style={{fontWeight: 'bold'}}>{teamMembers[filename].name ?? 'Name unknown -- please contact staff'}</h2>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Reveal>
                    );
                })}
            </main>
        </>
    )
}

export default Roster;
