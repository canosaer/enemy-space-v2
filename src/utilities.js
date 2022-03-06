const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const resolveAttack = (playerStrength, enemyStrength) => {
    let enemyRoll = 0;
    let playerRoll = 0;
    let damage = 0;

    for(let i=0;i<playerStrength;i++){
        playerRoll += getRandomInteger(0,2)
    }

    for(let i=0;i<enemyStrength;i++){
        enemyRoll += getRandomInteger(0,2)
    }

    if(enemyRoll > playerRoll) damage = enemyRoll - playerRoll

    return damage
    
}

export {
    getRandomInteger,
    resolveAttack,
}