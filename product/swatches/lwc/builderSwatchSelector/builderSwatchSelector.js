import { LightningElement, api } from 'lwc';

export default class BuilderSwatchSelector extends LightningElement {
    _selectedItem;
    _items;

    get selectedItem() {
        return this._selectedItem;
    }

    set selectedItem(val) {
        this._selectedItem = val;
    }

    @api
    get items() {
        return this._items;
    }

    set items(val) {
        this._items = val;
        this._selectedItem = this._items.filter(item => item.selected)[0]?.value;
    }

    _isCentered

    @api
    get isCentered() {
        return this._isCentered;
    }

    _numSwatches = 6;

    @api
    get numSwatches() {
        return this._numSwatches;
    }

    handleProductCount(e) {
        this._numSwatches = e.target.value;
    }

    onChange(e) {
        this._isCentered = e.target.checked;
    }

    onClick(e) {
        console.log(`e.target = ${JSON.stringify(e.target, null, 2)}`);

        if (e.target.value == 'Select Item 1') {
            this._selectedItem = this._items[0].value;
        } else if (e.target.value == 'Select Item 2') {
            this._selectedItem = this._items[1].value;
        } else if (e.target.value == 'Select Item 3') {
            this._selectedItem = this._items[2].value;
        } else {
            this._selectedItem = '';
        }

        this.template.querySelector('c-swatch-selector').value = this._selectedItem;
    }

    onDisableClick(e) {
        let disableItem;
        if (e.target.value == 'Disable Item 1') {
            disableItem = this._items[0].value;
        } else if (e.target.value == 'Disable Item 2') {
            disableItem = this._items[1].value;
        } else if (e.target.value == 'Disable Item 3') {
            disableItem = this._items[2].value;
        } else {
            disableItem = '';
        }

        let items = [...this._items];
        for (let i = 0; i<items.length; i++) {
            items[i]['disabled'] = false;
            if (items[i].value == disableItem) {
                items[i]['disabled'] = true;
            }
        }
        this._items = items;
    }

    connectedCallback() {
        this.items = [
            {
                label: 'Stainless Steel',
                value: 'Stainless Steel',
                selected: false,
                disabled: false,
                url: 'https://cdn11.bigcommerce.com/s-pacto3wrn2/content/swatch-images/swatch_stainless_steel.jpg'
            },
            {
                label: 'Fingerprint Resistant Black Slate',
                value: 'Fingerprint Resistant Black Slate',
                selected: false,
                disabled: false,
                url: 'https://cdn11.bigcommerce.com/s-pacto3wrn2/content/swatch-images/swatch_fingerprint_resistant_black_slate.jpg'
            },
            {
                label: 'Smudge Resistant Slate',
                value: 'Smudge Resistant Slate',
                selected: false,
                disabled: false,
                url: 'https://i.imgur.com/b0PxTwK.png'
            },
            {
                label: 'Color1',
                value: 'Color1',
                selected: false,
                disabled: false,
                url: 'https://i.imgur.com/z6wsK83.png'
            },
            {
                label: 'Color2',
                value: 'Color2',
                selected: false,
                disabled: false,
                url: 'https://i.imgur.com/JWx4zic.png'
            },
            {
                label: 'Color3',
                value: 'Color3',
                selected: false,
                disabled: false,
                url: 'https://i.imgur.com/RhrR3wZ.png'
            },
            {
                label: 'Color4',
                value: 'Color4',
                selected: false,
                disabled: false,
                url: 'https://i.imgur.com/7xOmMqS.png'
            },
            {
                label: 'Color5',
                value: 'Color5',
                selected: false,
                disabled: false,
                url: 'https://i.imgur.com/xWaxH9I.png'
            },
            {
                label: 'Color6',
                value: 'Color6',
                selected: false,
                disabled: false,
                url: 'https://i.imgur.com/PhnM51F.png'
            },
            {
                label: 'Color7',
                value: 'Color7',
                selected: false,
                disabled: false,
                url: 'https://i.imgur.com/eYxvbza.png'
            },
            {
                label: 'Color8',
                value: 'Color8',
                selected: false,
                disabled: false,
                url: 'https://i.imgur.com/opmiY4R.png'
            },
            {
                label: 'Color9',
                value: 'Color9',
                selected: false,
                disabled: false,
                url: 'https://i.imgur.com/u0yvn3u.png'
            },
            {
                label: 'Color10',
                value: 'Color10',
                selected: false,
                disabled: false,
                url: 'https://i.imgur.com/eVM5MTs.png'
            }
        ];
    }

    handleOnChanged() {
        this._selectedItem = this.template.querySelector('c-swatch-selector').value;
    }
}