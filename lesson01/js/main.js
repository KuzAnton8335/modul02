const items = document.querySelector('.items');
const item = document.querySelector('.item')
const itemOne = document.querySelector('.item_one');
const itemTwo = document.querySelector('item_two');
const itemThree = document.querySelector('.item_three');
const itemFour = document.querySelector('.item_four');
const itemFive = document.querySelector('.item_five');
const itemSix = document.querySelector('.item_six');
const propsList = document.querySelectorAll('.props__list');
const propsItem = document.querySelectorAll('.props__item');
const tagNameLi = document.getElementsByTagName('li');
const tagNameOl = document.getElementsByTagName('Ol');
const ads = document.querySelector('.ads');
const parent = ads.parentNode;


items.append(itemThree, itemFour, itemFive, itemSix);
propsList[0].replaceWith(propsItem[0], propsItem[1], propsItem[2], propsItem[14], propsItem[3], propsItem[4])
propsList[2].prepend(propsItem[43], propsItem[44]);
propsList[2].replaceWith(propsItem[11], propsItem[12], propsItem[13], propsItem[15], propsItem[16], propsItem[17],
	propsItem[18], propsItem[19], propsItem[43], propsItem[44]);
propsList[3].replaceWith(propsItem[28], propsItem[29], propsItem[30], propsItem[31], propsItem[32], propsItem[33], propsItem[34])
propsList[4].replaceWith(propsItem[20], propsItem[21], propsItem[22], propsItem[23], propsItem[24], propsItem[25], propsItem[26], propsItem[27])
parent.removeChild(ads);
