import { ColorModeContext, useMode } from "./theme";
import { CssBaseline} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import TopBar from "./secense/global/TopBar";
import Dashboard from "./secense/dashboard/index";
import SideBar from "./secense/global/SideBar";
import Team from "./secense/team/index";
import Invoices from "./secense/invoices/index";
import Contacts from "./secense/contacts/index";
import Bar from "./secense/bar/index";
import Form from "./secense/form/index";
// import Line from "./secense/Line";
import Pie from "./secense/pie/index";
 import FAQ from "./secense/faq/index";
// import Geography from "./secense/Geography";
//import Calendar from "./secense/calendar/index";
import { Routes, Route} from "react-router-dom";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element= {<Dashboard />} />
              <Route path="/team" element= {<Team />} />
              <Route path="/contacts" element= {<Contacts />} />
              <Route path="/invoices" element= {<Invoices />} />
              <Route path="/form" element= {<Form />} />
              <Route path="/bar" element= {<Bar />} />
              <Route path="/pie" element= {<Pie />} />
              {/* <Route path="/line" element= {<Line />} />  */}
              <Route path="/faq" element= {<FAQ />} /> 
              {/* <Route path="/geography" element= {<Geography />} /> */} 
              {/* <Route path="/calendar" element= {<Calendar />} />  */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  
  );
}

export default App;
