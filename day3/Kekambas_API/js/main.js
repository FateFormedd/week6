const getData = async () => {
    let response = await axios.get('https://kekambas-bs.herokuapp.com/kekambas');
    console.log(response);
    return response.data
};

const DOM_Elements = {
    kekambasList: '.kekambas-list'
}

const createList = (id, firstName, lastName) => {
    const html = `<a href='#' class="list-group-item list-group-item-action list-group-item-light" id=:${id}">${firstName} ${lastName}</a>`
    document.querySelector(DOM_Elements.kekambasList).insertAdjacentHTML('beforeend', html);
}

const loadData = async () => {
    const kekambas = await getData();
    console.log(kekambas);
    kekambas.forEach(element => {
        createList(element.id, element.first_name, element.last_name)
    });
}

const clearData = () => {
    document.querySelector(DOM_Elements.kekambasList).innerHTML = ''
}