import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
import PageContent from './layout/PageContent'
import { OrderContextProvider } from './context/OrderContext'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from './components/ScrollToTop'


function App() {

  return (
    <OrderContextProvider>
      <ScrollToTop />
      <Header />
      <PageContent />
      <Footer />
      <ToastContainer />
    </OrderContextProvider>
  )
}

export default App
