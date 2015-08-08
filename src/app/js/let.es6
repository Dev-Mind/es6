/**
 * Concept : utilisation de let
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/let
 * let permet de déclarer une variable dont la portée est celle du bloc courant, éventuellement en initialisant sa valeur.
 */


/**
 * Sans let : le hoisting (remontée est le fait que le var utilisé dans le bloc est en fait déclaré en début de fonction
 */
function getChampionName1(player) {
  //console.log(name);
  if (player.isChampion) {
    var name = 'Champion ' + player.name;
    return name;
  }
  return player.name;
}

/**
 * est equivalent &
 */
function getChampionName2(player) {
  var name;
  //console.log(name);
  if (player.isChampion) {
    name = 'Champion ' + player.name;
    return name;
  }
  return player.name;
}

/**
 * avec let pas de hoisting => portée locale
 */
function getChampionName3(player) {
 // console.log(name);
  if (player.isChampion) {
    let name = 'Champion ' + player.name;
    return name;
  }
  return player.name;
}