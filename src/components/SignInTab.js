import  Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";
import Container  from "@mui/material/Container";
import Loginbutton from "./Loginbutton";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import axios from 'axios';
import SlackButton from "./SlackButton";





function SignInTab(){

    const [data,setData]= useState("");
    const [userd,setUserd] = useState();
    const [uname,setUname] = useState("");
    const [loggedin,setLoggedin] = useState();
    

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const sclientId = process.env.REACT_APP_SLACK_CLIENT_ID;
const sclientsecret=process.env.REACT_APP_SLACK_CLIENT_SECRET;



const Urls = window.location.search.split("=")
const name ='&'+Urls[1];
const name1 = name.split("&");
// console.log(name1[1]);
 



    useEffect(() => {
        console.log(window.location.href)

         function start(){
             gapi.client.init({
                 clientId: clientId,
                 scope:''
             })
         }

         gapi.load('client:auth2',start)


        

        

        const getdata = async (con) =>{
            try{
            await axios.get("https://slack.com/api/users.identity",con).then((res) => {
                if(res.data.ok){
                    setUname(res.data.user.name)
                    setLoggedin(true)
                }else{
                    setUname("")
                    setLoggedin(false)
                }
            }).catch((err) => console.log(err))
            }catch{

            }
            
            
        }




        const gettoken =  async () => {
            try{
              await axios.get("https://slack.com/api/oauth.v2.access",{params: {client_id: sclientId, client_secret: sclientsecret, code: name1[1]}}).then((res) => setData(res.data.authed_user.access_token)).catch((err) => console.log(err));
            }catch{

            }   
            
        }


        gettoken();

        const config = {
            headers: {
                "Access-Control-Allow-Headers": "authorization",
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${ data}`,
                "token": data
                
                
            },
        };

        getdata(config);

        
        



        
            // loadtoken(sclientId,sclientsecret,name1[1]);
            // console.log(data);
        


    })

   

    

    const [value, setValue] = useState('1');
    
    
    

    const handlechange = (event,newValue) => {
        setValue(newValue);
       
    }

    return(

        

            <Container >


            <Box >
                <Typography sx={{fontFamily:'Lobster', fontSize:50}}>jira</Typography>
            </Box>

            <Box sx={{
                
            }} >

            <TabContext value={value}>

             <Box component='div' sx={{
                display:'flex',
                width:'100%',
                justifyContent:'center'
             }}>   
            <TabList onChange={handlechange} aria-label="lab API tabs example">
                <Tab label="Log In" value="1" />
                <Tab label="Create account" value="2" />

            </TabList>
            </Box>

            <TabPanel value="1">
                <Box sx={{ display:'flex',
                    flexDirection:'column'
                  
            }}>

                {loggedin &&
                    <Box sx={{
                        width:'60%',
                        background:'#463',
                        color:'white',
                        alignSelf:'center',
                        marginBottom:'1rem',
                        padding:'1rem'


                    }}>Logged in as {uname}</Box>
                }

                    <Loginbutton style={{margin:"1 0.5rem"}} />
                    <SlackButton/>
                    
                <Box><span style={{
                    background:"#9993",
                    height:"1rem"
            
            }}></span><span>or better yet...</span> <span style={{
                background:"black",
                height:"1rem",
                width:"20px"
            }}> </span></Box>


                    <form style={{display:'flex',
                        flexDirection:'column',
                        alignItems:"center",
                        fontFamily:"Lato, sans-serif"
                                            
                        
                }}>
                    <input type='text' placeholder="Email"  style={{minHeight:"3rem", background:"#9993", border:"none", marginBottom: "1rem", width:"60%" , borderRadius:"5px"}} />
                        <input type='password' placeholder="Password" style={{minHeight:"3rem", background:"#9993", border:"none", marginBottom:"1rem", width:"60%", borderRadius:"5px"}} />
                        <Typography sx={{
                            textAlign:"center",
                            textDecoration:"underline"
                        }}>Forgot password?</Typography>
                        <button style={{
                            width:"60%",
                            border:"none",
                            background:"black",
                            color:"white",
                            padding:"1rem",
                            borderRadius:"55px",
                            marginTop:"0.5rem"
                        }}>Log in with jira</button>
                        

                    </form>
                </Box>
                
                </TabPanel>


            <TabPanel value="2" >

                  <Loginbutton style={{margin:"1 0.5rem"}} />
                    <SlackButton/>


            <Box><span style={{
                    background:"#9993",
                    height:"1rem"
            
            }}></span><span>or better yet...</span> <span style={{
                background:"black",
                height:"1rem",
                width:"20px"
            }}> </span></Box>


            <Box>
                    <form  style={{display:'flex',
                        flexDirection:'column',
                        alignItems:"center",
                }}>
                    <input type='text' placeholder="Email"  style={{minHeight:"3rem", background:"#9993", border:"none", marginBottom: "1rem", width:"60%" , borderRadius:"5px"}}  />
                    <input type='text' placeholder="First Name" style={{minHeight:"3rem", background:"#9993", border:"none", marginBottom: "1rem", width:"60%" , borderRadius:"5px"}}  />
                    <input type='text' placeholder="Surname (optional)" style={{minHeight:"3rem", background:"#9993", border:"none", marginBottom: "1rem", width:"60%" , borderRadius:"5px"}}  />
                        <input type='password' placeholder="Password" style={{minHeight:"3rem", background:"#9993", border:"none", marginBottom: "1rem", width:"60%" , borderRadius:"5px"}}  />
                        <Box sx={{
                            width:'60%'
                        }}><Typography>By creating an account you agree to our <u>terms of service</u> and <u>Privacy and cookie statement</u></Typography></Box>
                        <button  style={{
                            width:"60%",
                            border:"none",
                            background:"black",
                            color:"white",
                            padding:"1rem",
                            borderRadius:"55px",
                            marginTop:"0.5rem"
                        }}>Create jira account</button>

                    </form>
                    
                </Box>

            </TabPanel>
            
            </TabContext>
        </Box>

        </Container>

        

    
    )

}

export default SignInTab;
