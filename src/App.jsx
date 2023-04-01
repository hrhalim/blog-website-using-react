import './App.css'
import Blogs from './components/Blogs/Blogs'
import Faq from './components/Faq/Faq'
import Header from './components/Header/Header'
 

function App() { 

  return (
    <div className="App">  
    <Header></Header>
    <Blogs></Blogs> 
    <Faq></Faq>
    </div>
  )
}

export default App
