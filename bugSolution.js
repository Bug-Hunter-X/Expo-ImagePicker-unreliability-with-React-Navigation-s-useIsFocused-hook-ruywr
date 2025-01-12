import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

const MyComponent = () => {
  const [image, setImage] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    // Only attempt to select image when component is focused
    const pickImage = async () => {
       if (isFocused) {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.cancelled) {
          setImage(result.uri);
        }
      }
    };

    // Call pickImage here or wherever it's needed
    pickImage();
  }, [isFocused]);

  return (
    // Your component JSX
  );
};
export default MyComponent;