({
    doInit: function (component, event, helper) {
        var action = component.get('c.fetchAccount');
        $A.enqueueAction(action, false);
        action.setCallback(this, function (response) {
            var responseValue = response.getReturnValue();
            console.log('responseValue', responseValue);
            component.set('v.accountList', responseValue);
        }, 'SUCCESS');

    }
})