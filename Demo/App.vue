<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style>
	@import url("/common/style.css");
	@import url("/common/iconfont.css");

	body,
	page {
		background-color: var(--bgColor);
	}

	.f-start {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.f-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.f-end {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.f-between {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.f-around {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
</style>