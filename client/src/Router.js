import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./components/pages/index";
import Dashboard from "./components/pages/dashboard";
import GIGM from "./components/pages/gigm";
import PMT from "./components/pages/pmt";
import Login from "./components/auth/Login";
import Admin from "./components/auth/Admin";
import Register from "./components/auth/Register";

import Ticket from "./components/pages/tickets";
import TicketsForm from "./components/pages/ticketForm";
import UserTickets from "./components/pages/customerTicket";
import Navbar from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";
import Search from "./components/pages/search";
import UserSearch from "./components/pages/customerSearch";
import { UpdateCustomerTicket } from "./components/pages/updateTicket";

function Router() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/usersearch">
          <UserSearch />
        </Route>
        {loggedIn === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </>
        )}
        {loggedIn === true && (
          <>
            <Route exact path="/allticket">
              <Ticket />
            </Route>
            <Route exact path="/mytickets">
              <UserTickets />
            </Route>
            {/* QR CODE GENERATE PAGE */}

            <Route exact path="/ticket/reg">
              <TicketsForm />
            </Route>
            <Route exact path="/ticket/:id/edit">
              <UpdateCustomerTicket />
            </Route>
            <Route exact path="/abc">
              <Navbar />
              <Dashboard />
            </Route>
            <Route exact path="/gigm">
              <Navbar />
              <GIGM />
            </Route>
            <Route exact path="/pmt">
              <Navbar />
              <PMT />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
