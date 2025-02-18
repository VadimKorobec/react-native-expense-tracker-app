import { StyleSheet, View } from "react-native"
import Input from "./Input";

const ExpenseForm = () => {

    const handleChangedAmount =()=>{}
    return (
      <View>
        <Input label="Amount" type='decimal-pad'onChangeText={handleChangedAmount} />
        <Input  label="Date" placeholder="YYYY-MM-DD" maxLength={10} onChangeText={()=>{}}/>
        <Input label="Description" />
      </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({}) 