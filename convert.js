function red(){
    var data = "&color255-0-0"
}
function green(){
    var data = "&color0-255-0"

}
function blue(){
    var data = "&color0-0-255"

}

function generate()
{
    var link = document.getElementById("link").value;
    var QRimg = ("https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + link + data);
    var x = document.querySelector('img')
    x.setAttribute("src",QRimg)
    down.href=QRimg ;

    console.log(QRimg)

}
