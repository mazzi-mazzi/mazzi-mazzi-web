"use client"

import React, { useEffect } from 'react';

function getMiles(i: number): number {
  return i * 0.000621371192;
}

function getActivities(code: string) {
  const activitiesLink = `https://www.strava.com/api/v3/athlete/activities?access_token=${code}`;
  console.log(code);

  fetch(activitiesLink)
    .then((res) => res.json())
    .then((data) => {
      // Your ArcGIS and mapping logic here
    })
    .catch((error) => {
      console.error(error);
    });
}

function reAuthorize() {
  fetch('https://www.strava.com/oauth/token', {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_id: '112934',
      client_secret: 'fc7f48cb74285045d609d3b6a972aff4315f7beb',
      refresh_token: '900a6b0e72e017cc321db252daaf329a150f70af',
      grant_type: 'refresh_token'
    })
  })
    .then((res) => res.json())
    .then((res) => getActivities(res.access_token))
    .catch((error) => {
      console.error(error);
    });
}

function StravaArc() {
  useEffect(() => {
    reAuthorize();
  }, []); // Run reAuthorize once on component mount

  return (
    <div style={{ padding: 0, margin: 0, height: '100%', width: '100%' }}>
      <div id="viewDiv"></div>
    </div>
  );
}

export default StravaArc;
