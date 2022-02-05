import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agencies from "./pages/agencies";
import AgencyMemberships from "./pages/agencyMemberships";
import Citizenships from "./pages/citizenships";
import Companies from "./pages/companies";
import Countries from "./pages/countries";
import FlightManifests from "./pages/flightManifests";
import Flights from "./pages/flights";
import Home from "./pages/home";
import Participants from "./pages/participants";
import Vehicles from "./pages/vehicles";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="agencies" element={<Agencies />} />
                <Route
                    path="agency-memberships"
                    element={<AgencyMemberships />}
                />
                <Route path="citizenships" element={<Citizenships />} />
                <Route path="companies" element={<Companies />} />
                <Route path="countries" element={<Countries />} />
                <Route path="flight-manifests" element={<FlightManifests />} />
                <Route path="flights" element={<Flights />} />
                <Route path="participants" element={<Participants />} />
                <Route path="vehicles" element={<Vehicles />} />
                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
