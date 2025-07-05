import gameLogoImg from "../../../assets/TicTacToeImg/game-logo.png";
function Header() {
  return (
    <header>
      <img src={gameLogoImg} alt="Hand-drawn tic tac toe game board" />
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
}

export default Header;
