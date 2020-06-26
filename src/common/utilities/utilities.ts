import { Dimensions } from 'react-native';
/**
 * Get Window Width
 */
const { width } = Dimensions.get('window');

/**
 * Get Device Width
 */
export const getDeviceWidth = () => {
    return width;
}