// 30 minutos por dia para la cosa de la casa
// 100 minutos trabajos
// 100 minutos trabajo
// 5 minutos de descanso
// 240 munutos de trabajo (work)

let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de trabajos practicos"; //* tp = trabajos practicos
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso;"

console.log("tareas");

for (var i = 0; i < 14; i++){
    if (i == 0){
        console.groupCollapsed("semana 1")
    }
    console.group("dia " + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if (i == 6){
        console.groupEnd();
        console.groupCollapsed("semana 2")
        
    }
}

console.groupEnd();
console.groupEnd();