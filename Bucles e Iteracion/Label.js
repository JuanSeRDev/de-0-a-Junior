array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "josefina"];

forArray: //esta es la sentencia Label
for (let array in array2){
    if (array == 2){
        for(let array of array1){
            document.write(array, '<br>');
            break forArray;
        }
    }else {
        document.write(array2[array], '<br>');
    }
}
