
import { useState } from 'react';
import Tour from './components/Tour';
import { data } from './data';

const App = () => {
  const[tours,setTour]= useState(data);
  function removeTour(id){
    const newTours = tours.filter(tour=> tour.id !==id);
    setTour(newTours);
  }
 
  if(tours.length ===0){
    return (
      <div className='refresh'>
        <h2 className='text-4xl text-center text-blue-600'>No Tour Found</h2>
        <button onClick={()=>setTour(data)} className='border px-5 py-2 border-red-600'>Refresh</button>
      </div>
    )
  }
  return (
    <div>
  
   <Tour tours={tours} removeTour={removeTour}></Tour>
    </div>
  )
}

export default App
