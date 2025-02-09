// src/components/Units.jsx
import React from "react";
import "./Units.css";

import { useEffect, useState } from 'react';

//import { createUnit } from './graphql/mutations';
import { listUnits } from '../graphql/queries';

export default function Units({ client }) {

    const [formState, setFormState] = useState('');
    const [units, setUnits] = useState([]);

    useEffect(() => {
      fetchUnits();
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
    <div className="table-container">
      <table className="units-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>#</th>
            <th>Address</th>
            <th>Status</th>
            <th>Status Date</th>
            <th>Site</th>
            <th>Rent</th>
            <th>Available</th>
            <th>Size</th>
            <th>Natural Light</th>
            <th>Modern Building</th>
            <th>Quiet</th>
            <th>Balcony</th>
            <th>Good Views</th>
            <th>Nearby Parks</th>
            <th>AC</th>
            <th>Corner Unit</th>
            <th>Wifi</th>
            <th>Furnished</th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit) => (
            <tr key={unit.id}>
              <td>{unit.id}</td>
              <td>{unit.ranking}</td>
              <td>{unit.address}</td>
              <td>{unit.status}</td>
              <td>{unit.statusDate}</td>
              <td>{unit.site}</td>
              <td>{unit.rent}</td>
              <td>{unit.available}</td>
              <td>{unit.size}</td>
              <td>{unit.naturalLight}</td>
              <td>{unit.modernBuilding}</td>
              <td>{unit.quiet}</td>
              <td>{unit.balcony}</td>
              <td>{unit.goodViews}</td>
              <td>{unit.nearbyParks}</td>
              <td>{unit.ac}</td>
              <td>{unit.cornerUnit}</td>
              <td>{unit.wifi}</td>
              <td>{unit.furnished}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
