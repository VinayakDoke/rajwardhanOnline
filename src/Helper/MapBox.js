
import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const MapBox = () => {
const latitude=17.6090699;
const longitude= 75.618446
    const isCoordinatesValid = latitude !== undefined && longitude !== undefined;

    // Initialize viewport state with default values if latitude/longitude is missing
    // const [viewport, setViewport] = useState({
    //   latitude: latitude || 37.7749, // Default to San Francisco latitude
    //   longitude: longitude || -122.4194, // Default to San Francisco longitude
    //   zoom: 14,
    //   width: '100%',
    //   height: '400px',
    // });
  
    console.log('Latitude:', latitude, 'Longitude:', longitude,'process.env',process.env,process.env.REACT_APP_MAPBOX_ACCESS_TOKEN);

    // Ensure latitude and longitude are numbers
    // const isCoordinatesValid = typeof latitude === 'number' && typeof longitude === 'number';
  
    // Initialize viewport state
    const [viewport, setViewport] = useState({
      latitude: latitude || 37.7749,  // Default to a fallback location (San Francisco)
      longitude: longitude || -122.4194, 
      zoom: 14,
      width: '100%',
      height: '400px',
    });
  
    // If coordinates are not valid, you can return a fallback UI or an error message
    if (!isCoordinatesValid) {
      return <div>Error: Invalid coordinates provided.</div>;
    }
    // useEffect(() => {
    //     // If the coordinates change or are updated later, reset the viewport
    //     if (isCoordinatesValid) {
    //       setViewport({
    //         ...viewport,
    //         latitude: latitude,
    //         longitude: longitude
    //       });
    //     }
    //   }, [latitude, longitude]); // Re-run when props change
    // useEffect(()=>{

    // },[latitude, longitude])

//   const [viewport, setViewport] = React.useState({
//     latitude: 17.6090699,
//     longitude: 75.618446,
//     zoom: 14,
//     width: '100%',
//     height: '400px',
//   });

  return (
    // <ReactMapGL
    //   {...viewport}
    //   mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
    //   onViewportChange={(newViewport) => setViewport(newViewport)}
    // >
    //   <Marker latitude={viewport?.latitude} longitude={viewport?.longitude}>
    //     <div>📍</div>
    //   </Marker>
    // </ReactMapGL>

    <div style={{ height: '400px', width: '50%' }}> {/* Ensure the map container has height and width */}
    <ReactMapGL
      {...viewport}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} // Replace with your token
      onMove={(evt) => setViewport(evt.viewState)} // Updated from onViewportChange to onMove in newer react-map-gl versions
      mapStyle="mapbox://styles/mapbox/streets-v11" // Optional: Specify a map style
    >
      {/* Place marker at the given coordinates */}
      {/* <Marker latitude={latitude} longitude={longitude}>
        <span style={{ fontSize: '24px' }}>📍</span> 
      </Marker> */}
         {/* <Marker latitude={latitude} longitude={longitude}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: '24px', color: 'red' }}>📍</span> 
          </div>
        </Marker> */}
    </ReactMapGL>
  </div>

  );
};

export default MapBox;
