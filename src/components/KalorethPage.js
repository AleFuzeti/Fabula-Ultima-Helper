import kalorethChars from "../data/kalorethChars";
import "../styles/char.css";

const KalorethPage = () => {
  const cards = [];
  for (let i = 0; i < kalorethChars.length; i++) {
    const char = kalorethChars[i];
    cards.push(
      <div className="character-card" key={i}>
        <div className="header">
          <div className="character-name">
          {char.name.toUpperCase()}</div>
          <div className="level-badge">{char.pronouns}</div>
        </div>
        <div className="main-content">
          {/* transform: rotate(270deg); */}
          <img
            src={char.image}
            alt={`${char.name} Character Portrait`}
            className="character-image"
          />
          <div className="character-info">
            <div className="traits-label">TRAITS</div>
            <div className="traits-content">
              <div className="trait-item">
                <span className="trait-label">IDENTITY:</span> {char.identity}
              </div>
              <div className="trait-item">
                <span className="trait-label">THEME:</span> {char.theme}
              </div>
              <div className="trait-item">
                <span className="trait-label">ORIGIN:</span> {char.origin}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{cards}</>;
};

export default KalorethPage;