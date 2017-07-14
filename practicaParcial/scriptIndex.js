$(document).ready(function(){
    $("#btnHacerPost").click(function(){
        $("#form").html('<div class="form-group col-md-4 col-sm-4"><label for="titulo">Titulo</label><input type="text" class="form-control" placeholder="Titulo" tabindex="1" id="texttitle"></div><div class="form-group col-md-4 col-sm-4"><label for="header">Header</label><input type="text" class="form-control" placeholder="" tabindex="2" id="textheader"></div><div class="form-group col-md-4 col-sm-4"><label for="posttext">Text</label><input class="form-control" type="text" placeholder="text" id="posttext" ></div><div class="btn-group col-md-2 col-sm-2"><button type="submit" class="form-control btn btn-success"  id="btnPost" onClick=btnPost() value="post">Post</button></div></div>');
    });
    });



function btnPost(){
var datosPost = {title: $("#texttitle").val(),header:$("#textheader").val(),posttext:$("#posttext").val(),author:getParameterByName("email",window.location)};
        $("#form").html("");
        $("#post").html("<img src='image/126.gif'>");
        $.ajax({
            url:'http://localhost:1337/postearNuevaEntrada',
            type:'POST',
            cache: false,
            async:true,
            data:JSON.stringify(datosPost)
        }).done(function(data){
                $("#post").html('<div><h2 style=color:'+getParameterByName("color",window.location)+' font:'+getParameterByName("font",window.location)+'>'+data.header+'</h2><h4>'+data.title+'</h4><h5>'+data.posttext+'</h5><h6>'+data.author+"  "+data.date+'</h6></div>');
}).fail().always();
}
 function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "))};