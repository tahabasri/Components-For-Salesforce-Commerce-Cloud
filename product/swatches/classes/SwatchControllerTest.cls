@IsTest
public with sharing class SwatchControllerTest {
    @IsTest
    public static void getActiveColors_WithEmptyVariantParentId_Test() {
        String msg = 'Expected null return value';
        List<String> values = new List<String> {'', null};
        for (String val : values) {
            System.assertEquals(SwatchController.getActiveColors(val), null, msg);
        }
    }

    @IsTest(SeeAllData=true)
    public static void getActiveColors_Valid_VarationParentId_Test() {
        String msg = 'Expected valid return value';
        String variationParentId = '01tHs000006YjLNIA0';
        System.assert(SwatchController.getActiveColors(variationParentId).size() > 0, msg);
    }
}