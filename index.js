const options = [
    {
        label: 'Витебск', 
        value: 2
    },
    {
        label: 'Могилёв', 
        value: 6
    },
    {
        label: 'Гомель', 
        value: 3
    },
    {
        label: 'Брест', 
        value: 1
    },
    {
        label: 'Гродно', 
        value: 4
    },
    {
        label: 'Минск', 
        value: 7
    },
]

class Select {
    constructor(selector, options, width) {
        this.$select = document.querySelector(selector);
        this.options = options;
        this.$select.style.setProperty('--selected-width', width);
        this.$label = document.querySelector('.select__label');
        this.$dropDown = document.querySelector('.select__drop-down');

        this.itemsForDropDown = options.map(({label, value}) => {
            return `<li data-id=${value}>${label}</li>`
        }).join('');
        
        this.$dropDown.insertAdjacentHTML('afterbegin', this.itemsForDropDown);

        this.$select.addEventListener('click', (e) => {
            if(e.target.classList.contains('select__label')) {
                console.log('this is label');
            } else {
                if(e.target.tagName.toLowerCase() === 'li') {
                   
                    this.selectItem(+e.target.dataset.id);
                }
            }
        })

    }

    selectItem(id) {
        const selectedElement = this.options.find(item => item.value === id);
        console.log(selectedElement);
        this.$label.innerHTML = selectedElement.label;
        
        

    }

    }


const customSelect = new Select('.select', options, '350px');

