//clock angles!!!!

//given a number of minutes past midnight, determine
//the angle between the hour and minute hands at that point in time
//keep in mind that on an analog clock, the hour hand is
//not perfectly aligned with the number hour
//e.g. at 4:45, the hour hand is 3/4 the way between 4 and 5
//you can assume the minute hand moves perfectly from one minute
//to the next.
//BONUS: the parameter accepts the number of SECONDS after midnight

const clockAngles = (minute) => {
    let minuteangle = (360 / 60) * (minute % 60)

    let hourangle = (360 / 12) * ((minute / 60) % 12)

    return Math.abs(minuteangle - hourangle)
    
}

console.log(clockAngles(360));
// console.log(clockAngles(180));
// console.log(clockAngles(210));
// console.log(clockAngles(588));
// console.log(clockAngles(980));
// console.log(clockAngles(361));


// const _hour = minutes / 60
// const hour = _hour === 12 ? 0 : _hour

// const shortAnglePerMinute = 360 / 60
// const longAnglePerMinute = shortAnglePerMinute / 12

// const shortAngle = shortAnglePerMinute * minutes
// const longAngle = longAnglePerMinute * minutes + hour * 30

// const angle = Math.max(longAngle, shortAngle) - Math.min(longAngle, shortAngle)

// return angle <= 180 ? angle : 360 - angle