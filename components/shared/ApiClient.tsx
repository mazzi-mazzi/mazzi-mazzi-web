"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';

function ApiClient() {
  const [data, setData] = useState<{message: string} | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://3.39.160.168:8080/api/home');

        // const responseData = response.data;
        // console.log(responseData);

        setData(response.data);
      } catch (error) {
        console.error('Error fetching data from Flask API:', error);
      }
    }

    fetchData();
  }, []);
  
  return (
    <div>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}

export default ApiClient;
