import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

// `Material` Components.
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

// `Local` Components.
import Home from './pages/Home/';
import CreatePart from './pages/CreatePart/';
import Header from './components/Header/';

// `Theme`.
import theme from './theme/';

// Store Libs.
import store from './store/';

// Initialize Store.
store.initializeStore();

function App() {
  return (
    <Router basename="/simple-redux-layer">
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
