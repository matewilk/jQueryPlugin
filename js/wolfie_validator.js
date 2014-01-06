/* 
 * author: Mateusz Wilk
 * Walidator dla Roche
 */

(function($){
    $.extend($.fn, {
        wolfie_validator: function(options){
            var validator = new $.validatorr(options, this[0]);
            this.submit($.proxy(validator.check, validator));
        }
    });
    
    //constructor for validator
    $.validatorr = function(options, form){
        this.settings = $.extend( true, {}, $.validatorr.defaults, options );
        this.form = form;
        this.init()
    }

    $.extend($.validatorr, {
        
        defaults: {
            message: 'Please fill out marked form fields!',
            agreeMsg: 'Agree for terms to submit form!',
            color: 'red'
        },

        prototype: {

            init: function(){ 
                //initial values
                this.invalid = [];
                //clears all values before submit
                this.reset();
                //creating error message box on the fly
                $(this.form).prepend('<p id="error_message" style="color:'+this.settings.color+'"></p>');
                //create css class for inputs elements on the fly
                $('<style>').text('.foo {border: 1px solid '+this.settings.color+'}').appendTo('head');
            },

            //reset invalid table which stores invalid elements names
            reset: function(){
                this.invalid = [];
            },

            //get all necessary elemetns of the form
            getElements: function(){
                var elems = $(this.form)
                .find("input, select, textarea")
                .not(":radio, :submit, :reset, :image, [disabled]")
                .filter(function() {
                    if (!this.name) {
                        console.error( "%o has no name assigned", this);
                    }
                    return true;
                });
                return elems;
            },
            
            //check validity of the form
            check: function(){
                //reset invalid table
                this.reset();
                
                //iterate thru elements
                var elems = this.getElements();
                for ( var i = 0; i < elems.length; i++ ) {
                    if(!this.getElementValue(elems[i])){
                       this.highlight(elems[i]);
                       this.invalid.push(elems[i].type)
                    }
                    else {
                        this.unhighlight(elems[i]);
                    }

                }
                //attach proper message to message box above form
                if(this.invalid.length > 0){
                    var message = this.settings.message
                    var self = this;
                    
                    //show message depending on type of field (checkbox or others)
                    $.each(this.invalid, function(index, item){
                        if(item == 'checkbox' && self.invalid.length == 1){
                            message = self.settings.agreeMsg;
                        }
                        else{
                            message = self.settings.message;
                        }
                    })
                    $("#error_message").text(message)  
                }
                else
                {
                    $("#error_message").text('')
                }
                
                //return true if no invalid elements in form
                return this.invalid.length == 0;
            },
            
            //checks if particular element should be add to invalid array
            getElementValue: function(element){
                if (element.nodeName.toLowerCase() === "select" ) {
                    return $("select[name='" +$(element).attr("name") +"'] option:selected").val();
                }
                else if ($(element).attr("type") === "checkbox" ) {
                    //this.settings.message = 'Agree for terms to submit form!'
                    return $("input[name='" + $(element).attr("name") + "']:checked").val();
                }
                else {
                    if($(element).attr("type") === 'email'){
                        return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test($(element).val());
                    }
                    else
                        return $(element).val() != "";
                }
            },
            
            //highlight invalid elements
            highlight: function(element) {
                $(element).addClass('foo');//css('border', '1px solid '+this.settings.color);
            },
            //clears invalid elements hightliht
            unhighlight: function(element) {
                $(element).removeClass('foo')
            }
        }
    })
    
})(jQuery);



