import React, { useEffect } from 'react';

const Map_admin = () => {
  useEffect(() => {
    // Initialize the Google Map when the component mounts
    const initMaps = () => {
      const defaultMap = {
        zoom: 14,
        center: {
          lat: 40.712784,
          lng: -74.005941,
        },
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      };
      new window.google.maps.Map(document.getElementById("default_map"), defaultMap);

      const hybridMap = {
        zoom: 14,
        center: {
          lat: 40.712784,
          lng: -74.005941,
        },
        mapTypeId: window.google.maps.MapTypeId.HYBRID,
      };
      new window.google.maps.Map(document.getElementById("hybrid_map"), hybridMap);
    };

    // Load the Google Maps API script and initialize the map
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMaps`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    
    window.initMaps = initMaps;  // Set the global function for Google Maps callback

    return () => {
      // Cleanup the script when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="container-fluid p-0">
      <div className="mb-3">
        <h1 className="h3 d-inline align-middle">Google Maps</h1>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Default Map</h5>
              <h6 className="card-subtitle text-muted">Displays the default road map view.</h6>
            </div>
            <div className="card-body">
              <div className="content" id="default_map" style={{ height: "300px" }}></div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Hybrid Map</h5>
              <h6 className="card-subtitle text-muted">Displays a mixture of normal and satellite views.</h6>
            </div>
            <div className="card-body">
              <div className="content" id="hybrid_map" style={{ height: "300px" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map_admin;
