
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function OrderReviewScreen(props){
    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
                styles.container,
                { 
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right
                }
            ]}
        >
            <View style={styles.titleContainer}>
                <Title>Bailey's Bike Repair</Title>
            </View>





        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.accent500,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        margin: 15,
        marginBottom: 10,
        borderWidth: 5,
        borderRadius: 5,
        paddingHorizontal: 30,
        borderColor: Colors.primary500,
        
    },
});