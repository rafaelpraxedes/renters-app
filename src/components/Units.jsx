// src/components/Units.jsx
import React from "react";
import "./Units4.css";

import { useEffect, useState } from 'react';
//import { createUnit } from './graphql/mutations';
import { listUnits } from '../graphql/queries';

export default function Units({ client }) {

    const [units, setUnits] = useState([]);

    useEffect(() => {
      let hasFetchedUnits = false;
      if (!hasFetchedUnits) {
        fetchUnits();
      }
      // cleanup function
      return () => {
        hasFetchedUnits = true;
      };
    }, []);

    async function fetchUnits() {

      console.log('fetchUnits...');

      try {
        const unitsData = await client.graphql({
          query: listUnits
        });

        console.log('unitsData:', unitsData);

        const units = unitsData.data.listUnits.items;
        //a.id.localeCompare(b.id)
        const sortedUnits = units.sort((a, b) =>
          a.id - b.id
        );      
        setUnits(sortedUnits);
      } catch (err) {
        console.log('error fetching Units: ', err);
      }
    }

  return (
    <div>
      <h2>Apartment Listings</h2>
      <div className="table-container">
        <table className="units-table">
          <thead>
            <tr>
            <th className="header-id">ID</th>
            <th className="header-ranking">#</th>
            <th className="header-address">Address</th>
            <th className="header-status">Status</th>
            <th className="header-status-date">Status Date</th>
            <th className="header-site">Site</th>
            <th className="header-rent">Rent</th>
            <th className="header-available">Available</th>
            <th className="header-size">Size</th>
            <th className="header-natural-light">Natural Light</th>
            <th className="header-modern-building">Modern Building</th>
            <th className="header-quiet">Quiet</th>
            <th className="header-balcony">Balcony</th>
            <th className="header-good-views">Good Views</th>
            <th className="header-nearby-parks">Nearby Parks</th>
            <th className="header-ac">AC</th>
            <th className="header-corner-unit">Corner Unit</th>
            <th className="header-wifi">Wifi</th>
            <th className="header-furnished">Furnished</th>
            </tr>
          </thead>
          <tbody>
            {units.map((unit) => (
              <tr key={unit.id}>
                <td className="col-id">{unit.id}</td>
                <td className="col-ranking">{unit.ranking}</td>
                <td className="col-address">{unit.address}</td>
                <td className="col-status">{unit.status}</td>
                <td className="col-status-date">{unit.statusDate}</td>
                <td className="col-site">{unit.site}</td>
                <td className="col-rent">{unit.rent}</td>
                <td className="col-available">{unit.available}</td>
                <td className="col-size">{unit.size}</td>
                <td className="col-natural-light">{unit.naturalLight}</td>
                <td className="col-modern-building">{unit.modernBuilding}</td>
                <td className="col-quiet">{unit.quiet}</td>
                <td className="col-balcony">{unit.balcony}</td>
                <td className="col-good-views">{unit.goodViews}</td>
                <td className="col-nearby-parks">{unit.nearbyParks}</td>
                <td className="col-ac">{unit.ac}</td>
                <td className="col-corner-unit">{unit.cornerUnit}</td>
                <td className="col-wifi">{unit.wifi}</td>
                <td className="col-furnished">{unit.furnished}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

}
