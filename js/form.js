function others(type) {
	let element = document.getElementById("others_"+type);
	var val = document.getElementById("select_"+type).value;
	if(val === "その他") {
		// hidden属性を削除
		element.removeAttribute("hidden");
	}else {
		// hidden属性を設定
		element.setAttribute("hidden", true);
	}
}