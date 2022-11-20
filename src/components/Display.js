import { Typography } from "@mui/material";
import Box from "@mui/material/Box";


function Display() {

    
        return(
            <Box sx={{
                maxWidth: '60vw',
                background:'#9992',
                
                float:'left'
            }}>
                <Box><Typography sx ={{ fontFamily:'Lobster', fontSize: 50, textAlign:"left", margin:4}}>jira</Typography></Box>
                <Box><Typography sx={{ fontSize:60, textAlign:'left', paddingLeft:6 }}>The simplest way to keep your <Typography sx={{fontFamily:'Lobster', fontSize:70, textAlign:'left'}}> business afloat</Typography></Typography><Typography sx={{textAlign:'left', fontSize:20, paddingLeft: 6}}>keep track of business transactions</Typography></Box>
                
             <Box>  
            <img src={process.env.PUBLIC_URL+"wetransfer-pane.png"} style={{width:'80%', paddingTop: 50, paddingLeft: 30, float: 'left'}} />
            </Box>
            </Box>
        )

    

}

export default Display;