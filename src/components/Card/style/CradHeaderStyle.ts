import { StyleSheet } from 'react-native';
import { SecondaryColor, lightGrey } from '../../../../src/common/style/Colors';
import { defaultPadding } from '../../../../src/common/style/TypeGraphy';
import { getDeviceWidth } from '../../../../src/common/utilities/utilities';

const width = getDeviceWidth();

export const styles = StyleSheet.create({
    cardHeadercontainer: {
        flexDirection: 'row',
        height: 65,
        width,
        backgroundColor: SecondaryColor,
        paddingHorizontal: defaultPadding,
        borderBottomWidth: 1,
        borderBottomColor: lightGrey
    },
    userProfilePicContainer: {
        justifyContent: 'center'
    },
    userProfilePic: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    userNameContainer: {
        flex: 1,
        paddingLeft: defaultPadding,
        justifyContent: 'center',
    },
    userName: {
        fontWeight: '700'
    },
    moreActionContainer: {
        justifyContent: 'center',
        alignContent: 'flex-end'
    }

});