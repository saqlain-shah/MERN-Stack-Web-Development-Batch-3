import Brandon_Afari from '../Asset/Brandon Afari.jpg'
import Bea_Alessio from '../Asset/Bea Alessio.jpg'
import Veeraj_Chugh from '../Asset/Veeraj Chugh.jpg'
import Kara_Collier from '../Asset/Kara Collier.png'
import James_Connolly from '../Asset/James Connolly.jpg'
import Elizabeth_Coulombe from '../Asset/Elizabeth Coulombe.jpg'

  const millionairsProfile = [
    {
    imageUrl: Brandon_Afari,
    imageSize: 250,
    display: 'flex',
    name: "Brandon Afari",
    age: 28,
    title: "Cofounder",
    company: "chargeFUZE",
    forbesUrl: "https://www.forbes.com/30-under-30/2023/consumer-technology?profile=brandon-afari"
  },
  {
    imageUrl: Bea_Alessio,
    imageSize: 250,
    name: "Bea Alessio",
    age: 29,
    title: "Product Manager",
    company: "Google",
    forbesUrl: "https://www.forbes.com/30-under-30/2023/consumer-technology?profile=bea-alessio"
  },
  {
    imageUrl: Veeraj_Chugh,
    imageSize: 250,
    name: "Veeraj Chugh",
    age: 27,
    title: "Cofounder",
    company: "Opal Camera",
    forbesUrl: "https://www.forbes.com/30-under-30/2023/consumer-technology?profile=veeraj-chugh"
  },
  {
    imageUrl: Kara_Collier,
    imageSize: 250,
    name: "Kara Collier",
    age: 29,
    title: "Cofounder",
    company: "NutriSense",
    forbesUrl: "https://www.forbes.com/30-under-30/2023/consumer-technology?profile=kara-collier"
  },
  {
    imageUrl: James_Connolly,
    imageSize: 250,
    name: "James Connolly",
    age: 29,
    title: "Cofounder",
    company: "Villa",
    forbesUrl: "https://www.forbes.com/30-under-30/2023/consumer-technology?profile=james-connolly"
  },
  {
    imageUrl: Elizabeth_Coulombe,
    imageSize: 250,
    name: "Elizabeth Coulombe",
    age: 29,
    title: "Cofounder",
    company: "Tero Innovation",
    forbesUrl: "https://www.forbes.com/30-under-30/2023/consumer-technology?profile=elizabeth-coulombe"
  }
]
  
  
  export default function Profile() {
    
    return (
      <>
      {
        millionairsProfile.map((profile) => {
          return( 
            <div>
               <img
                className="avatar"
                src={profile.imageUrl}
                alt={'Photo of ' + profile.name}
                style={{
                width: profile.imageSize,
                height: profile.imageSize,
                }}
               />
               <p>{profile.age} | {profile.title}, {profile.company}</p>
               <h4>{profile.name}</h4>
               <a href={profile.forbesUrl}>View Profile</a>
            </div>
          )
        })
      }
      </>
    );
  }
  