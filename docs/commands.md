<div class="command-title-btn">コマンド一覧</div>

<style>
body.commands-page {
	background: url('../command_image.png') center center/cover no-repeat fixed !important;
}
.commands-page .md-content, .commands-page .md-content * {
	color: #fff !important;
	text-shadow: 2px 2px 8px #f7f7f7ff, 0 0 8px #000a;
	font-size: 5.35em !important;
}
.commands-page .md-content ::selection, .commands-page .md-content *::selection {
	background: #1976d2 !important;
	color: #fff !important;
	font-size: 3.28em !important;
}
.command-title-btn {
	display: block;
	margin: 32px auto 24px auto;
	padding: 18px 48px;
	background: linear-gradient(90deg, #438119 0%, #07667e 100%);
	color: #fff;
	font-size: 2em;
	font-weight: bold;
	border-radius: 16px;
	box-shadow: 0 4px 16px #0004;
	text-align: center;
	letter-spacing: 0.1em;
	user-select: none;
	width: fit-content;
}
.commands-page .md-content {
	text-align: center;
}
/* コマンド説明文をボタン風・小さめに */
.command-snippet {
	display: inline-block;
	background: linear-gradient(90deg, #07667e 0%, #438119 100%);
	color: #fff;
	font-size: 1em;
	font-weight: bold;
	border-radius: 12px;
	box-shadow: 0 2px 8px #0003;
	padding: 18px 32px;
	margin: 18px auto 0 auto;
	text-align: left;
	line-height: 1.7;
	letter-spacing: 0.03em;
	user-select: text;
}
</style>

<script>
// ページロード時にbodyへクラスを付与
document.addEventListener('DOMContentLoaded', function() {
	document.body.classList.add('commands-page');
});
</script>

<div class="command-snippet">
お金を譲渡する &lt;&gt;←は入力結構です。<br><br>
/pay &lt;お名前&gt; &lt;金額&gt;<br><br>
個人チャットを送る<br><br>
/w &lt;お名前&gt;
</div>