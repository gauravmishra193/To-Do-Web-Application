

module.exports.getDate = getDate;

function getDate(){
    
    var today = new Date();
    var option = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    var day = today.toLocaleDateString('en-US', option);
    return day;
}

// this can also be written as following(in a more succinct format):

// module.exports.getDate = function{
//     var today = new Date();
//     var option = {
//         weekday: 'long',
//         day: 'numeric',
//         month: 'long'
//     }
//     return today.toLocaleDateString('en-US', option);
// }

module.exports.getDay= getDay;

function getDay(){

    var today = new Date();

    var option = {
        weekday: 'long'
    }

    var day = today.toLocaleDateString('en-US', option);
    return day;
}

