import IMG from '../image/1.jpeg'
import IMG2 from '../image/2.jpg'
import IMG3 from '../image/3.jpg'
import IMG4 from '../image/4.jpg'
import IMG5 from '../image/5.jpg'
import IMG6 from '../image/6.jpg'

const trainees = [
  {
    id: 1,
    imageUrl: IMG,
    name: 'Suhail',
    imageSize: 300,
  },
  {
    id: 2,
    name: 'Shahzaib',
    imageUrl: IMG2,
    imageSize: 300,
  },
  {
    id: 3,
    name: 'Tajammul',
    imageUrl: IMG3,
    imageSize: 300,
  },
  {
    id: 4,
    name: 'Saleem',
    imageUrl: IMG4,
    imageSize: 300,
  },
  {
    id: 5,
    name: 'Mohisn',
    imageUrl: IMG5,
    imageSize: 300,
  },
  {
    id: 6,
    name: 'Dilshad',
    imageUrl: IMG6,
    imageSize: 300,
  },
  
]

export default function Profile() {

  return (
    <>
      {
        trainees.map((profile) => {
          return (
            <div key={profile.id}>
              <img
                src={profile.imageUrl}
                alt={'Photo of ' + profile.name}
                style={{
                  width: profile.imageSize,
                  height: profile.imageSize
                }}
              />
              <h1>{profile.name}</h1>
            </div>
          )
        })
      }
    </>
  );
}
