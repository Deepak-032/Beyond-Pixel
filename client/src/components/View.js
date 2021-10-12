import React from 'react'
import { useParams } from 'react-router-dom'

function View() {
    const { id } = useParams()
    // const view = [[1, 2, 3], ['deepak', 'shivam'], ['deepika', 'diksha', 'mahi']]
    const obj = {
        arr: [23, 45, 67, 1],
        won: ["you won Deepak congo!!!!!!!!!!!!!!"]
    }
    console.log(id)
    console.log(typeof id)
    console.log(id.split(' '))
    return (
        <div>
            {/* {id }<br/>
            {typeof id}<br/>
            {id.toString().split(' ').join('_')} */}
            param is: {id}
            <br />
            {/* {id>=view.length?"sorry url is not correct":view[id].map(item => <h4>{item}</h4>)} */}
            {obj[id].map(item => <h4>{item}</h4>)}
        </div>
    )
}

export default View
