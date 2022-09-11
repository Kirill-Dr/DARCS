export function getCountSkinsInCart() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    return cart ? cart.skins.length : 0;
}

export const calcSubPrice = (skin) => +skin.count * skin.item.price;

export const calcTotalPrice = (skins) => {
    return skins.reduce((pV, cur) => {
        return (pV += cur.subPrice);
    }, 0);
};