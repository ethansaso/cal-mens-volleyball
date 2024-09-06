import { useEffect, useState } from 'react';
import { ButtonDropdown, Col, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input, InputGroup, Row } from 'reactstrap'

const TeamMemberSearchBar = ({ onSearch, teamMembers, ignoredPositions }) => {
    const [teamMemberName, setTeamMemberName] = useState('');
    const [teamMemberPosition, setTeamMemberPosition] = useState('All');
    const [teamMemberYear, setTeamMemberYear] = useState('All');

    const [positionDropdownOpen, setPositionDropdownOpen] = useState(false);
    const [yearDropdownOpen, setYearDropdownOpen] = useState(false);

    const [teamMemberPossiblePositions, setTeamMemberPossiblePositions] = useState(false)
    const [teamMemberPossibleYears, setTeamMemberPossibleYears] = useState(false)

    const togglePositionDropdown = () => setPositionDropdownOpen(!positionDropdownOpen);
    const toggleYearDropdown = () => setYearDropdownOpen(!yearDropdownOpen);

    useEffect(() => {
        onSearch(teamMemberName, teamMemberPosition, teamMemberYear);
    }, [onSearch, teamMemberName, teamMemberPosition, teamMemberYear]);

    useEffect(() => {
        // Filter team members whose positions aren't in ignoredPositions
        const validTeamMembers = Object.keys(teamMembers).filter(key => {
            const positions = teamMembers[key].positions;
            return !positions?.some(position => ignoredPositions.includes(position.toLowerCase())) ?? false;
        });
    
        // Extract valid positions and years
        const filteredPositions = validTeamMembers
            .map(key => teamMembers[key].positions)
            .flat()
            .filter((value, index, self) => self.indexOf(value) === index) // Remove duplicates
            .filter(position => position && !ignoredPositions.includes(position.toLowerCase()));
    
        const filteredYears = validTeamMembers
            .map(key => teamMembers[key].year)
            .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates
    
        setTeamMemberPossiblePositions(filteredPositions);
        setTeamMemberPossibleYears(filteredYears);
    
    }, [ignoredPositions, teamMembers]);
    

    return (
        <Form inline>
            <Row>
                <Col xs="12" sm="12" md="6">
                    <FormGroup>
                        <InputGroup>
                        <Input
                            type="text"
                            placeholder="Search by name..."
                            value={teamMemberName}
                            onChange={(e) => setTeamMemberName(e.target.value)}
                        />
                        </InputGroup>
                    </FormGroup>
                </Col>
                <Col xs="12" sm="6" md="3">
                    <FormGroup className="team-member-search-dropdown">
                        <ButtonDropdown className="team-member-search-dropdown-button" isOpen={positionDropdownOpen} toggle={togglePositionDropdown}>
                            <DropdownToggle color="warning" caret>
                                Position: {teamMemberPosition}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => setTeamMemberPosition('All')}>All</DropdownItem>
                                {teamMemberPossiblePositions && teamMemberPossiblePositions.map(position => (
                                    <DropdownItem key={position} onClick={() => setTeamMemberPosition(position)}>
                                        {position}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </ButtonDropdown>
                    </FormGroup>
                </Col>
                <Col xs="12" sm="6" md="3">
                    <FormGroup className="team-member-search-dropdown">
                        <ButtonDropdown className="team-member-search-dropdown-button" isOpen={yearDropdownOpen} toggle={toggleYearDropdown}>
                            <DropdownToggle color="warning" caret>
                                Year: {teamMemberYear}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => setTeamMemberYear('All')}>All</DropdownItem>
                                {teamMemberPossibleYears && teamMemberPossibleYears.map(year => (
                                    <DropdownItem key={year} onClick={() => setTeamMemberYear(year)}>
                                        {year}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </ButtonDropdown>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}

export default TeamMemberSearchBar;