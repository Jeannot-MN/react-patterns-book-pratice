import { FC } from 'react';

interface Props {
    longitude: number;
    latitude: number
}

const Geolocation: FC<Props> = ({ latitude, longitude }) => {
    return (
        <div>
            <h1>Geolocation:</h1>
            <div>Latitude: {latitude}</div>
            <div>Longitude: {longitude}</div>
        </div>
    );
}

export default Geolocation;
