import React from 'react'
import Card from './components/Card.jsx'



const App = () => {


  const users = [
    {
      fullName: "Aarav Sharma",
      title: "Frontend Developer",
      profile: "https://randomuser.me/api/portraits/men/1.jpg",
      coverImage: "https://images.unsplash.com/photo-1503264116251-35a269479413",
      likesCount: 120,
      viewsCount: 340,
      followed: true
    },
    {
      fullName: "Ananya Verma",
      title: "UI/UX Designer",
      profile: "https://randomuser.me/api/portraits/women/2.jpg",
      coverImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      likesCount: 220,
      viewsCount: 560,
      followed: false
    },
    {
      fullName: "Rohan Mehta",
      title: "Backend Engineer",
      profile: "https://randomuser.me/api/portraits/men/3.jpg",
      coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      likesCount: 180,
      viewsCount: 410,
      followed: true
    },
    {
      fullName: "Priya Singh",
      title: "Data Scientist",
      profile: "https://randomuser.me/api/portraits/women/4.jpg",
      coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      likesCount: 300,
      viewsCount: 780,
      followed: false
    },
    {
      fullName: "Kabir Khan",
      title: "DevOps Engineer",
      profile: "https://randomuser.me/api/portraits/men/5.jpg",
      coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      likesCount: 140,
      viewsCount: 360,
      followed: true
    },
    {
      fullName: "Neha Kapoor",
      title: "Mobile App Developer",
      profile: "https://randomuser.me/api/portraits/women/6.jpg",
      coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      likesCount: 260,
      viewsCount: 690,
      followed: true
    },
    {
      fullName: "Arjun Patel",
      title: "Machine Learning Engineer",
      profile: "https://randomuser.me/api/portraits/men/7.jpg",
      coverImage: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
      likesCount: 320,
      viewsCount: 820,
      followed: false
    },
    {
      fullName: "Sneha Iyer",
      title: "Product Manager",
      profile: "https://randomuser.me/api/portraits/women/8.jpg",
      coverImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      likesCount: 210,
      viewsCount: 500,
      followed: true
    },
    {
      fullName: "Vikram Joshi",
      title: "Cybersecurity Analyst",
      profile: "https://randomuser.me/api/portraits/men/9.jpg",
      coverImage: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
      likesCount: 170,
      viewsCount: 420,
      followed: false
    },
    {
      fullName: "Ishita Gupta",
      title: "Cloud Architect",
      profile: "https://randomuser.me/api/portraits/women/10.jpg",
      coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      likesCount: 290,
      viewsCount: 760,
      followed: true
    }
  ];

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top_left,#fff7ed_0%,#ffedd5_35%,#fde68a_100%)] p-4 md:p-8'>
      <div className='mx-auto flex max-w-7xl flex-wrap justify-center'>
        {users.map(function (elem) {
          return <Card key={elem.fullName} user={elem} />
        })}
      </div>
    </div>
  )
}

export default App