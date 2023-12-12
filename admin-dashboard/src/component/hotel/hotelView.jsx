import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RoomList from '../room/roomTable';

function HotelView() {
    const params = useParams();
    console.log("User View",params)
    const [HotelList, setUserList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        //On Load
        getUsers();
        console.log("welcome to userview");
    }, []);

    let getUsers = async () => {
        try {
            const user = await axios.get(`http://localhost:8000/api/hotel/find/:id${params.id}`,{withCredentials:true});
            // console.log(user);
            setUserList(user.data);
            // console.log(userList);
            setLoading(false);
        } catch (error) {
            console.log(error);
            // setLoading(false);
        }
    }

    return (
        <>
            <h4>View Hotel</h4>

            <div>Hotel View - {params.id}</div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Hotel-View</h6>
                </div>
                <div className="card-body">
                    {
                        isLoading ? <img src='https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif' />
                            :
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Type</th>
                                            <th>City</th>
                                            <th>Address</th>
                                            <th>Distance</th>
                                            <th>Picture</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Rating</th>
                                            <th>CheapestPrice</th>
                                            <th>Featured</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Type</th>
                                            <th>City</th>
                                            <th>Address</th>
                                            <th>Distance</th>
                                            <th>Picture</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Rating</th>
                                            <th>CheapestPrice</th>
                                            <th>Featured</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <td>{HotelList.id}</td>
                                            <td> {HotelList.name} </td>
                                            <td>{HotelList.type}</td>
                                            <td>{HotelList.city}</td>
                                            <td>{HotelList.address}</td>
                                            <td>{HotelList.distance}</td>
                                            <td>{HotelList.photos}</td>
                                            <td>{HotelList.title}</td>
                                            <td>{HotelList.desc}</td>
                                            <td>{HotelList.rating}</td>
                                            <td>{HotelList.cheapestPrice}</td>
                                            <td>{HotelList.featured}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    }
                </div>
            </div>

            <RoomList/>
        </>

    )
}

export default HotelView
