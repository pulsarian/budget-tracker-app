import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Budget';
import ExpenseList from './ExpenseList';
import ExpenseTotal from './ExpenseTotal';
import Remaining from './Remaining';
import AddExpenseForm from './AddExpenseForm';
import { AppProvider } from './AppContext';
import UpdateBudgetForm from './UpdateBudgetForm';
import { Route, Switch } from 'react-router';
import HomeComponent from './Home';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <Link to="/home">Home </Link>
      <Link to="/about">About Us </Link>
      <Link to="/shop">Shop Now </Link>
    </div>
  );
};
function App() {
  return (
    <AppProvider>
      <Switch>
          asdadad<Route path="/home" component={HomeComponent} exact />
          

      </Switch>

      <Navbar />
      <div className="App">
      <div className="container">
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <UpdateBudgetForm />
          </div>
        </div>
      </div>
    </div>
    </AppProvider>
  );
}

export default App;
