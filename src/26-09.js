/*import React from "react";
const App=()=>{
    return(
        <div>
            <MyFunction/>
            <NewComponent/>
        </div>
    );
}
const MyFunction=()=>{
    return(
    <h1>This is my first Functional component</h1>
    );
}
const NewComponent=()=>{
    return(
        <div>
            <p>This is second Component</p>
            <h1>second Component</h1>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Grapes</li>
            </ul>
        </div>
    );
}
export default App;*/


/*import React from "react";
const App=()=>{
    return(
        <div>
            <Function/>
            <Component/>
            <Para/>
            <Paragraph/>
        </div>
    );
}

const Function=()=>{
    return(
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Login</li>
            </ul>

        </div>
    );
}

const Component=()=>{
    return(
        <h1>Home</h1>
    );
}
const Para=()=>{
    return(
        <p>Home Paragraph</p>
    );
}

const Paragraph=()=>{
    return(
        <p>Paragraph</p>
    )
}

export default App;*/

/*import React from "react";

const App=()=>{
    return(
        <div>
            <MyFunction title="MyFunction" thisis="first component" flag={false}>
                <h1>This is cild Head</h1>
                <p>This is child Para</p>
            </MyFunction>
            <NewComponent falg={true}/>
        </div>
    );
}
const MyFunction=({flag})=>{
        if(flag){
        return (<ul>
                <li>apple</li>
                <li>banana</li>
            </ul>
        );
        }else{
            return(
            <ul>
            <li>grapes</li>
            <li>grapes</li>
        </ul>
        );
            }
    }

const NewComponent=({flag})=>{
    return(flag?<h1>Hello</h1>:<p>This is second Component</p>);
}

export default App;*/

/*import React from "react";
const App=()=>{
    const grocery=['Apple','Banana','Grapes','Mango'];
    const cars=['Benz','RR','Supra','BMW'];
    return(
    <div>
     <MyFunction items={grocery}/>
    <Cars items={cars}/>
    </div>
    );
}
const MyFunction=({items})=>{
    return(
        <ul>
            {items.map((item)=><li key={item}>{item}</li>)}
        </ul>
    );
}

const Cars=({items})=>{
    return(
        <ol>
            {items.map((item)=><li key={item}>{item}</li>)}
        </ol>
    )
}
export default App;*/

/*import React from "react";
import './26-09.css';

function App(){
    return(
       
<div className="container">

        <div>
            <table>
                <tbody>
                    <tr>
                        <td className="mc">

                      
       Cars and Motercycles</td>
        </tr>
        <tr><td className="c">
    Cars
        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br/>
        <div>
            <p>A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.[1][2]

French inventor Nicolas-Joseph Cugnot built the first steam-powered road vehicle in 1769, while French-born Swiss inventor François Isaac de Rivaz designed and constructed the first internal combustion-powered automobile in 1808. The modern car—a practical, marketable automobile for everyday use—was invented in 1886, when German inventor Carl Benz patented his Benz Patent-Motorwagen. Commercial cars became widely available during the 20th century. One of the first cars affordable by the masses was the 1908 Model T, an American car manufactured by the Ford Motor Company. Cars were rapidly adopted in the US, where they replaced horse-drawn carriages.[3] In Europe and other parts of the world, demand for automobiles did not increase until after World War II.[4] The car is considered an essential part of the developed economy.</p>
<p>Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex. These include rear-reversing cameras, air conditioning, navigation systems, and in-car entertainment. Most cars in use in the early 2020s are propelled by an internal combustion engine, fuelled by the combustion of fossil fuels. Electric cars, which were invented early in the history of the car, became commercially available in the 2000s and are predicted to cost less to buy than petrol-driven cars before 2025.[5][6] The transition from fossil fuels to electric cars features prominently in most climate change mitigation scenarios,[7] such as Project Drawdown's 100 actionable solutions for climate change.[8]</p>
        </div>
        <br/>
        <br/>
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className="mc1">Motercycles</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br/>
        <div>
            <p>A motorcycle (motorbike, bike, or, if three-wheeled, a trike) is a two or three-wheeled motor vehicle steered by a handlebar from a saddle-style seat.[1][2][3]Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport (including racing), and off-road riding. Motorcycling is riding a motorcycle and being involved in other related social activities such as joining a motorcycle club and attending motorcycle rallies.</p>
            <p>The 1885 Daimler Reitwagen made by Gottlieb Daimler and Wilhelm Maybach in Germany was the first internal combustion, petroleum-fueled motorcycle. In 1894, Hildebrand & Wolfmüller became the first series production motorcycle.[4][5]

Globally, motorcycles are comparably popular to cars as a method of transport. In 2021, approximately 58.6 million new motorcycles were sold around the world,[6] fewer than the 66.7 million cars sold over the same period.[7]</p>
        
        </div>
        <br/>
        <br/>
        <div>
        <table>
                <tbody>
                    <tr>
                        <td className="mc1">Motercycles</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br/>
        <ul>
            <li>Scooters</li>
            <li>Sport Bikes</li>
            <li>Cruiser</li>
        </ul>
        <br/>
        <br/>
        <div>
        <table>
                <tbody>
                    <tr>
                        <td className="mc1">Cars</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <ul>
                <li>Sports Sedan</li>
                <li>Supercar</li>
                <li>Station Wagon</li>
            </ul>
            <br/>
            <br/>
            <div>
            <a href="back" >back</a>
            <br/>
            <br/>
</div>
</div>
    );
}


    
export default App;*/

