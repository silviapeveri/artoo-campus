angular.module('artoo').service('PlayerSrv', function(){
    var dictionary = {
        fight: 'The player started a fight!',
        potion: 'The player drank a potion!',
    };
    
    var logs = ['Logs inited'];
    
    this.log = (code) => {
        var text = dictionary[code] || 'The player just made an unknow action';
        var date = new Date();
        logs.push({text: text, date: date});
    };
    
    this.getLogs = function () {
        return logs;
    }
})