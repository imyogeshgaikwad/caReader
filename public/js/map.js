mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: coordinates,              // <-- FIX: use listing coordinates
    zoom: 10                          // set zoom level
});

console.log("Listing Coordinates:", coordinates);

const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat(coordinates)
    .setPopup(
        new mapboxgl.Popup({offset:25})
    .setHTML(
        "<h6>Exact location provided after booking</h6>")
    )
    .addTo(map);
