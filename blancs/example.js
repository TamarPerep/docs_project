function c(o){
    console.log(o);
}



var app ={
    data: {},
    field:null,
    id:null,
    input:null,
    click: function(obj){
        this.field = obj.parent();
        this.id = this.field.attr('id');

        if(this.data[this.id] === 'undefined'){
            this.data[this.id] = {
                data:'',
                update:''
            }
        }
        this.form();

    },
    form:function(){
        var value = '';

        if(this.data[this.id]['data'] == ''){
            value = this.data[this.id]['update'];
        }else{
            value = this.data[this.id]['data'];
        }

        this.field.append('<div class="form-wrap"><input class="input" value="'+value+'"><button class="ok">ok</button></div>');
        this.input = $('.form-wrap');
    },
    submit:function(){
        this.data[this.id]['data'] = this.input.find('.input').val();
        this.input.remove();
        this.render();
    },
    render:function(){
        var _data = this.data[this.id]['data'];
        this.field.find('.cell').text('');

        for(var i = 0; i<_data.lenght; i++){
            this.field.find('.cell' + i).text(_data[i]);
        }
    }

};

$(function(){

    $('.page .cells').on('click', function(){
        app.click($(this));
    });

    $('.ok').live('click', function(){
        app.submit();
    });

});




    // var input = function(fieldId){
    //     var field = $('#'+fieldId);
    //     var formerInput = $('.input-wrapp');

    //     if(formerInput[0]){
    //         var inputId = formerInput.attr('fieldid');
    //         var dataInInput = formerInput.find('.input').val();
    //         data[inputId]['update'] = dataInInput;
    //         formerInput.remove();
    //     }
    // }














