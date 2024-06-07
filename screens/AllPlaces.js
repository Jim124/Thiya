import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import PlacesList from '../components/places/PlacesList';
import { fetchPlaces } from '../util/database';

function AllPlaces({ route }) {
  const [places, setPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function getData() {
      const places = await fetchPlaces();
      setPlaces(places);
    }
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  return <PlacesList places={places} />;
}

export default AllPlaces;
