// src/App.js

import React from 'react';
import UserProfile from './UserProfile';

function App() {
  const user = {
    name: 'Laksitha M',
    bio: 'Photographer and nature lover. Always exploring new places and capturing moments.',
    profilePic: 'https://tse3.mm.bing.net/th?id=OIP.jbnncrDk7xpWzM9r_FfESwHaHa&pid=Api&P=0&h=180',
    location: 'Perundurai,TamilNadu',
    hobbies: ['Hiking', 'Photography', 'Traveling', 'Reading'],
    background: 'https://tse1.mm.bing.net/th?id=OIP.h108vcoqZOzNYRA3iUl_igHaEK&pid=Api&P=0&h=180', // Example background image URL
    email: 'laksitha1104@gmail.com',
    phone: '7010764343',
    socialLinks: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/laksitha-m-24a38a259/' },
    ],
    recentActivities: [
      'Published a new photo series on nature.',
      'Started a travel blog.',
      'Won the National Photography Award.',
      'Exploring Wildlife Activities.'
    ]
  };

  return (
    <div className="App">
      <UserProfile 
        name={user.name}
        bio={user.bio}
        profilePic={user.profilePic}
        location={user.location}
        hobbies={user.hobbies}
        background={user.background}
        email={user.email}
        phone={user.phone}
        socialLinks={user.socialLinks}
        recentActivities={user.recentActivities}
      />
    </div>
  );
}

export default App;
