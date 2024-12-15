import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

export default function App() {

  const locationData = data.map((entry) => {
    return <Entry
      img={entry.img}
      title={entry.title}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
    />
  })

  return (
    <>
      <Header />
      <div>
        {locationData}
      </div>
    </>
  )
}

