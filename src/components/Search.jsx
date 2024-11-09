import { useState } from "react"
import { useDispatch } from "react-redux"

function Search() {
    const dispatch = useDispatch()
    const searchChange = (value) => {
        dispatch({
            type: 'CHANGE',
            value: value
        })
    }

    const [tempInput, setTempInput] = useState('')
    
    const btnClick = () => {
        searchChange((tempInput !== '' ? tempInput : 'spongebob'))
    }

    const inputText = (e) => {
        setTempInput(e.target.value)
    }

    return (
        <form className="d-flex" role="search">
            <div className="input-group">
                <input className="form-control" type="search" placeholder="Search movie title..." aria-label="Search" onInput={inputText}  />
                <button className="btn btn-success" type="button" onClick={btnClick}>Search</button>
            </div>
        </form>
    )
}

export default Search