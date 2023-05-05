import React, {useState} from 'react'


const Box = () => {
    const [color, setColor] = useState ("")
    const [height, setHeight] = useState ("")
    const [width, setWidth] = useState ("")

    let [listOfColors, setListOfColors] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()


        let colorObj = {color, height, width}
        setListOfColors([...listOfColors, colorObj])
        
        
        const colorI = document.getElementById('colorI')
        colorI.value = "";
        const heightI = document.getElementById('heightI')
        heightI.value = "";
        const widthI = document.getElementById('widthI')
        widthI.value = "";
    }




  return (
    <div>
        <form onSubmit={submitHandler}>
            <label>Color:</label>
            <br />
            <input type="text" id='colorI' onChange={ (e) => setColor(e.target.value)}  />
            <br />
            <label>Height:</label>
            <br />
            <input type="number" id='heightI' onChange={ (e) => setHeight(e.target.value + "px")}  />
            <br />
            <label>Width:</label>
            <br />
            <input type="number" id='widthI' onChange={ (e) => setWidth(e.target.value + "px")}  />
            <br />
            <button type="submit">Add</button>
        </form>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", flexWrap: "wrap"}}>
            {
                listOfColors.map((c,i) => {
                    return (
                        <div style={{backgroundColor: c.color, height: c.height, width: c.width}}></div>
                    )
                })
            }
        </div>
    </div>
  )
}



export default Box