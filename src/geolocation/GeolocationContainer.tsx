import { useEffect, useState } from "react";
import Geolocation from "./Geolocation";

const GeolocationContainer = () => {
    const [longitude, setLongitude] = useState<number>(0);
    const [latitude, setLatitude] = useState<number>(0);

    const handleSuccess = ({
        coords: {
            latitude,
            longitude
        }
    }: { coords: { latitude: number; longitude: number } }
    ) => {
        setLatitude(latitude);
        setLongitude(longitude);
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleSuccess)
        }
    }, []);

    return (
        <Geolocation latitude={latitude} longitude={longitude}/>
    )
}

export default GeolocationContainer;