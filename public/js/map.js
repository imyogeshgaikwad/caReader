    mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: [0.1276,51.5072], // starting position [lng, lat]. 
        zoom: 9 // starting zoom
    });
