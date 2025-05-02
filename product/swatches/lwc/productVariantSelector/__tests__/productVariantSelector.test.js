import { createElement } from 'lwc';
import ProductVariantSelector from 'c/productVariantSelector';

describe('c-product-variant-selector', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('element renders swatchSelector', () => {
        // Arrange
        const element = createElement('c-product-variant-selector', {
            is: ProductVariantSelector
        });

        // Act
        element.product = productDetails;
        document.body.appendChild(element);

        // Assert
        return Promise.resolve().then(() => {
            const swatchSelector = element.querySelector("c-swatch-selector");
            expect(swatchSelector).not.toBeNull();
            expect(swatchSelector.isCentered).toBe(false);
            expect(swatchSelector.numSwatches).toBe(6);
            expect(swatchSelector.items[0].value).toBe('Color4');
            expect(swatchSelector.items[0].url).toBe('https://i.imgur.com/7xOmMqS.png');
        })
    });

    it('element raises variantselected event when color swatch clicked', () => {
        // Arrange
        const element = createElement('c-product-variant-selector', {
            is: ProductVariantSelector
        });

        // Act
        element.product = productDetails;

        element.addEventListener('variantselected', (e) => {
            expect(e).not.toBeNull();
            expect(e.detail).not.toBeNull();
        });

        document.body.appendChild(element);

        // Assert
        return Promise.resolve().then(() => {
            const swatchSelector = element.querySelector("c-swatch-selector");
            swatchSelector.value = 'green';
        })
    });
});

