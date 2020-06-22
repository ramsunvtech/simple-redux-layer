import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

// `Material` Components.
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

// `Local` Components.
import CreatePart from './pages/CreatePart';
import Home from './pages/Home';
import Header from './components/Header';
import theme from './theme/index';

// Store Libs.
import store from './store/index';

// Initialize Store.
store.initializeStore();

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Container>
            <Box my={10}>
              <Route exact path="/" component={Home} />
              <Route path="/create" component={CreatePart} />
            </Box>
          </Container>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
