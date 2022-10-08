import React from 'react'
import "./card.css"
import img from '../../assets/landing.png'
const Card = (props) => {
  const {data}=props;
    return (
        <>
            {
                data.map((data, key) => {
                    return (
                        <div className='card' key={data._id}>
                            <div className="header-card">
                                <div className='name-holder'>
                                    <div className="name">{data.name}</div>
                                    <div className="location-container">{data.location}</div>
                                </div>
                                <span className="dots">
                                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="image-container">
                                <img src={img}
                                    alt='post'
                                    width={'100%'}
                                    height={'100%'}
                                />
                            </div>
                            <div className="card-action">
                                <span className="heart">
                                <i className="fa-regular fa-heart" id='not-liked' style={{display:'inline'}}></i>
                                <i className="fa-solid fa-heart" style={{display:'none'}} id ='liked-icon'></i>
                                </span>
                                <span className="plane">
                                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                </span>
                                <span className="date">
                                    {data.date}
                                </span>
                            </div>
                          
                            <section className="likes">
                                {data.likes} likes
                            </section>
                            <section className="description">
                                {data.description}

                            </section>

                        </div>
                    )
                })

            }

        </>
    )
}
export default Card