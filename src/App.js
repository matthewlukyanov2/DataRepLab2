import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import NavigationBar from './components/navbar'; // Importing the NavigationBar component
import Header from './components/header'; // Importing the Header component
import Content from './components/content'; // Importing the Content component
import Footer from './components/footer'; // Importing the Footer component

function App() {
  return (
    <Router> {/* Enabling the app in Router to enable routing */}
      <NavigationBar /> 
      <Routes> 
        <Route path="/home" element={<Content />} /> 
        <Route path="/read" element={<Header />} /> 
        <Route path="/create" element={<Footer />} /> 
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App; // Exporting the App component for use in other parts of the application
