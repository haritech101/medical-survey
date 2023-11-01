let jsonForSurvey = {
    elements: [
        
        {
            name: "lr",
            title: "LR",
            type: "text",
            "inputType": "number",
            "step": 1,
            "isRequired": true,
            "validators": [
                { 
                    "type": "numeric", 
                    "type": "regex",
                    "text": "Value must be a number",
                    "regex": "[0-9]*" 
                }
            ]
        },
        {
            name: "tr",
            title: "TR",
            type: "text",
            "inputType": "number",
            "step": 0.001,
            "isRequired": true,
            "validators": [
                { 
                    "type": "numeric", 
                    "type": "regex",
                    "text": "Value must be a number",
                    "regex": "[0-9]*" 
                }
            ]
        },
        {
            name: "wdr",
            title: "WDR",
            type: "radiogroup",
            "isRequired": true,
            "requiredErrorText": "Value cannot be empty",
            choices: [
                "Yes",
                "No"
            ]
        },        
        { 
            type: "radiogroup", 
            name: "price to competitors",
            title: "Compared to our competitors, do you feel the Product is",
            "isRequired": true,
            "requiredErrorText": "Value cannot be empty",
            choices: [
                "Less expensive", 
                "Priced about the same", 
                "More expensive", 
                "Not sure"
            ]
        },
        { 
            type: "radiogroup",                 
            name: "price", 
            title: "Do you feel our current price is merited by our product?",
            "isRequired": true,
            "requiredErrorText": "Value cannot be empty",
                
            choices: [
                "correct|Yes, the price is about right",
                "low|No, the price is too low for your product",
                "high|No, the price is too high for your product"
            ]
        },
            
        { 
            type: "multipletext", 
            name: "pricelimit", 
            title: "What is the... ",
                
            items: [
                { 
                    name: "mostamount", 
                    title: "Most amount you would every pay for a product like ours" 
                },
                    
                { 
                    name: "leastamount", 
                    title: "The least amount you would feel comfortable paying" 
                }
            ]
        },

                    
            
        
    ],
};

let surveyViewModel = new Survey.Model(jsonForSurvey);
surveyViewModel.applyTheme(SurveyTheme.SharpLight);
$(() => {
    ko.applyBindings({
        theViewModel: surveyViewModel,
    });
});
