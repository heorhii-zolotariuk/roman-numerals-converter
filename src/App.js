import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ConversionForm from './components/ConversionForm'

function App() {
  return (
    <div className="application-container">
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} className="application-container__item">
                <ConversionForm/>
            </Grid>
            <Grid item xs={12} sm={6} className="application-container__item">
                Challenge
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
