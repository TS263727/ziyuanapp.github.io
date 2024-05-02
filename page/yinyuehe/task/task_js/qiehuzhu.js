var items = $("select[default]")
for (i = 0; i < items.length; i++) {
	$(items[i]).val($(items[i]).attr("default"))
}

$(".col-sm-offset-2.col-sm-10").click(function () {

	//	daa = $("input[name='daa']").val();
	dac = $("input[name='dac']").val()

	if (dac == "") {
		alert("请填写密码")
	} else if (dac != "提现申请" && dac != "提现") {
		alert("请确保全部完成新人福利并提现后再提交，我们保证影视网站永不收费真实可用永久维护更新，一经验证终身免费使用")
		return false
	}
})