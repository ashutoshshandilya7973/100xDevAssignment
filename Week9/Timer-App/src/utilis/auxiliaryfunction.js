const convertTime=(second)=>{
   const hour=Math.floor(second/(60*60));
   const minute=Math.floor((second%3600)/60);
    const sec=second%60;
    return {
        hour: hour.toString().padStart(2,'0'),
        minute:minute.toString().padStart(2,'0'),
        second:sec.toString().padStart(2,'0')
    }
}

const convertTimeToSecond=(hour,minute,second)=>{
     const convertedValue=pareseInt(hour)*3600 + parseInt(minute)*60 + parseInt(second);
     return isNaN(convertedValue)?0:convertedValue;
}

export {convertTime,convertTimeToSecond}