import data from './../data.json';
import { useState } from 'react';

function MyProjects() {

const [index, setindex] = useState(0);


const shoeList = data.map((data) => {
    return (
        <div key={index}>
            <h2>My climbing Shoes</h2>
            <ul>
                <li>{data.name}</li>
                <li>{data.myCost}</li>
                <li>{data.description}</li>
                <img src={data.img} alt={"shoes"}/>
            </ul>
        </div>
    )
});

const shoe = shoeList[index]

function handleClick() {
    if (index < data.length-1)
    {
        setindex(index+1);
    } else {
        setindex(0);
    }
}

return (
    
    <div>
        <button onClick={handleClick}>Next</button>
        <p>{shoe}</p>
    </div>
)

};

export default MyProjects;


// const listItem = oceans.map(ocean => 
//     <div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
//        <h1>{ocean.name}</h1>
//        <h2>Fun Facts</h2>
//        <ol>
//           <li>{ocean.fact1}</li>
//           <li>{ocean.fact2}</li>
//           <li>{ocean.fact3}</li>
//        </ol>
//        <Button />
//        <img src={ocean.image} alt={ocean.name} className="img"/>
//  </div>
//     );