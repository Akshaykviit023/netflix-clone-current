import React from 'react'
import './ProfileScreen.css'
import Nav from "../Nav";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { getAuth, signOut } from "firebase/auth";

const ProfileScreen = () => {
    const user=useSelector(selectUser);
    const auth = getAuth();
  return (
    <div className='profileScreen'>
        <Nav />
        <div className="background__gradient"/>
        <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
            <div className="profile">
            <img 
            src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png' 
            alt='Not available' 
            />
            <div className="profile__status">
            <h2>{user.email}</h2>
                <button className='profileScreen__signOut' onClick={()=>signOut(auth)}>SIGN OUT</button>
            </div>
            </div>
       
           
            <div className="profileScreen__details">
                
                <div className="profileScreen__plans">
                    <div className='standard__plan'>
                        <div className="plan__contents">
                        <h1>STANDARD</h1>
                        <p>Watch on 1 Screen at a time in, Standard Definition.</p>
                        <p className='price'>&#8377;500<sub> / month</sub></p>
                        <ul>
                            <li>Unlimited Streaming</li>
                            <li>No Ads</li>
                            <li>Cancel anytime</li>
                        </ul>
                        <button>Subscribe</button>
                        </div>
                        
                    </div>
                    <div className='HD__plan'>
                    <div className="plan__contents">
                        <h1>HD</h1>
                        <p>Watch on 2 Screens at a time, HD available.</p>
                        <p className='price'>&#8377;650<sub> / month</sub></p>
                        <ul>
                        <li>Unlimited Streaming</li>
                            <li>No Ads</li>
                            <li>HD available</li>
                            <li>Cancel anytime</li>
                        </ul>
                        <button>Subscribe</button>
                        </div>
                    </div>
                    <div className='ultraHD__plan'>
                    <div className="plan__contents">
                        <h1>ULTRA HD</h1>
                        <p>Watch on 4 Screens at a time, Ultra HD & HD available.</p>
                        <p className='price'>&#8377;800<sub> / month</sub></p>
                        <ul>
                        <li>Unlimited Streaming</li>
                            <li>No Ads</li>
                            <li>Ultra HD & HD available</li>
                            <li>Cancel anytime</li>
                        </ul>
                        <button>Subscribe</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProfileScreen