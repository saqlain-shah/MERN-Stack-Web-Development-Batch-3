
import Dashboard from './component/Dashboard';
//import Sidebar from './component/Sidebar';
//import Topbar from './component/Topbar';
import Portal from './component/Portal';
import "./component/sb-admin-2.min.css";

import { Route, Routes } from 'react-router-dom';
import Login from './component/Auth/Login';
import Register from './component/auth/Register';

import UserCreate from "./component/user/userCreate"
import UserUpdate from "./component/user/userUpdate"
import UserDelete from "./component/user/userDelete"
import UserView from "./component/user/UserView"
import UserList from "./component/user/userTable"

import HotelCreate from "./component/hotel/hotelCreate"
import HotelUpdate from "./component/hotel/hotelUpdate"
import HotelDelete from "./component/hotel/hotelDelete"
import HotelView from "./component/hotel/hotelView"
import HotelList from "./component/hotel/hotelTable"

import RoomCreate from "./component/room/roomCreate"
import RoomUpdate from "./component/room/roomUpdate"
import RoomDelete from "./component/room/roomDelete"
import RoomView from "./component/room/roomView"
import RoomList from "./component/room/roomTable"

import BookingCreate from "./component/booking/bookingCreate"
import BookingUpdate from "./component/booking/bookingUpdate"
import BookingDelete from "./component/booking/bookingDelete"
import BookingView from "./component/booking/bookingView"
import BookingList from "./component/booking/bookingTable"

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Portal />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='user-create' element={<UserCreate />} />
        <Route path='user-list' element={<UserList />} />
        <Route path='user-view/:id' element={<UserView />} />
        <Route path='user-edit/:id' element={<UserUpdate />} />
        <Route path='user-delete/:id' element={<UserDelete />} />

        <Route path='hotel-create' element={<HotelCreate />} />
        <Route path='hotel-list' element={<HotelList />} />
        <Route path='hotel-view/:id' element={<HotelView />} />
        <Route path='hotel-edit/:id' element={<HotelUpdate />} />
        <Route path='hotel-delete/:id' element={<HotelDelete />} />

        <Route path='room-create' element={<RoomCreate />} />
        <Route path='room-list' element={<RoomList />} />
        <Route path='room-view/:id' element={<RoomView />} />
        <Route path='room-edit/:id' element={<RoomUpdate />} />
        <Route path='room-delete/:id' element={<RoomDelete />} />

        <Route path='booking-create' element={<BookingCreate />} />
        <Route path='booking-list' element={<BookingList />} />
        <Route path='booking-view/:id' element={<BookingView />} />
        <Route path='booking-edit/:id' element={<BookingUpdate />} />
        <Route path='booking-delete/:id' element={<BookingDelete />} />
      </Route>
    </Routes>
  );
}

export default App;
