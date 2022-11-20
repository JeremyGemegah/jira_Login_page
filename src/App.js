import Display from './components/Display';
import './App.css';
import SignInTab from './components/SignInTab';
import Box from '@mui/material/Box';


function App() {
  return (
    <div className="App">
      
      <Box sx={{
        width: '100%',
        height:'100vh',
        
      }}>
        <Box>
      <Display />
      </Box>
      <Box
      sx={{
        
        display:'flex',
        height:'100vh',
        justifyContent:'center',
        alignItems:'center'
      }}>
      <SignInTab />
      </Box>
      </Box>
    </div>
  );
}

export default App;
