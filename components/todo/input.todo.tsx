import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
const styles = StyleSheet.create({
    todoInput: {
        borderColor: "violet",
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 5

    }
})
interface IProps {
    addTodo : (v: string) => void;
}
const InputTodo = (props: IProps) => {
    const [name, setName] = useState<string>("");
    const {addTodo} = props;
    const handleAddNewTodo = () => {
        //validate
         if(!name) {
            // Alert.alert("Thông tin không hợp lệ",
            //     "tiêu đề không được để trống",
            //     [
            //         // {
            //         //   text: 'Cancel',
            //         //   onPress: () => console.log('Cancel Pressed'),
            //         //   style: 'cancel',
            //         // },
            //         {text: 'OK', onPress: () => console.log('OK Pressed')},
            //       ]
            // )
            return;
         }
         addTodo(name);
         setName("");
    }
    return (
        <>
        <View>
                
            <TextInput
             onChangeText={ v => setName(v)}   
               value={name}
               autoCapitalize='none'
               autoCorrect={false}
              
               multiline={true}
               style={styles.todoInput} />
              <Button title='Add new'
              onPress={handleAddNewTodo}  />
        
            </View>    
              
        </>
    )
}
export default InputTodo;