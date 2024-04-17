new ClipboardJS('#copyInput', {
    text: function(trigger){
        return document.getElementById("myInput").value;
    }
}).on('success', function(e) {
   alert("复制成功！请直接点开您的QQ好友或群或者微信好友或微信群粘贴分享！");
   e.clearSelection();
}).on('error', function(e) {
    alert('Error!');
});