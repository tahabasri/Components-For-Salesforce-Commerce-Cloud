/**
 * @description Controller used to return variation information
 */
public without sharing class SwatchController {
    /**
     * @description Return a map of all the active color variations
     */
    @AuraEnabled(cacheable=true)
    public static Map<String, Id> getActiveColors(String variantParentId) {
        if (String.isEmpty(variantParentId)) {
            return null;
        }

        List<ProductAttribute> productAttributes = [
            SELECT Color__c, ProductId
            FROM ProductAttribute
            WHERE Product.IsActive = true
            AND VariantParentId = :variantParentId
        ];

        Map<String, Id> results = new Map<String,Id>();
        for (ProductAttribute pa: productAttributes) {
            results.put(pa.Color__c, pa.ProductId);
        }
        return results;
    }
}