public class DataTableAuraServices {
	@AuraEnabled
    public static List<Account> fetchAccount(){
        return [Select Id, Name, Rating, Industry, Phone from Account Limit 5];
    }

    @AuraEnabled
    public static void DeleteRecord(String delId){
        List<Account> dataToDelete = new List<Account> ([Select Id from Account Where Id=:delID]);
        delete dataToDelete;
    }

    @AuraEnabled
    public static void batchDeleteRecord(List<Account> mewmew){
        
        delete mewmew;
    }

    

 
 }
    
