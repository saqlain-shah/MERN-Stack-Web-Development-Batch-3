import Brandon_Afari from '../Asset/Brandon Afari.jpg'
import Bea_Alessio from '../Asset/Bea Alessio.jpg'
import Veeraj_Chugh from '../Asset/Veeraj Chugh.jpg'
import Kara_Collier from '../Asset/Kara Collier.png'
import James_Connolly from '../Asset/James Connolly.jpg'
import Elizabeth_Coulombe from '../Asset/Elizabeth Coulombe.jpg'
import Brad_Eckert from '../Asset/Brad Eckert.jpg'
import Noah_Elion from '../Asset/Noah Elion.jpg'
import Lacey_Kaelani from '../Asset/Lacey Kaelani.jpg'

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
  },
  {
    imageUrl: Brad_Eckert,
    imageSize: 250,
    name: "Brad Eckert",
    age: 29,
    title: "Cofounder",
    company: "Koko",
    forbesUrl: "https://www.forbes.com/30-under-30/2023/consumer-technology?profile=brad-eckert"
  },
  {
    imageUrl: Noah_Elion,
    imageSize: 250,
    name: "Noah Elion",
    age: 26,
    title: "Founder",
    company: "Lovd.com",
    forbesUrl: "https://www.forbes.com/30-under-30/2023/consumer-technology?profile=noah-elion"
  },
  {
    imageUrl: Lacey_Kaelani,
    imageSize: 250,
    name: "Lacey Kaelani",
    age: 28,
    title: "Cofounder",
    company: "Metaintro",
    forbesUrl: "https://www.forbes.com/30-under-30/2023/consumer-technology?profile=lacey-kaelani"
  }
]
  
  
  export default function Profile() {

    
    return (
      <body style = {{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '20px',
        marginLeft: '120px',
      }}>
      {
        millionairsProfile.map((profile) => {
          return( 
            
            <div style={{marginLeft:'50px',
            marginRight:'50px',
            marginTop:'40px',
            
            }}>
               <img
                className="avatar"
                src={profile.imageUrl}
                alt={'Photo of ' + profile.name}
                style={{
                width: profile.imageSize,
                height: profile.imageSize,
                }}
               />
               <p style={{marginTop: '10px',
                marginBottom: '-20px',
               }}>{profile.age} | {profile.title}, {profile.company}</p>
               <h4 style={{padding: '0px,'}}>{profile.name}</h4>
               <a href={profile.forbesUrl} style={{marginBottom: '30px',
               textDecoration: 'none',
              }}>View Profile</a>
            </div>
            
          )
        })
      }
      </body>
    );
  }
  