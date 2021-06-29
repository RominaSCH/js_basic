const attendance = ['흥민', '영희', '철수', '재석'];

function findName(name){
    // if(attendance.includes(name)){ //my first answer
    //     console.log("있습니다");
    // } else{
    //     console.log("없습니다")
    // }

    let checkIn = false; //my second answer
    attendance.forEach((i) => {
        if(i == name){
            checkIn = true;
        }
    });

    if(checkIn === true){
        console.log("있습니다");
    }else{
        console.log("없습니다")
    }

}

// findName("흥민");
// findName("명수");

function multiTable(number){
    for(var i=1;i<10;i++){
        console.log(`${number} * ${i} = ${number*i}`);
    }
    console.log("\n");
    
    // console.log(`${number} * 2 = ${number*2}`);
    // console.log(`${number} * 3 = ${number*3}`);
    // console.log(`${number} * 4 = ${number*4}`);
    // console.log(`${number} * 5 = ${number*5}`);
    // console.log(`${number} * 6 = ${number*6}`);
    // console.log(`${number} * 7 = ${number*7}`);
    // console.log(`${number} * 8 = ${number*8}`);
    // console.log(`${number} * 9 = ${number*9}\n`); //No more hard coding!
}
// for(var j=2;j<10;j++){
//     multiTable(j);
// }

function goalCalculator(pastResult, avgGoal){
    let totalResult = 0;
    pastResult.forEach((k) => { totalResult += k; });
    return console.log(avgGoal*(pastResult.length + 1) -totalResult); 
}
goalCalculator( [11, 6, 2, 3, 5] , 10 );