import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

export default function App() {
  return (
    <>
      <Navbar title="TexrUtils"/>
      <div className="container mt-5">
        <TextForm heading="Text Form to Analyze"/>
      </div>
    </>
  );
}
