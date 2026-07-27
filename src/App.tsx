import { Form } from './components/forms/Form';
import { Modal } from './components/ui/Modal';
import { Footer } from './components/widgets/Footer';
import { Header } from './components/widgets/Header';
import './index.css';

function App() {
  return <div className="bg-white py-12">
    <div className="max-w-2xl mx-auto px-6 lg:px-8">
      <Header />
      <Form />
      <Footer />
    </div>
  </div>
}

export default App
