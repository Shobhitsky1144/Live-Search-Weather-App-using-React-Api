import React, { useEffect, useState } from 'react';

//`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=83f89d90353a7401ad33bc5cf4892337`

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState(" Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=83f89d90353a7401ad33bc5cf4892337`
            const response =await fetch(url);

            const resJson = await response.json();
            //   console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])
    return (
        <>   <h1 className="weatherTop">Weather App</h1>
            <div className="box">
             
                <div className="inputData">
                    <input type="search" 
                    value={search}
                    className="inputField"
                        onChange={(event) => {
                            setSearch(event.target.value);
                        }}
                    />
                </div>

                {!city ? (
                    <p>No Data Found </p>) :
                    (
            <div>

            <div className="info">
            <h2 className="loaction">
            <i className="fa fa-street-view" ></i>{search}
            </h2>
            <h1 className="temp">
               {city.temp}°Cel
            </h1>
            <h3 className="tempmin_max">
             Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
            </h3>
            
        </div>
        

        <div className="waveone">

        </div>
        <div className="wavetwo">
            
         </div>
         <div className="wavethree">
            
        </div>
        </div>
        )}


        </div>
        </>
    );



}

export default Tempapp;
