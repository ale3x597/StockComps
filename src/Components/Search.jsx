import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import { SiBmw, SiAirbnb, SiAmazon, SiAmd, SiApple, SiTesla, SiGoogle, SiFerrari, SiSpotify, SiSpacex, SiLogitech, SiLamborghini} from 'react-icons/si'
import { IconContext } from "react-icons";

function Search() {

    const [search, setSearch] = useState('')

    const handleStockChange =(e)=>{
      search.toLowerCase()
        setSearch(e.target.value)
    }

  return (
    <Card >
      <IconContext.Provider
      value={{  size: '50px' }}
    >
      <ul ><SiBmw/> <SiAirbnb/> <SiAmazon/> <SiAmd/> <SiApple/> <SiTesla/> <SiGoogle/> <SiFerrari/> <SiSpotify/><SiLamborghini/><SiLogitech/> </ul>
      </IconContext.Provider>
      <form>
        <h2>Search Your favorite Stock!</h2>
        <div className="input-group">
            <input onChange={handleStockChange} type="text" placeholder='Search Your Stock' value={search}></input>
            <button type="submit">Search</button>
        </div>
      </form>
    </Card>
  )
}

export default Search
