import React,{ useState,useEffect } from "react";
import { Bar } from 'react-chartjs-2'; 
import { Slider } from "@material-ui/core";

const App = () => {
    const [val,setVal] = useState(12)
    const updateRange=(e,data)=>{
        setVal(data)
    }
    const [arr,setArr] = useState([])
    useEffect(() => {

      fetch('https://hidden-dusk-28735.herokuapp.com/')
              .then(res=>res.json())
              .then(json=>{
                console.log(json)
                const data = json.data
                console.log(data)
                setArr(data)
              })
              //.then((valarr) => {
              //  const newarr = valarr.map((product) => {
              //      return product.data
              //  })
              //  setArr(newarr)
              //})
    },[])
    console.log(arr)
    return (<div>
        <ul>
        <li>Hi</li>
        <li>Bye</li>
        <li>Friend</li>
        </ul>

        <p>Slider + Chart testing</p>
        <div style={{height:"30vh"}}>
        <Bar 
            data={{
                labels: ['Red','Blue','Yellow','Green','Purple','Orange'],
                datasets: [{
                    label: '# of votes',
                    data: [val,19,3,5,2,3],
                    backgroundColor: ['red','blue','yellow','green','purple','orange']
                },
                ],
            }}
            height={400}
            width={600}
            options={{maintainAspectRatio: false,}}
        />
        <div style={{textAlign:"center",width:"70vw"}}>
        <Slider value={val} onChange={updateRange}/>
        </div>
        </div>
        <br></br>
        <p>Data import from <a href="https://hidden-dusk-28735.herokuapp.com/">https://hidden-dusk-28735.herokuapp.com/</a></p>
        <div style={{height:"30vh"}}>
        <Bar
            data={{
                labels: ['Red','Blue','Yellow','Green','Purple','Orange'],
                datasets: [{
                    label: '# of votes',
                    data: arr,
                    backgroundColor: ['red','blue','yellow','green','purple','orange']
                },
                ],
            }}
            height={200}
            width={600}
            options={{maintainAspectRatio: false,}}
        />
        </div>

        </div>)
}

export default App
