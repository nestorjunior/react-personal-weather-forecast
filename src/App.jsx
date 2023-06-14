import HomePage from './pages/HomePage'
import Button from 'react-bootstrap/Button';

const App = () => {

  return (
    <>
      <HomePage />

      <Button as="a" variant="primary">
        Button as link
      </Button>
    </>
  )
}

export default App
