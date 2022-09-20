import AppState from './context/background/AppState'
import Pages from './components/pages'
const App = () => {
  return (
    <AppState>
        <Pages/>
    </AppState>
  );
};

export default App;

