let jsonForSurvey = {
    elements: [
        {
            name: "lr",
            title: "LR",
            type: "text",
        },
        {
            name: "wdr",
            title: "WDR",
            type: "text",
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
