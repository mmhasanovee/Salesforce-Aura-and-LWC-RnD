({
    doInit: function (component, event, helper) {
        var action = component.get('c.fetchAccount');
        $A.enqueueAction(action, false);
        action.setCallback(this, function (response) {
            var responseValue = response.getReturnValue();
            console.log('responseValue', responseValue);
            component.set('v.accountList', responseValue);
        }, 'SUCCESS');

    },

    onCheck: function (component, event, helper) {
        var re = component.get('v.idToDelete');
        var whichOne = event.getSource();
        var buttonId = whichOne.get('v.name');

        if (re.includes(buttonId)) {

            for (var i = 0; i < re.length; i++) {
                if (re[i] === buttonId) {
                    re.splice(i, 1);
                }
            }


        }
        else {
            re.push(buttonId);
            component.set('v.idToDelete', re);
        }
        var result = component.get('v.idToDelete');
        console.log('v.idToDelete', result);


    },

    doDelete: function (component, event, helper) {

        var idsToDelete = component.get('v.idToDelete');

        if (idsToDelete == '') {
            alert("Please select an entity first, don't be stupid");
        }
        else {
            console.log(idsToDelete);
            var action = component.get('c.batchDeleteRecordFromCustomTableCmp');
            action.setParams({
                listOfIds: idsToDelete //passing the id as string parameter to the class you got.
            });

            action.setCallback(this, function (response) {
                var state = response.getState();
                if (state === 'SUCCESS') {
                    console.log('Success');
                    location.reload();


                } else {
                    console.log(response.getError());
                }

            });

            $A.enqueueAction(action);
        }
    }

})