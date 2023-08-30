import IMG from './wallpaper.jpg'

const trainees = [
  {
    id: 1,
    name: 'Rafiq',
    imageUrl: IMG,
    imageSize: 90,
  },
  {
    id: 2,
    name: 'Shahzaib',
    imageUrl: IMG,
    imageSize: 90,
  },
  {
    id: 3,
    name: 'Tajammul',
    imageUrl: IMG,
    imageSize: 90,
  },
  {
    id: 4,
    name: 'Saleem',
    imageUrl: IMG,
    imageSize: 90,
  },
  {
    id: 5,
    name: 'Mohisn',
    imageUrl: IMG,
    imageSize: 90,
  },
  {
    id: 6,
    name: 'Dilshad',
    imageUrl: IMG,
    imageSize: 90,
  },
  {
    id: 7,
    name: 'Iqbal',
    imageUrl: IMG,
    imageSize: 90,
  },
  {
    id: 8,
    name: 'Wajahat',
    imageUrl: IMG,
    imageSize: 90,
  }

]

export default function Profile() {

  return (
    <>
      {
        trainees.map((profile) => {
          return (
            <div key={profile.id}>
              <h1>{profile.name}</h1>
              <img
                src={profile.imageUrl}
                alt={'Photo of ' + profile.name}
                style={{
                  width: profile.imageSize,
                  height: profile.imageSize
                }}
              />
            </div>
          )
        })
      }
    </>
  );
}
