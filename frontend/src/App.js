import { Container } from "react-bootstrap"
import Header from "./components/sections/header"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  )
}

export default App
