import Player from "./Card";
import { players } from "./players";
export default () => {
  return (
    <div className="grid grid-cols-4 gap-10 p-8 mt-8 bg-gradient-to-l from-blue-800 to-red-800 ">
      {players.length > 0 ? (
        players.map((player) => (
          <Player
            name={player.name}
            nationality={player.nationality}
            Number={player.Number}
            age={player.age}
            image={player.image}
            Poste={player.Poste}
          />
        ))
      ) : (
        <p className="text-white text-center text-xl font-bold">
          No players available.
        </p>
      )}
    </div>
  );
};
