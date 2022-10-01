import React, { useState, useEffect } from 'react'

export default function Api() {

    const [users, setUsers] = useState([]);

    const getUsers = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        setUsers(await response.json());
        //console.log(data);
    }
    useEffect(()=>{
        getUsers();
    },[])
  return (
    <div>
        <div className="container mt-5" >
            <div className="row">

            {
                    users.map((element)=> {
                        const {id, title, url, thumbnailUrl} = element;
                        return(

                           
                                <div className="col-10 col-md-4 mt-5" key={url}>
                                <div className="card" >
                                <img src={url} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                </div>
                                </div>
                           
                        )
                    })
                }
             
            </div>
        </div>
    </div>
  )
}
