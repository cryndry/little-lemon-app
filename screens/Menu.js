import { View, Text, StyleSheet, SectionList } from "react-native";

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
            { name: 'Hummus', price: '$5.00' },
            { name: 'Moutabal', price: '$5.00' },
            { name: 'Falafel', price: '$7.50' },
            { name: 'Marinated Olives', price: '$5.00' },
            { name: 'Kofta', price: '$5.00' },
            { name: 'Eggplant Salad', price: '$8.50' },
        ],
    },
    {
        title: 'Main Dishes',
        data: [
            { name: 'Lentil Burger', price: '$10.00' },
            { name: 'Smoked Salmon', price: '$14.00' },
            { name: 'Kofta Burger', price: '$11.00' },
            { name: 'Turkish Kebab', price: '$15.50' },
        ],
    },
    {
        title: 'Sides',
        data: [
            { name: 'Fries', price: '$3.00', id: '11K' },
            { name: 'Buttered Rice', price: '$3.00' },
            { name: 'Bread Sticks', price: '$3.00' },
            { name: 'Pita Pocket', price: '$3.00' },
            { name: 'Lentil Soup', price: '$3.75' },
            { name: 'Greek Salad', price: '$6.00' },
            { name: 'Rice Pilaf', price: '$4.00' },
        ],
    },
    {
        title: 'Desserts',
        data: [
            { name: 'Baklava', price: '$3.00' },
            { name: 'Tartufo', price: '$3.00' },
            { name: 'Tiramisu', price: '$5.00' },
            { name: 'Panna Cotta', price: '$5.00' },
        ],
    },
];

const MenuItem = ({ item }) => (
    <View style={styles.ItemContainer}>
        <Text style={styles.ItemText}>{item.name}</Text>
    </View>
);

const SectionHeader = ({ section: { title } }) => (
    <View style={styles.SectionHeader}>
        <Text style={styles.SectionHeaderText}>{title}</Text>
    </View>
);

export default function Menu() {
    return (
        <View style={styles.Menu}>
            <SectionList
                sections={menuItemsToDisplay}
                keyExtractor={(item, index) => item + index}
                renderSectionHeader={SectionHeader}
                renderItem={MenuItem}
                style={{ marginTop: 16 }}
            >
            </SectionList>
        </View>
    );
};

const styles = StyleSheet.create({
    Menu: {
        flex: 0.75,
        width: "100%",
        backgroundColor: '#00000030',
    },
    ItemContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
    },
    ItemText: {
        fontSize: 36,
        color: '#F4CE14',
    },
    SectionHeader: {
        backgroundColor: '#F4CE14',
    },
    SectionHeaderText: {
        color: 'black',
        fontSize: 26,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
});