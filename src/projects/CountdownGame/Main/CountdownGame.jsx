import TimerChallenge from "../timerChallenge/TimerChallenge";
import Player from "../Player/Player";
import "./CountdownGame.css";

function App() {
return (
    <div id="CountdownGameContainer">
      <div id="content">
        <header>
          <h1>
            The <em>Almost</em> Final Countdown
          </h1>
          <p>Stop the timer once you estimate that time is (almost) up</p>
        </header>
      <Player />
      <div id="challenges">

      <TimerChallenge title='Easy' targetTime={1} />
      <TimerChallenge title='Not easy' targetTime={5} />
      <TimerChallenge title='Getting tough' targetTime={10} />
      <TimerChallenge title='pros only' targetTime={15} />

      </div>
      </div>
    </div>
  );
}

export default App;
