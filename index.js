$(async () => {
    try {
        let requestInfo = new Request(
            //"https://medical-survey-api.tech101.in/surveys/654309ec3b447b85bbe3af97/surveyjs",
            "http://localhost:8080/surveys/65457f5e4761b17bcdb35a96/surveyjs",
            {
                method: "get",
            }
        );

        let httpResponse = await fetch(requestInfo);

        let { status, statusText } = httpResponse;
        let message;

        let payload = await httpResponse.json();

        if (payload) {
            ({ message } = payload);
        }

        if (status != 200) {
            console.log(
                `Failed to fetch survey data with error ${status} ${statusText}`
            );

            if (message) {
                console.log(message);
            }
        }

        let { data } = payload;

        let surveyViewModel = new Survey.Model(data);
        surveyViewModel.applyTheme(SurveyTheme.SharpLight);
        surveyViewModel.onComplete.add(async (survey) => {
            let submitData = {
                surveyId: "65457f5e4761b17bcdb35a96",
                ...survey.data,
            };

            let submitRequest = new Request(
                "http://localhost:8080/survey-responses",
                {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(submitData),
                }
            );

            await fetch(submitRequest);
        });

        ko.applyBindings({
            theViewModel: surveyViewModel,
        });
    } catch (e) {
        console.log("Fault occured on the page");
        console.log(e);
    }
});
