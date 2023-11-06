const Items = document.querySelector('.items');
const Item = document.querySelector('.item')
const ItemOne = document.querySelector('.item_one');
const ItemTwo = document.querySelector('item_two');
const ItemThree = document.querySelector('.item_three');
const ItemFour = document.querySelector('.item_four');
const ItemFive = document.querySelector('.item_five');
const ItemSix = document.querySelector('.item_six');
const PropsList = document.querySelectorAll('.props__list');
const PropsItem = document.querySelectorAll('.props__item');
const tagNameLi = document.getElementsByTagName('li');
const tagNameOl = document.getElementsByTagName('Ol');
const Ads = document.querySelector('.ads');
const parent = Ads.parentNode;


Items.append(ItemThree, ItemFour, ItemFive, ItemSix);
PropsList[0].replaceWith(PropsItem[0], PropsItem[1], PropsItem[2], PropsItem[14], PropsItem[3], PropsItem[4])
PropsList[2].prepend(PropsItem[43], PropsItem[44]);
PropsList[2].replaceWith(PropsItem[11], PropsItem[12], PropsItem[13], PropsItem[15], PropsItem[16], PropsItem[17],
	PropsItem[18], PropsItem[19], PropsItem[43], PropsItem[44]);
PropsList[3].replaceWith(PropsItem[28], PropsItem[29], PropsItem[30], PropsItem[31], PropsItem[32], PropsItem[33], PropsItem[34])
PropsList[4].replaceWith(PropsItem[20], PropsItem[21], PropsItem[22], PropsItem[23], PropsItem[24], PropsItem[25], PropsItem[26], PropsItem[27])
parent.removeChild(Ads);
