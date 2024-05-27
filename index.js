const options = [
    {
        label: 'Витебск', 
        value: 2,
        group: 'Первая'
    },
    {
        label: 'Могилёв', 
        value: 6,
        group: 'Первая'
    },
    {
        label: 'Гомель', 
        value: 3,
        group: 'Вторая'
    },
    {
        label: 'Брест', 
        value: 1,
        group: 'Третья'
    },
    {
        label: 'Гродно', 
        value: 4
    },
    {
        label: 'Минск', 
        value: 7
    },
    {
        label: 'Орша', 
        value: 2,
        group: 'Первая'
    },
]

class Select {
    constructor(selector, options, width) {
        this.$select = document.querySelector(selector);
        this.options = options;
        this.$select.style.setProperty('--selected-width', width);
        this.$label = document.querySelector('.select__label');
        this.$dropDown = document.querySelector('.select__drop-down');

        // this.itemsForDropDown = options.map(({label, value}) => {
        //     return `<li data-id=${value}>${label}</li>`
        // }).join('');

        this.itemsForDropDown = this.initGroup(options).map(([key, items]) => {
            if(key) {
                const groupList = items.map(({label, value}) => {
                    return `<li data-id=${value}>${label}</li>`
                }).join('');

                return `<ul style="padding: 8px"><span style="color: gray">${key}</span>${groupList}</ul>`

            } else {
                return items.map(({label, value}) => {
                    return `<li data-id=${value}>${label}</li>`
                }).join('');
            }
        }).join('');
    
        this.$dropDown.insertAdjacentHTML('afterbegin', this.itemsForDropDown);

        this.$select.addEventListener('click', (e) => {
            if(e.target.classList.contains('select__label')) { 
                this.$select.classList.toggle('active');
                
            } else {

                if(e.target.tagName.toLowerCase() === 'li') {  
                    this.selectItem(+e.target.dataset.id);
                    this.close();
                    
                   
                }
            }
        });
    }

    selectItem(id) {
        const selectedElement = this.options.find(item => item.value === id);
      
        this.$label.innerHTML = selectedElement.label;   
    }

    open() {
        this.$select.classList.add('active');
    }

    close() {
        this.$select.classList.remove('active')
    }

    initGroup(items) {
        const group = new Map();

        items.forEach((item) => {
            if (!group.has(item.group)) {
                group.set(item.group, [item])
            } else {
                group.set(item.group, [ ...group.get(item.group), item])
            }
        });

        return Array.from(group.entries())
    }

}


const customSelect = new Select('.select', options, '350px');



