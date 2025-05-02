import { createElement } from 'lwc';
import SwatchSelector from 'c/swatchSelector';

describe('c-swatch-selector', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('element is not centered by default', () => {
        // Arrange
        const element = createElement('c-swatch-selector', {
            is: SwatchSelector
        });

        // Act
        document.body.appendChild(element);

        // Assert
        const div = element.shadowRoot.querySelector('div');
        expect(div.classList).not.toContain('slds-grid_align-center');
    });

    it('default number of swatches is 6', () => {
        // Arrange
        const element = createElement('c-swatch-selector', {
            is: SwatchSelector
        });

        // Act
        document.body.appendChild(element);

        // Assert
        return Promise.resolve().then(() => {
            const div = element.shadowRoot.querySelectorAll('.slds-size_1-of-6');
            expect(div).not.toBeNull();
        })
    });

    it('should show 8 swatches', () => {
        // Arrange
        const element = createElement('c-swatch-selector', {
            is: SwatchSelector
        });

        // Act
        element.numSwatches = 8;
        document.body.appendChild(element);

        // Assert
        return Promise.resolve().then(() => {
            const div = element.shadowRoot.querySelectorAll('.slds-size_1-of-8');
            expect(div).not.toBeNull();
        })
    });


    it('element is centered', () => {
        // Arrange
        const element = createElement('c-swatch-selector', {
            is: SwatchSelector
        });

        // Act
        element.isCentered = true;
        document.body.appendChild(element);

        // Assert
        return Promise.resolve().then(() => {
            const div = element.shadowRoot.querySelector('div');
            expect(div.classList).toContain('slds-grid_align-center');
        })
    });

    it('should not render swatches if there no items', () => {
        // Arrange
        const element = createElement('c-swatch-selector', {
            is: SwatchSelector
        });

        // Act
        element.items = [];
        document.body.appendChild(element);

        // Assert
        return Promise.resolve().then(() => {
            const inputs = element.shadowRoot.querySelector('input');
            expect(inputs).toBeNull();
        })
    });

    it('should render swatches if there are items', () => {
        // Arrange
        const element = createElement('c-swatch-selector', {
            is: SwatchSelector
        });

        // Act
        element.items = [
                    {label: 'green', value: 'green', selected: false, disabled: false, url: 'some url'},
                    {label: 'blue', value: 'blue', selected: false, disabled: false, url: 'some url'}
                    ];
        document.body.appendChild(element);

        // Assert
        return Promise.resolve().then(() => {
            const inputs = element.shadowRoot.querySelectorAll('input');
            expect(inputs).toHaveLength(2);
        })
    });

    it('set and get a value', () => {
        // Arrange
        const element = createElement('c-swatch-selector', {
            is: SwatchSelector
        });

        // Act
        element.items = [
                    {label: 'green', value: 'green', selected: false, disabled: false, url: 'some url'},
                    {label: 'blue', value: 'blue', selected: false, disabled: false, url: 'some url'}
                    ];

        document.body.appendChild(element);
        element.value = 'green';

        // Assert
        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector("input[data-key='green']");
            expect(input.classList).toContain('selected');
        })
    });

    it('should raise event when color swatch is clicked', () => {
        // Arrange
        const element = createElement('c-swatch-selector', {
            is: SwatchSelector
        });

        // Act
        element.items = [
                    {label: 'green', value: 'green', selected: false, disabled: false, url: 'some url'},
                    {label: 'blue', value: 'blue', selected: false, disabled: false, url: 'some url'}
                    ];

        document.body.appendChild(element);
        element.onclick = (e) => {
            expect(e.target.dataset.key).toBe('green');
        }

        // Assert
        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector("input[data-key='green']");
            input.dispatchEvent(new Event('click'));  //simulate user clicking 'green' color swatch
        })
    });
});