import React from "react";
import './26-09.css';


const App=()=>{
    const cars=['Sports','Supercar','Station Wagon'];
    const motorcycle=['Sports Bike','Crusier','Scooter'];
return(
    
<div>
<MyFunction/>
<MotorCycle items={motorcycle}/>
    <Cars models={cars}/>
    <Tag/>
</div>
);
}
const MyFunction=()=>{
    return(
        <div className="container">

        <div>
            <table>
                <tbody>
                    <tr>
                        <td className="mc">

                      
       Cars and Motercycles</td>
        </tr>
        <tr><td className="c">
    Cars
        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br/>
        <div>
            <p>A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.[1][2]

French inventor Nicolas-Joseph Cugnot built the first steam-powered road vehicle in 1769, while French-born Swiss inventor François Isaac de Rivaz designed and constructed the first internal combustion-powered automobile in 1808. The modern car—a practical, marketable automobile for everyday use—was invented in 1886, when German inventor Carl Benz patented his Benz Patent-Motorwagen. Commercial cars became widely available during the 20th century. One of the first cars affordable by the masses was the 1908 Model T, an American car manufactured by the Ford Motor Company. Cars were rapidly adopted in the US, where they replaced horse-drawn carriages.[3] In Europe and other parts of the world, demand for automobiles did not increase until after World War II.[4] The car is considered an essential part of the developed economy.</p>
<p>Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex. These include rear-reversing cameras, air conditioning, navigation systems, and in-car entertainment. Most cars in use in the early 2020s are propelled by an internal combustion engine, fuelled by the combustion of fossil fuels. Electric cars, which were invented early in the history of the car, became commercially available in the 2000s and are predicted to cost less to buy than petrol-driven cars before 2025.[5][6] The transition from fossil fuels to electric cars features prominently in most climate change mitigation scenarios,[7] such as Project Drawdown's 100 actionable solutions for climate change.[8]</p>
        </div>
        <br/>
        <br/>
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className="mc1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Motercycles&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br/>
        <div>
            <p>A motorcycle (motorbike, bike, or, if three-wheeled, a trike) is a two or three-wheeled motor vehicle steered by a handlebar from a saddle-style seat.[1][2][3]Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport (including racing), and off-road riding. Motorcycling is riding a motorcycle and being involved in other related social activities such as joining a motorcycle club and attending motorcycle rallies.</p>
            <p>The 1885 Daimler Reitwagen made by Gottlieb Daimler and Wilhelm Maybach in Germany was the first internal combustion, petroleum-fueled motorcycle. In 1894, Hildebrand & Wolfmüller became the first series production motorcycle.[4][5]

Globally, motorcycles are comparably popular to cars as a method of transport. In 2021, approximately 58.6 million new motorcycles were sold around the world,[6] fewer than the 66.7 million cars sold over the same period.[7]</p>
        
        </div>
        <br/>
        <br/>
        </div>
    );
}
const MotorCycle=({items})=>{
return(
    <div>
        <table>
                <tbody>
                    <tr>
                        <td className="mc1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Motercycles&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    </tr>
                </tbody>
            </table>
    <ul>
        {items.map((item)=><li key={item}>{item}</li>)}
    </ul>
    </div>
);
}
const Cars=({models})=>{
    return(
        <div>
        <table>
                <tbody>
                    <tr>
                        <td className="c">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cars&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    </tr>
                </tbody>
            </table>
    <ul>
        {models.map((model)=><li key={model}>{model}</li>)}
    </ul>
    </div>
    );
}
const Tag=()=>{
    return(
<div>
    <a href="back" >back</a>
</div>
    )
}
export default App;