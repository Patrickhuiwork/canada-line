import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker} from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'


const icon = L.icon({ iconUrl: '/images/marker-icon.png', iconSize: [35, 50] }) // Adjust the iconSize to decrease the scale of the marker

const polyline:[number, number][] = [
    [49.25299, -123.00600],
    [49.25980, -123.01400],
    [49.25299, -123.04400],
]

const multipolyline:[number, number][][] = [
    [
        [49.25299, -123.00800],
        [49.25980, -123.03300],
        [49.25299, -123.07400],

    ],
    [
        [49.25299, -123.00800],
        [49.25555, -123.03300],
        [49.25777, -123.07400],

    ]
]

const redOptions = { color: 'red' }
const orangeOptions = { color: 'orange' }
const fillBlueOptions = { color: 'blue' }

const center:[number, number] = [49.25299, -123.00600];

function Map() {
  return (
    <MapContainer
        style={{height: "100vh"}}
        center={[49.24966, -123.00934]} zoom={14} scrollWheelZoom={true}
    >
        <TileLayer
            attribution='&copy; <a href="">By Patrick Hui</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[49.25299, -123.00600]} icon={icon}>
                <Popup>
                    BCITjhgjhgj
                </Popup>
        </Marker>
        <Polyline pathOptions={redOptions} positions={polyline} />
        <Polyline pathOptions={orangeOptions} positions={multipolyline} />
        <Circle center={center} pathOptions={fillBlueOptions} radius={200}/>

        <CircleMarker center={[49.25299, -123.01650]} pathOptions={redOptions} radius={20}>
            <Popup>
                circle
            </Popup>
        </CircleMarker>
    </MapContainer>

  )
}

export default Map




