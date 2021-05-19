/*
    Name:Noah Scott
    Date: 5/19/21
*/


var app = new Vue({
    el: "#app", 
    data () {
        return {
            apiKey: '066f7dfe9eba8d3019746f5a058878be', 
            url: 'https://api.openweathermap.org/data/2.5/',
            unit: '',
            unit_f_c: '',
            unit_text: '',
            unit_valid: '',
            text: '',
            text_valid: '',
            weather: {}
        }
        
        
    },
    methods:{
        setWeather: function(a)
        {
            //If statement for if enter is clicked
            if(a.key == "Enter" && this.text.length == 5) {
                if(this.unit == 'C' || this.unit == 'c') //If statement for if C or c is entered
                {
                    //sets unit_text to metric(Celsius) and calls the api to pull the data
                    this.unit_text = "metric"
                    this.unit_f_c = "C"
                    this.unit_valid = ""
                    this.text_valid = ""
                    fetch(`${this.url}weather?q=${this.text}&units=${this.unit_text}&APPID=${this.apiKey}`)
                    .then(res => {
                    return res.json();
                    }).then(this.getResults);
                }//end If
                else if(this.unit == 'F' || this.unit == 'f') // if statement for if F or f is entered
                {
                    //sets unit_text to imperial(fahrenheit) and calls the api to pull the data
                    this.unit_text = "imperial"
                    this.unit_f_c = "F"
                    this.unit_valid = ""
                    this.text_valid = ""
                    fetch(`${this.url}weather?q=${this.text}&units=${this.unit_text}&APPID=${this.apiKey}`)
                    .then(res => {
                    return res.json();
                    }).then(this.getResults);
                }//end Else If
                else// if not equal to F, f, C, or c gives error
                {
                    this.unit_valid = "invalid please enter a C or F"
                }
                
                
            }
            else if(a.key == "Enter" && this.text.length != 5)//if zip code is not equal to 5 digits then gives error
            {
                this.text_valid = "Please Enter a 5 digit Zip Code"
            }
        },
        //sets weather to the results of the api call
        getResults (results) {
            this.weather = results;
        },

    }   
    
})
