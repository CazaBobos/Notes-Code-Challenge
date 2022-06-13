export default function getCurrentDate(){
    let today = new Date();

    let dayNumber = today.getDate();

    let day = (dayNumber <=9 ) ?
        `0${dayNumber}` : dayNumber;
    
    let month = 
        (today.getMonth() === 0)? 'Jan':
        (today.getMonth() === 1)? 'Feb':
        (today.getMonth() === 2)? 'Mar':
        (today.getMonth() === 3)? 'Apr':
        (today.getMonth() === 4)? 'May':
        (today.getMonth() === 5)? 'Jun':
        (today.getMonth() === 6)? 'Jul':
        (today.getMonth() === 7)? 'Aug':
        (today.getMonth() === 8)? 'Sep':
        (today.getMonth() === 9)? 'Oct':
        (today.getMonth() === 10)? 'Nov':
        'Dec';
        
    let year = today.getFullYear();

    return `${day}/${month}/${year}`;
}