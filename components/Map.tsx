import {MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import canadaLineCoordinates from '../data/canadaLine';
import canadaLineStations from '../data/stationmarkers';


const icon = L.icon({ iconUrl: '/images/station-icon.png', iconSize: [35, 50] })

const polyline: [number, number][] = canadaLineCoordinates;

const redOptions = { color: 'red' }
const blueOptions = { color: 'blue' }

const center:[number, number] = [49.25299, -123.00600];

function Map() {
  return (
    <MapContainer
        style={{height: "100vh"}}
        center={[49.24966, -123.00934]} zoom={14} scrollWheelZoom={true}
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
        <Polyline pathOptions={redOptions} positions={polyline} />
    </MapContainer>
  )
}

export default Map




