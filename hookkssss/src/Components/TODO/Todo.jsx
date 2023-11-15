import React, { useEffect, useState } from 'react'


    function DataFetchingComponent(){
        const[data,setData]=useState([]);
        useEffect(()=>{
            const fetchData=async()=>{
                try{
                    const response=await fetch('https://jsonplaceholder.typicode.com/todos');
                    const result=await response.json();
                    setData(result);

                }
                catch(error){
                    console.log('Error fetcthing data:',error);
                }
            }; 
            fetchData();
            return()=>{
                console.log('component is unmounted.Cleanup here is needed.');
            };
        },[]);
    
  return (
    <div>
      <h2>Fetched Data:</h2>
      <ul type="none">
        {data.map(item=>(

            <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default DataFetchingComponent;
