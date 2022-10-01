import React, { useState, useEffect } from 'react'

export default function News() {

    const [users, setUsers] = useState([]);
    const getUsers = async()=>{
        // const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9b6c6123c5424ddfb36b322c30e5902c');
        // setUsers(await response.json());
        //console.log(data);
        const  url="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9b6c6123c5424ddfb36b322c30e5902c";
        const data = await fetch(url);
        const parsedData = await data.json()
        console.log(parsedData);
        setUsers({articles:parsedData.articles})
    }
    // useEffect(()=>{
    //     getUsers();
    // },[])
  return (
    <div>
        <div className="container mt-5" >
            <div className="row">

            {
                    articles.map((element)=> {
                        
                        return(

                           
                                <div className="col-10 col-md-4 mt-5" key={element.id}>
                                <div className="card" >
                                <img src={element.url} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">{element.title}</h5>
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
