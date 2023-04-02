import { View, Text, StyleSheet, FlatList } from "react-native";

const menuItemsToDisplay = [
    { name: 'Hummus', id: '1A' },
    { name: 'Moutabal', id: '2B' },
    { name: 'Falafel', id: '3C' },
    { name: 'Marinated Olives', id: '4D' },
    { name: 'Kofta', id: '5E' },
    { name: 'Eggplant Salad', id: '6F' },
    { name: 'Lentil Burger', id: '7G' },
    { name: 'Smoked Salmon', id: '8H' },
    { name: 'Kofta Burger', id: '9I' },
    { name: 'Turkish Kebab', id: '10J' },
    { name: 'Fries', id: '11K' },
    { name: 'Buttered Rice', id: '12L' },
    { name: 'Bread Sticks', id: '13M' },
    { name: 'Pita Pocket', id: '14N' },
    { name: 'Lentil Soup', id: '15O' },
    { name: 'Greek Salad', id: '16Q' },
    { name: 'Rice Pilaf', id: '17R' },
    { name: 'Baklava', id: '18S' },
    { name: 'Tartufo', id: '19T' },
    { name: 'Tartufo', id: '20U' },
    { name: 'Tiramisu', id: '21V' },
    { name: 'Panna Cotta', id: '22W' },
];

const MenuItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.name}</Text>
    </View>
);

export default function Menu() {
    return (
        <View style={styles.Menu}>
            <Text style={styles.MenuHeader}>View Menu</Text>
            <FlatList data={menuItemsToDisplay} keyExtractor={item => item.id} renderItem={MenuItem}></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    Menu: {
        flex: 0.75,
        width: "100%",
        backgroundColor: '#00000030',
    },
    MenuHeader: {
        color: 'white',
        fontSize: 40,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    itemContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 36,
    },
});