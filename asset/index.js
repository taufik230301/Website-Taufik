const firstName = prompt("Siapa Nama Depan Anda?");
const lastName = prompt("Siapa Nama Terakhir Anda ?");
const kabar = prompt("Apa Kabar ?");


const user = {
	name: {
		first: firstName,
		last: lastName
	},
	kabar: kabar
};
function ganti() {
document.getElementById("span").innerHTML = user.name.first +" "+ user.name.last;
}

if(user.kabar.length > 0){
ganti();
   alert("Trimakasih sudah berkunjung :), Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!"+" Alhamdulilah Saya Juga " +user.kabar);
}else if(user.kabar.length === 0){
	window.location.href = 'index1.html';
}

function inputoutput(){
	var x = document.getElementById("input").value;
	var y = document.getElementById("input1").value;
	document.getElementById("output").innerHTML = "Komentar dari "+x+"";
	document.getElementById("output2").innerHTML = "\""+y+"\"";

}