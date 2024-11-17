export default (props) => {
    return (
      <div
        className="group relative w-full h-80 bg-gradient-to-l from-red-700 to-blue-700 rounded-lg overflow-hidden shadow-lg transform transition-all  hover:scale-105 
       
        "
      >
        
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-48 object-cover rounded-t-lg "
            
        
        />
        
        {/* Player  */}
        <div className=" inset-x-0 bottom-0  p-4 text-black">
          <div className="text-center">

            
            <div className="mt-2 flex justify-center space-x-4">
              <div
                className="text-sm"
              >
                <span className="font-bold"># {props.Number}</span>
              </div>
              <div
                className="text-sm" 
              >
                <span className="font-bold">{props.nationality}</span>
              </div>
            </div>
          </div>
  
          
          <div className="mt-2 text-black  text-bold flex justify-between">
            <div>
              <h2>name: {props.name}</h2>
              <h2>Age: {props.age}</h2>
              
              <h2>Poste: {props.Poste}</h2>
            </div>
           
          </div>
        </div>
  
       
       
      </div>
    );
  };
  