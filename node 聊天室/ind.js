var app=require('http').createServer(handler);
var fs=require('fs');
var io=require('socket.io')(app);
var path=require('path');
var querystring=require('querystring');
var urls=require('url');
function handler(req,res){
	var urlobj=urls.parse(req.url);
	var strhouzhui=path.extname(urlobj.pathname);
	var strfilename=urlobj.pathname;
	res.writeHead(200,{"Content-Type":"text/"+(strhouzhui.slice(1)?strhouzhui.slice(1):"plain")+";charset=utf-8"})

	if(strhouzhui==='.html'||strhouzhui==='.css'||strhouzhui==='.js'){
	   res.end(fs.readFileSync(path.join(__dirname,strfilename)))
	}
}
app.listen(3333, function(){
	console.log('开始监听...')
});
//console.log(io)
io.on('connection',function(socket){
	var userlist={};
	var socketid=socket.id;
	userlist[socketid]={
		socket:socket
	}
	/*socket.emit('news',{hello:'word'})*/
	//console.log(userlist)
	socket.on('join',function(data){
		//console.log(socket.handshake.address)
		socket.broadcast.emit('jinru',socket.handshake.address)
	})


	socket.on('disconnect',function(data){
		if(userlist[socketid]){
			socket.broadcast.emit('likai',socket.handshake.address)
		}
		delete userlist[socketid]
	})


	socket.on('say',function(data){
		//console.log(data)
		socket.broadcast.emit('fayan',{
			address:socket.handshake.address,
			text:data.text
		})
	})
})