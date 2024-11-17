
import PlayerList from "./PlayerList";
import './index.css'; 

const App = () => {
  return (
    <div className="bg-gradient-to-l from-blue-800 to-red-800 text-white p-6">
      <h1 className="text-3xl font-bold text-center text-black mb-10">
        THE BEST TEAM IN 2009 : FC BARCELONE
      </h1>
      <PlayerList />
    </div>
  );
};

export default App;
