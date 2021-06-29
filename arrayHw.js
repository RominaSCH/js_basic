const attendance = ['흥민', '영희', '철수', '재석'];

function findName(name){
    // if(attendance.includes(name)){ //my first answer
    //     console.log("있습니다");
    // } else{
    //     console.log("없습니다")
    // }
    let checkIn = false;
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

findName("흥민");
findName("명수");