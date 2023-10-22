import "../styles/styles.css";

interface Props {
  randomSymbo: string;
}

const Game: React.FC<Props> = ({ randomSymbo }) => {
  return (
    <div className="game">
      <span className="symbol">{randomSymbo}</span>
    </div>
  );
};

export default Game;
