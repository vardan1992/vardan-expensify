import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../Components/Header';
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage';
import ExpenseCreatePage from '../Components/ExpenseCreatePage';
import EditExpensePage from '../Components/EditExpensePage';
import HelpPage from '../Components/HelpPage';
import NotFoundPage from '../Components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact ={true} />
            <Route path="/create" component={ExpenseCreatePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component= {NotFoundPage}/>
        </Switch>
    </div>
    
</BrowserRouter>
);

export default AppRouter;