import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import canadaLineCoordinates from '../data/canadaLine';
import canadaLineStations from '../data/stationmarkers';

const icon = L.icon({ iconUrl: '/images/station-icon.png', iconSize: [35, 50] });

const multipolyline: [number, number][][] = canadaLineCoordinates;

const blueOptions = { color: 'rgba(0, 148, 255, 1)', smoothFactor: 2, weight: 5 }; 


function Map() {
  return (
    <MapContainer
      style={{ height: '100vh' }}
      center={[49.2263, -123.1161]}
      zoom={12.5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://github.com/Patrickhuiwork/canada-line.git">By Patrick Hui</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {canadaLineStations.map((station, index) => (
        <Marker key={`marker-${index}`} position={station.position} icon={icon}>
          <Popup>{station.name}</Popup>
        </Marker>
      ))}
      <Polyline pathOptions={blueOptions} positions={multipolyline} />
    </MapContainer>
  );
}

export default Map;




