import React, { useRef } from 'react';

const Topbar = ({onSearch}) => {
    const inputRef = useRef()

    const handleSearch = () => {
        const value = inputRef.current.value
        onSearch(value)
        console.log(value)
    }

    const onClick = () => {
        handleSearch();
    }

    const onKeyPress = (e) => {
        if(e.key==='Enter'){
            handleSearch();
            
        }
    }   

    

    return (
        <div className="topbar">
            <div className="home">
                <a href=""><h1>Youtube</h1></a>
            </div>
            <div className="search" >
                <input ref={inputRef} type="text" onKeyPress={onKeyPress} />
                <button onClick={onClick}>Go</button>
            </div>
            
        </div>
    );
}

export default Topbar;