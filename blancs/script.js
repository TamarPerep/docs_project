function c(o){
    console.log(o);
}

var app = {
    data:{},
    id:null,
    field:null,
    input:null,
    click:function(c){
        this.field = c.parent();
        this.id = this.field.attr('id');

        if(this.data[this.id] === 'undefined'){
            this.data[this.id] = {
                data:''
            }
        }

        this.form();
    },
    form:function(){
        var value = this.data[this.id]['data'];
        this.field.append('<div class="form-wrap"><input class="input" value="'+value+'"><button>ok</button></div>');
        this.input = $('.form-wrap');

    },
    send:function(){
        this.data[this.id]['data'] = this.input.find('.input').val();
        this.input.remove();
        this.render();
    },
    render:function(){
        var _data = this.data[this.id]['data'];
        this.field.find('.cell').text('');

        for (var i = 0; i <= _data.length; i++){
            this.field.find('.cell' + i).text(_data[i]);
        }
    }

};



$(function(){

    $('.page .cells').on('click', function(){
        app.click($(this));
    });

    $('.ok').live('click', function(){
        app.send();
    });


    $('.page').on('mousedown', function(e){
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;
        c(x + ',' + y);
        $('.page').on('mouseup', function(e){
            var x1 = e.pageX - $(this).offset().left;
            var y1 = e.pageY - $(this).offset().top;
            c(x1 + ',' + y1);

        })
    })
});