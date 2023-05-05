import React, {useState} from 'react'

const Tab = () => {
    let tab1 = {
        Label: "Tab 1",
        content: "Tab 1 content showing here",
    }
    let tab2 = {
        Label: "Tab 2",
        content: "Tab 2 content showing here",
    }
    let tab3 = {
        Label: "Tab 3",
        content: "Tab 3 content showing here",
    }

    const [tabDisplay, setTabDisplay] = useState('') 

    const listOfTabs = [tab1, tab2, tab3]
    console.log(tabDisplay)
    const display = (index) => {
        console.log(index)
        setTabDisplay(index)
        }



  return (
    <div>
        <div>
            {
                listOfTabs.map((t, i) => {
                    return (
                        <div >
                            <button onClick={() => display(i)}>{t.Label}</button>
                        </div>
                    )
                })
            }
        </div>
        <div>
            <p>{listOfTabs[tabDisplay].content}</p>
        </div>
    </div>
  )
}

export default Tab