/**
 * Concept : utilisation de Set
 * Les gabarits de chaînes de caractères (template strings) sont des littéraux de
 * chaînes de caractères qui intègrent des expressions. Il est possible d'utiliser des chaînes de caractères sur plusieurs lignes ainsi que les fonctionnalités d'interpolation de chaînes.
 */

function getWithoutTemplate(language, version){
  return  'I like ' + language + ' ' + version;
}

function getTemplate(language, version){
  return  `I like ${language} ${version}`;
}

function getTemplateMultiLine(){
  return  `Ceci
est un exemple
de template sur plsuieurs lignes`;
}