const productDetails = {
    "attributeSetInfo": {
      "Colors": {
        "attributeInfo": {
          "Color__c": {
            "allowableValues": [
              "Color1",
              "Color2",
              "Color3",
              "Color4",
              "Color5",
              "Color6",
              "Color7",
              "Color8",
              "Color9",
              "Color10"
            ],
            "apiName": "Color__c",
            "availableValues": [
              "Color4",
              "Color5",
              "Color7",
              "Color8",
              "Color9",
              "Color10"
            ],
            "fieldEnumOrId": "00NHs00000JlFTP",
            "label": "Color",
            "objectName": "ProductAttribute",
            "sequence": 0
          }
        },
        "description": "Colors for the product",
        "developerName": "Colors",
        "id": "0iYHs000000006sMAA",
        "masterLabel": "Colors",
        "sequence": null
      }
    },
    "defaultImage": {
      "alternateText": "\"Elite espresso machine\"",
      "contentVersionId": null,
      "id": "2pmHs0000004J2tIAE",
      "mediaType": "Image",
      "sortOrder": 0,
      "thumbnailUrl": null,
      "title": "The Elite (Sample)",
      "url": "https://c.na139.content.force.com/servlet/servlet.ImageServer?id=0154W00000CxsIl&oid=00D4W0000054JBn"
    },
    "fields": {
      "LastModifiedDate": "2023-07-21T22:42:54Z",
      "DisplayUrl": null,
      "IsDeleted": "false",
      "Description": null,
      "SwatchConfig__c": "{ \"Color\": { \"Color1\": \"https://i.imgur.com/z6wsK83.png\", \"Color2\": \"https://i.imgur.com/JWx4zic.png\", \"Color3\": \"https://i.imgur.com/RhrR3wZ.png\", \"Color4\": \"https://i.imgur.com/7xOmMqS.png\", \"Color5\": \"https://i.imgur.com/xWaxH9I.png\", \"Color6\": \"https://i.imgur.com/PhnM51F.png\", \"Color7\": \"https://i.imgur.com/eYxvbza.png\", \"Color8\": \"https://i.imgur.com/opmiY4R.png\", \"Color9\": \"https://i.imgur.com/u0yvn3u.png\", \"Color10\": \"https://i.imgur.com/eVM5MTs.png\" } }",
      "ProductCode": "TEWC-Parent",
      "IsActive": "true",
      "ExternalId": null,
      "LastViewedDate": null,
      "UserRecordAccessId": null,
      "LastReferencedDate": null,
      "StockKeepingUnit": "TEWC-Parent",
      "Name": "The Elite with Colors",
      "SystemModstamp": "2023-07-21T22:42:54Z",
      "IsArchived": "false",
      "Type": "Base",
      "CreatedById": "005Hs00000CkpnA",
      "CloneSourceId": null,
      "QuantityUnitOfMeasure": null,
      "CreatedDate": "2023-07-10T18:11:49Z",
      "Family": null,
      "ProductClass": "VariationParent",
      "LastModifiedById": "005Hs00000CkpnA"
    },
    "id": "01tHs000006YjLNIA0",
    "mediaGroups": [
      {
        "developerName": "productListImage",
        "id": "2mgHs000000F3qLIAS",
        "mediaItems": [
          {
            "alternateText": "\"Elite espresso machine\"",
            "contentVersionId": null,
            "id": "2pmHs0000004J2yIAE",
            "mediaType": "Image",
            "sortOrder": 0,
            "thumbnailUrl": null,
            "title": "The Elite (Sample)",
            "url": "https://c.na139.content.force.com/servlet/servlet.ImageServer?id=0154W00000CxsIl&oid=00D4W0000054JBn"
          }
        ],
        "name": "Product List Image",
        "usageType": "Listing"
      },
      {
        "developerName": "productDetailImage",
        "id": "2mgHs000000F3qKIAS",
        "mediaItems": [
          {
            "alternateText": "\"Elite espresso machine\"",
            "contentVersionId": null,
            "id": "2pmHs0000004J2tIAE",
            "mediaType": "Image",
            "sortOrder": 0,
            "thumbnailUrl": null,
            "title": "The Elite (Sample)",
            "url": "https://c.na139.content.force.com/servlet/servlet.ImageServer?id=0154W00000CxsIl&oid=00D4W0000054JBn"
          }
        ],
        "name": "Product Detail Images",
        "usageType": "Standard"
      }
    ],
    "primaryProductCategoryPath": {
      "path": [
        {
          "description": null,
          "id": "0ZGHs0000008aI7OAI",
          "name": "Products"
        },
        {
          "description": null,
          "id": "0ZGHs0000008aICOAY",
          "name": "Machines"
        },
        {
          "description": null,
          "id": "0ZGHs0000008aIFOAY",
          "name": "Coffee Machines"
        }
      ]
    },
    "productClass": "VariationParent",
    "purchaseQuantityRule": null,
    "variationAttributeSet": {
      "attributes": {
        "Color__c": null
      },
      "developerName": "Colors",
      "id": null
    },
    "variationInfo": {
      "attributesToProductMappings": [
        {
          "canonicalKey": "Color9",
          "productId": "01tHs000006Ykp0IAC",
          "selectedAttributes": [
            {
              "apiName": "Color__c",
              "label": "Color",
              "sequence": 0,
              "value": "Color9"
            }
          ]
        },
        {
          "canonicalKey": "Color8",
          "productId": "01tHs000006YkozIAC",
          "selectedAttributes": [
            {
              "apiName": "Color__c",
              "label": "Color",
              "sequence": 0,
              "value": "Color8"
            }
          ]
        },
        {
          "canonicalKey": "Color10",
          "productId": "01tHs000006YkouIAC",
          "selectedAttributes": [
            {
              "apiName": "Color__c",
              "label": "Color",
              "sequence": 0,
              "value": "Color10"
            }
          ]
        },
        {
          "canonicalKey": "Color7",
          "productId": "01tHs000006YkoqIAC",
          "selectedAttributes": [
            {
              "apiName": "Color__c",
              "label": "Color",
              "sequence": 0,
              "value": "Color7"
            }
          ]
        },
        {
          "canonicalKey": "Color4",
          "productId": "01tHs000006YkotIAC",
          "selectedAttributes": [
            {
              "apiName": "Color__c",
              "label": "Color",
              "sequence": 0,
              "value": "Color4"
            }
          ]
        },
        {
          "canonicalKey": "Color5",
          "productId": "01tHs000006YkoyIAC",
          "selectedAttributes": [
            {
              "apiName": "Color__c",
              "label": "Color",
              "sequence": 0,
              "value": "Color5"
            }
          ]
        }
      ],
      "variationAttributeInfo": {
        "Color__c": {
          "allowableValues": [
            "Color1",
            "Color2",
            "Color3",
            "Color4",
            "Color5",
            "Color6",
            "Color7",
            "Color8",
            "Color9",
            "Color10"
          ],
          "apiName": "Color__c",
          "availableValues": [
            "Color4",
            "Color5",
            "Color7",
            "Color8",
            "Color9",
            "Color10"
          ],
          "fieldEnumOrId": "00NHs00000JlFTP",
          "label": "Color",
          "objectName": "ProductAttribute",
          "sequence": 0
        }
      }
    }
  };