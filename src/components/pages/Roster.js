import { Card } from "reactstrap";
import players from '../../data/players.json';

const Roster = () => {
    return (
        <div className="roster">
            {Object.keys(players).map((filename) => {
                const imagePath = require(`../../assets/img/players/${filename}`);

                return (
                    <Card className="player-card" key={filename}>
                        <img className="player-img" src={imagePath} alt={filename.replace(/\.[^/.]+$/, "")}/>
                        {console.log(imagePath)}
                        <div className="player-details">
                            <p>{players[filename].position}</p>
                            <h4>{players[filename].name}</h4>
                            <h6 style={{marginTop: 'auto'}}>{players[filename].year}</h6>
                        </div>
                    </Card>
                );
            })}
        </div>
    )
}

export default Roster;