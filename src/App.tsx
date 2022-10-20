import Formik from './formik/Formik';
import GeolocationContainer from './geolocation/GeolocationContainer';
import Notes from './notes/Notes';

function App() {

  return (
    <>
      <GeolocationContainer />
      <Notes />
      <Formik/>
    </>
  )
}

export default App;