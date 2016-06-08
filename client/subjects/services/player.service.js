angular.module('artoo').service('PlayerSrv', function(){
    var player = {
        name: '',
        hp: 100,
        exp: 17,
        level: 2,
        race: 'elf',
        };
        
        
    this.die = () => {
        player.hp = 0;
    };
    
    this.drinkPotion = () => {
        if (this.isDead()) return;
        var newHp = player.hp + 50;
        player.hp = (newHp > 100) ? 100 : newHp;
    };
    
    this.isDead = () => {
        return !(!!player.hp);
    };
    
    this.getHp = () => {
        return player.hp;
    };
    
    this.takeHit = (damage) => {
        var hp = player.hp - damage;
        player.hp = (hp > 0) ? hp: 0;
    };
    
    this.get = () => {
     return player;
    };
    
    
    
    this.gainExp = () => {};
    
    
    
    this.respawn = () => {
        if (!this.isDead()) return;
        player.hp = 10;
        
    };
    
    this.levelUp = () => {
        player.level +=1;
    };
    
});