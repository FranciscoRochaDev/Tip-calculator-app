import Content from "./components/Content"
import Header from "./components/Header"

function App() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <Header />
      <main className="w-full flex justify-center">
        <Content />
      </main>
    </div>
  )
}

export default App
